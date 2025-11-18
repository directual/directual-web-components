import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import styles from './form2.module.css'
import icon from './../../../../icons/fps-form2.svg'
import { dict } from '../../locale'
import _, { isEmpty } from 'lodash'
import PropTypes from 'prop-types';
import InnerHTML from 'dangerously-set-html-content'
import FormElement from './FpsForm2Element'
import FpsFormPopup from './FpsForm2Popup'
import Hint from '../../hint/hint'
//import debounce from 'lodash.debounce';
import { debounce } from 'lodash'
import moment from 'moment'
import Loader from '../../loader/loader'

export default function FpsForm2(props) {


  const { auth, data, callEndpoint, onEvent, id, locale, handleRoute, currentBP, templateEngine } = props

  // console.log("=== FpsForm2 data ===")
  // console.log(data)

  const lang = locale ? locale.length == 3 ? locale : 'ENG' : 'ENG'
  const defaultState = { "step": "default step", "popup": "" }
  const params = _.get(data, "params")
  const fields = _.get(data, "fileds")
  const edditingOn = _.get(params, "general.edittingOn")
  const emptyValues = fakeSchemeForTemplating([..._.get(data, "fileds", []), _.get(data, "headers", [])], _.get(data, "fieldScheme")) //  формируем джейсончик для шаблонизации (пустой)

  function fakeSchemeForTemplating(fields, fieldScheme) {
    let array = []
    try {
      array = fields.map(i => i.sysName)
    } catch (err) {
      console.error(err)
    }
    array = [...array,
    ..._.map(_.sortedUniq(_.sortBy((fieldScheme || []).map(item => item[0]))), i => i.split(".")[0]),
    ]
    return _.zipObject(array, Array(array.length).fill(''))
  }

  const gatherDefaults = () => {
    let tempModel = {};
    (_.get(params, "steps") || []).forEach(step => {
      (step.elements || []).forEach(element => {
        if (element.type == "input") {
          (element._input_fields || []).forEach(field => {
            if (field._field_set_default && field._field_default_value) {
              tempModel[field._field] = field._field_default_value
            }
          })
        }
      })
    })
    return tempModel
  }
  const [model, setModel] = useState({ ...composeInitialModel() })
  const modelRef = useRef(model);
  const [extendedModel, setExtendedModel] = useState({ ...composeInitialModel() }) // тут было gatherDefaults
  const extendedModelRef = useRef(extendedModel);
  const [originalModel, setOriginalModel] = useState({ ...composeInitialModel() }) // тут было gatherDefaults
  const originalModelRef = useRef(originalModel);
  const [originalExtendedModel, setOriginalExtendedModel] = useState({ ...composeInitialModel() }) // тут было gatherDefaults
  const previousModel = usePrevious(model);
  const [state, setState] = useState(_.get(data, "params.state") || defaultState)
  const stateRef = useRef(state);
  const previousState = usePrevious(state);
  const transformedState = {
    FormState: state, WebUser: { ...auth, ...{ id: auth.user } }
  }
  const defaultModel = { ...emptyValues, ...model, ...transformedState }
  const defaultExtModel = { ...emptyValues, ...extendedModel, ...transformedState }
  const [loading, setLoading] = useState(false)
  const modelIsChanged = !_.isEqual(model, originalModel)
  const [refresh, setRefresh] = useState(0)

  const [highlightState, setHighlightState] = useState(false)
  const [highlightModel, setHighlightModel] = useState(false)
  const [initialized, setInitialized] = useState(!edditingOn);
  const isSocketUpdateRef = useRef(false); // ref для отслеживания обновлений от сокета
  const restoredStepRef = useRef(null); // храним step при восстановлении state из поля
  const isAutoSubmittingRef = useRef(false); // флаг что прямо сейчас идёт автосабмит

  // console.log(model)
  // console.log(originalModel)

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
  }

  useEffect(() => {
    modelRef.current = model;
  }, [model]);

  useEffect(() => {
    console.log('[STATE CHANGE LOG] state изменился на:', JSON.parse(JSON.stringify(state)));
    stateRef.current = state;
  }, [state]);

  useEffect(() => {
    extendedModelRef.current = extendedModel;
  }, [extendedModel]);

  useEffect(() => {
    originalModelRef.current = originalModel;
  }, [originalModel]);

  const [autoSubmitStep, setAutoSubminStep] = useState(state.step)

  const cx = null
  //const debouncedCallEndpint = debounce(callEndpoint, 700);

  // Пока временно убираю использование debounced функций из useEffect'ов

  const parseJson = json => {
    if (!json) return {}
    let parsedJson = {}
    if (typeof json == 'object') return json
    try {
      parsedJson = JSON.parse(json)
    }
    catch (e) {
      console.log(json);
      console.log(e);
    }
    return parsedJson
  }

  function composeInitialModel() {
    const timestampToISO = (timestamp) => {
      if (timestamp) { return new Date(timestamp).toISOString() } else { return timestamp }
    }
    const convertedDates = _.reduce(_.get(data, "fileds"), (result, field) => {
      // Ensure the field exists in the objectModel
      if (field.dataType === 'date' && _.get(data, "data[0]") && _.get(data, "data[0]")[field.sysName]) {
        try {
          result[field.sysName] = timestampToISO(_.get(data, "data[0]")[field.sysName]);
        }
        catch (e) {
          console.log(e);
          console.log(_.get(data, "data[0]")[field.sysName])
        }
      }
      return result;
    }, {});

    const convertedBools = _.reduce(_.get(data, "fileds"), (result, field) => {
      // Ensure the field exists in the objectModel
      if (field.dataType === "boolean" && _.get(data, "data[0]") && (_.get(data, "data[0]")[field.sysName] || _.get(data, "data[0]")[field.sysName] === false)) {
        result[field.sysName] = _.get(data, "data[0]")[field.sysName] ? "true" : "false";
      }
      return result;
    }, {});
    const dataObject = edditingOn ? { ..._.get(data, "data[0]"), ...convertedDates, ...convertedBools } : {}
    const newModel = ({
      //...model,  //чтобы старое затиралось
      ...flatternModel({
        ...gatherDefaults(),
        ...dataObject
      })
    })
    return newModel
  }

  // process Socket.io update
  useEffect(() => {

    // костыль под баг сокетов с левыми данными
    if (_.get(model, "id") && _.get(data, "data[0].id") && _.get(model, "id") !== _.get(data, "data[0].id")) {
      // хуйня пришла
      return;
    }

    const timestampToISO = (timestamp) => {
      if (timestamp) { return new Date(timestamp).toISOString() } else { return timestamp }
    }

    if (edditingOn) {
      const convertedDates = _.reduce(_.get(data, "fileds"), (result, field) => {
        // Ensure the field exists in the objectModel
        if (field.dataType === 'date' && _.get(data, "data[0]") && _.get(data, "data[0]")[field.sysName]) {
          try {
            result[field.sysName] = timestampToISO(_.get(data, "data[0]")[field.sysName]);
          }
          catch (e) {
            console.log(e);
            console.log(_.get(data, "data[0]")[field.sysName])
          }
        }
        return result;
      }, {});

      const convertedBools = _.reduce(_.get(data, "fileds"), (result, field) => {
        // Ensure the field exists in the objectModel
        if (field.dataType === "boolean" && _.get(data, "data[0]") && (_.get(data, "data[0]")[field.sysName] || _.get(data, "data[0]")[field.sysName] === false)) {
          result[field.sysName] = _.get(data, "data[0]")[field.sysName] ? "true" : "false";
        }
        return result;
      }, {});

      const newExtendedModel = {
        ...gatherDefaults(),
        ..._.get(data, "data[0]"),
        ...convertedDates,
        ...convertedBools
      }
      setExtendedModel(newExtendedModel)
      let saveSate = { ...state }
      const newModel = ({
        //...model,  //чтобы старое затиралось
        ...flatternModel({
          ...gatherDefaults(),
          ..._.get(data, "data[0]"),
          ...convertedDates,
          ...convertedBools
        })
      })

      if (!_.isEqual(newModel, model)) {
        // Отменяем все pending debounced submits чтобы они не перезаписали сокетное обновление
        submitDebouncedRef.current.cancel();
        
        isSocketUpdateRef.current = true; // устанавливаем флаг что это обновление от сокета
        setModel(newModel)
        setOriginalModel(newModel)
      }
      setOriginalExtendedModel(newExtendedModel)
      
      console.log('[SOCKET/RESTORE LOG] === НАЧАЛО СОКЕТНОГО ОБНОВЛЕНИЯ ===');
      console.log('[SOCKET/RESTORE LOG] текущий state ДО перезаписи:', JSON.parse(JSON.stringify(state)));
      console.log('[SOCKET/RESTORE LOG] saveSate перед templateState:', JSON.parse(JSON.stringify(saveSate)));
      
      // ВСЕГДА применяем templateState при обновлении модели
      // Это обеспечивает синхронизацию state с моделью через шаблоны типа {{status}}
      const templatedState = templateState(_.get(data, "params.state"), newModel);
      console.log('[SOCKET/RESTORE LOG] params.state:', _.get(data, "params.state"));
      console.log('[SOCKET/RESTORE LOG] templateState вернул:', JSON.parse(JSON.stringify(templatedState)));
      saveSate = { ...saveSate, ...templatedState }
      console.log('[SOCKET/RESTORE LOG] saveSate после templateState:', JSON.parse(JSON.stringify(saveSate)));
      
      // RESTORE STATE:
      if (_.get(params, "general.restoreState") && _.get(params, "general.saveStateTo")) {
        const fieldName = _.get(params, "general.saveStateTo");
        const fieldValue = newModel[fieldName];
        console.log('[SOCKET/RESTORE LOG] Восстанавливаем state из поля:', fieldName);
        console.log('[SOCKET/RESTORE LOG] Значение поля:', fieldValue);
        const restoredState = parseJson(fieldValue);
        console.log('[SOCKET/RESTORE LOG] restoredState (распарсенный):', JSON.parse(JSON.stringify(restoredState)));
        saveSate = { ...saveSate, ...restoredState }
        // Блокируем автосабмит на восстановленный step через restoredStepRef
        restoredStepRef.current = restoredState.step
      }
      console.log('[SOCKET/RESTORE LOG] ИТОГОВЫЙ setState с:', JSON.parse(JSON.stringify(saveSate)));
      console.log('[SOCKET/RESTORE LOG] === КОНЕЦ СОКЕТНОГО ОБНОВЛЕНИЯ ===');
      setState(saveSate)
      setInitialized(true)
    }

  }, [_.get(data, "data[0]")])

  useEffect(() => {
    if (!_.isEqual(previousModel, model)) {
      setHighlightModel(true)
      setTimeout(() => setHighlightModel(false), 300)
    }
  }, [model])

  const checkHidden = (element, debug, reverse) => {

    // console.log("checkHidden")
    // console.log(element)
    // console.log(_.get(data, "params._condition_library"))

    let _conditions = _.get(element, "_conditions") || []
    let _name = ""
    let _action_conditionals_and_or = _.get(element, "_action_conditionals_and_or") || "AND"
    if (_.get(element, "_action_conditionals_manual") == "from_list" &&
      _.get(element, "_action_conditionals_manual_list")) {
      const _cond_lib = _.get(data, "params._condition_library")
      _name = _.get(_.find(_cond_lib, { id: _.get(element, "_action_conditionals_manual_list") }), "title")
      _conditions = _.get(_.find(_cond_lib, { id: _.get(element, "_action_conditionals_manual_list") }), "_conditions") || []
      _action_conditionals_and_or = _.get(_.find(_cond_lib, { id: _.get(element, "_action_conditionals_manual_list") }), "_action_conditionals_and_or") || _action_conditionals_and_or
    }

    // Логика для many_from_list - собираем условия из нескольких элементов библиотеки
    if (_.get(element, "_action_conditionals_manual") == "many_from_list" &&
      _.get(element, "_action_conditionals_many_conditions") &&
      _.get(element, "_action_conditionals_many_conditions").length > 0) {
      const _cond_lib = _.get(data, "params._condition_library")
      const conditionIds = _.get(element, "_action_conditionals_many_conditions") || []
      _action_conditionals_and_or = _.get(element, "_action_conditionals_many_and_or") || "AND"
      
      // Собираем все условия из библиотеки в один массив
      let allConditions = []
      let names = []
      conditionIds.forEach(condId => {
        const foundCondition = _.find(_cond_lib, { id: condId })
        if (foundCondition) {
          const conditions = _.get(foundCondition, "_conditions") || []
          allConditions = [...allConditions, ...conditions]
          const title = _.get(foundCondition, "title")
          if (title) names.push(title)
        }
      })
      
      _conditions = allConditions
      // Формируем название для дебаг режима: "Condition1 AND Condition2"
      _name = names.length > 0 ? names.join(` ${_action_conditionals_and_or} `) : ""
    }

    const checkHiddenCondition = (element) => {
      let isHidden = false
      let details = ""
      let condition = ""

      let field = template("{{" + element._conditionalView_field + "}}")
      let value = template(element._conditionalView_value)

      // { key: "modelNotChanged" },
      if (element._conditionalView_operator == "modelNotChanged") {
        let direct = "model is changed"
        let indirect = "model is NOT changed"
        condition = indirect
        if (modelIsChanged) {
          details = direct // reverse ? "" : direct
          isHidden = true
        } else {
          details = indirect // reverse ? indirect : ""
          //details = reverse ? null : direct
        }
      }

      // { key: "modelChanged" },
      if (element._conditionalView_operator == "modelChanged") {
        let direct = "model is NOT changed"
        let indirect = "model is changed"
        condition = indirect
        if (!modelIsChanged) {
          details = direct // reverse ? "" : direct
          isHidden = true
        } else {
          details = indirect // reverse ? indirect : ""
          //details = reverse ? indirect : direct
        }
      }

      // { key: "==", value: "is equal" },
      if (element._conditionalView_operator == "==") {
        if (typeof field == 'boolean') { field = JSON.stringify(field) }
        let direct = "{{" + element._conditionalView_field + "}} → " + field + " !== " + value
        let indirect = "{{" + element._conditionalView_field + "}} → " + field + " == " + value
        condition = "{{" + element._conditionalView_field + "}} == " + element._conditionalView_value
        if (!_.isEqual(field, value)) {
          details = direct //reverse ? indirect : direct
          isHidden = true
        } else {
          details = indirect //reverse ? direct : indirect
          // details = reverse ? indirect : direct
        }
      }

      // { key: "!==", value: "is NOT equal" },
      if (element._conditionalView_operator == "!==") {
        let direct = "{{" + element._conditionalView_field + "}} → " + field + " == " + value
        let indirect = "{{" + element._conditionalView_field + "}} → " + field + " !== " + value
        condition = "{{" + element._conditionalView_field + "}} !== " + element._conditionalView_value
        if (typeof field == 'boolean') { field = JSON.stringify(field) }
        if (_.isEqual(field, value)) {
          details = direct // reverse ? "" : direct
          isHidden = true
        } else {
          details = indirect // reverse ? indirect : ""
          // details = reverse ? indirect : direct
        }
      }

      // { key: "contains", value: "contains" },
      if (element._conditionalView_operator == "contains") {
        value = value ? value.split(",") : '""'
        field = field ? field.split(",") : '""'
        let direct = "{{" + element._conditionalView_field + "}} → " + field + " does NOT contain " + value
        let indirect = "{{" + element._conditionalView_field + "}} → " + field + " contains " + value
        condition = "{{" + element._conditionalView_field + "}} contains " + element._conditionalView_value
        if ((field && field.length > 0 &&
          value && value.length > 0
          && _.intersection(value, field).length == 0) || !field || !value) {
          details = direct // reverse ? "" : direct
          isHidden = true
        } else {
          details = indirect // reverse ? indirect : ""
          // details = reverse ? indirect : direct
        }
      }
      // { key: "notContains", value: "does NOT contain" },
      if (element._conditionalView_operator == "notContains") {
        value = value ? value.split(",") : '""'
        field = field ? field.split(",") : '""'
        let direct = "{{" + element._conditionalView_field + "}} → " + field + " contains " + value
        let indirect = "{{" + element._conditionalView_field + "}} → " + field + " does NOT contain " + value
        condition = "{{" + element._conditionalView_field + "}} does NOT contain " + element._conditionalView_value
        if ((field && field.length > 0 &&
          value && value.length > 0
          && _.intersection(value, field).length > 0) || !field || !value) {
          details = direct // reverse ? "" : direct
          isHidden = true
        } else {
          details = indirect // reverse ? indirect : ""
          // details = reverse ? indirect : direct
        }
      }

      // { key: "in", value: "in" },
      if (element._conditionalView_operator == "in") {
        value = value ? value.split(",") : '""'
        field = field ? field.split(",") : '""'
        let direct = value + " does NOT contain " + "{{" + element._conditionalView_field + "}} → " + field
        let indirect = value + " contains " + "{{" + element._conditionalView_field + "}} → " + field
        condition = element._conditionalView_value + " contains " + "{{" + element._conditionalView_field + "}}"
        if ((field && field.length > 0 &&
          value && value.length > 0
          && _.intersection(value, field).length == 0) || !field || !value) {
          details = direct // reverse ? "" : direct
          isHidden = true
        } else {
          details = indirect // reverse ? indirect : ""
          // details = reverse ? indirect : direct
        }
      }

      // { key: "notIn", value: "NOT in" }
      if (element._conditionalView_operator == "notIn") {
        value = value ? value.split(",") : '""'
        field = field ? field.split(",") : '""'
        let direct = ""
        let indirect = ""
        try {
          direct = (Array.isArray(value) ? value : []).join(",") + " contains " + "{{" + element._conditionalView_field + "}} → " + field
          indirect = (Array.isArray(value) ? value : []).join(",") + " does NOT contain " + "{{" + element._conditionalView_field + "}} → " + field
        } catch (err) {
          // console.error(err)
          // console.log("value")
          // console.log(value)
          // console.log("field")
          // console.log(field)
        }

        condition = element._conditionalView_value + " does NOT contain " + "{{" + element._conditionalView_field + "}}"
        if ((field && field.length > 0 &&
          value && value.length > 0
          && _.intersection(value, field).length > 0) || !field || !value) {
          details = direct // reverse ? "" : direct
          isHidden = true
        } else {
          details = indirect // reverse ? indirect : ""
          // details = reverse ? indirect : direct
        }
      }

      // { key: "isNull", value: "is empty" },
      if (element._conditionalView_operator == "isNull") {
        let direct = "{{" + element._conditionalView_field + "}} → " + (field || '""') + " is NOT empty"
        let indirect = "{{" + element._conditionalView_field + "}} → " + (field || '""') + " is empty"
        condition = "{{" + element._conditionalView_field + "}} is empty"
        if (!_.isEmpty(field)) {
          details = direct // reverse ? "" : direct
          isHidden = true
        } else {
          details = indirect //reverse ? indirect : ""
          // details = reverse ? indirect : direct
        }
      }

      // { key: "isNotNull", value: "is NOT empty" },
      if (element._conditionalView_operator == "isNotNull") {
        let direct = "{{" + element._conditionalView_field + "}} → " + (field || '""') + " is empty"
        let indirect = "{{" + element._conditionalView_field + "}} → " + (field || '""') + " is NOT empty"
        condition = "{{" + element._conditionalView_field + "}} is NOT empty"
        if (_.isEmpty(field)) {
          details = direct // reverse ? "" : direct
          isHidden = true
        } else {
          details = indirect // reverse ? indirect : ""
          // details = reverse ? indirect : direct
        }
      }

      return { isHidden, details, condition }
    }

    if (!element) return false

    let result = false
    let details = []
    let conditions = []
    if (!_.get(element, "_conditionalView")) {
    } else {
      if (!_conditions || _conditions.length == 0) { } else {

        if (_action_conditionals_and_or == "OR") {
          result = true
          _conditions.forEach(element => {
            details && details.push(checkHiddenCondition(element).details)
            conditions && conditions.push(checkHiddenCondition(element).condition)
            if (!checkHiddenCondition(element).isHidden) { result = false; }
          })
        } else {
          _conditions.forEach(element => {
            details && details.push(checkHiddenCondition(element).details)
            conditions && conditions.push(checkHiddenCondition(element).condition)
            if (checkHiddenCondition(element).isHidden) { result = true; }
          })
        }
      };
    };
    const jouinSymbol = _action_conditionals_and_or == "OR" ? " ==OR== " : " ==AND== "
    if (debug) return { result: _.compact(details).join(", "), conditions: _.compact(conditions).join(jouinSymbol), name: _name }

    return result
  }

  const showSection = section => {
    if (section.sectionVisibility == "always") return true;
    if (section.sectionVisibility == "empty" && !state.step) return true;
    if (section.sectionVisibility == "custom") {
      let current = state.step ? [state.step] : ["null"]
      let steps = section.sectionCustomVisibility ? section.sectionCustomVisibility.split(",") : []
      if (_.intersection(current, steps).length > 0) return true;
    }
    if (section.sysName == state.step) return true;
    return false;
  }

  // для кондишенов мы проверяем по-другому: если открыт попап, то на остальные шаги/секции не обращаем внимания
  const showSectionForCond = section => {
    if (section.sysName == state.popup) return true;
    if (state.popup) return false;
    if (section.sectionVisibility == "always") return true;
    if (section.sectionVisibility == "empty" && !state.step) return true;
    if (section.sectionVisibility == "custom") {
      let current = state.step ? [state.step] : []
      let steps = section.sectionCustomVisibility ? section.sectionCustomVisibility.split(",") : []
      if (_.intersection(current, steps).length > 0) return true;
    }
    if (section.sysName == state.step) return true;
    return false;
  }

  // console.log("extendedModel")
  // console.log(extendedModel)

  const submit = useCallback((finish, submitKeepModel, targetStep, autoSubmit, submitMapping = [], newData,
    actionReq, setActionError, resetModel, currentModel, newExtendedModel) => {

    // Блокируем параллельные автосабмиты - предотвращаем цикл
    if (autoSubmit && isAutoSubmittingRef.current) {
      console.log('[AUTOSUBMIT LOG] Заблокирован параллельный автосабмит');
      finish && finish(false);
      return;
    }
    
    if (autoSubmit) {
      console.log('[AUTOSUBMIT LOG] === НАЧАЛО АВТОСАБМИТА ===');
      console.log('[AUTOSUBMIT LOG] state ДО сабмита:', JSON.parse(JSON.stringify(stateRef.current)));
      console.log('[AUTOSUBMIT LOG] model:', JSON.parse(JSON.stringify(currentModel || modelRef.current)));
      isAutoSubmittingRef.current = true;
    }

    newExtendedModel = newExtendedModel || extendedModelRef.current

    if (!currentModel) { currentModel = modelRef.current }
    clearTimeout(cx);

    newData = newData || {}

    let localModel = { ...currentModel, ...newData.model }
    let localState = { ...templateState(stateRef.current, localModel), ...newData.state }

    let modelToSend = {}

    for (const f in localModel) {
      if (_.includes(_.get(data, 'writeFields'), f)) {
        // проверка на дату
        const type = _.filter(_.get(data, 'fileds'), i => i.sysName == f)
          && _.filter(_.get(data, 'fileds'), i => i.sysName == f)[0]
          && _.filter(_.get(data, 'fileds'), i => i.sysName == f)[0].dataType

        if (type == 'date') {
          modelToSend[f] = moment(localModel[f]).toISOString()
        } else {
          modelToSend[f] = localModel[f]
        }

      }
    }

    // submit mapping:
    if (submitMapping) {
      submitMapping.forEach(mapping => {
        const f = mapping.field
        const value = template(mapping.value)
        if (_.includes(_.get(data, 'writeFields'), f)) {
          // проверка на дату
          const type = _.filter(_.get(data, 'fileds'), i => i.sysName == f)
            && _.filter(_.get(data, 'fileds'), i => i.sysName == f)[0]
            && _.filter(_.get(data, 'fileds'), i => i.sysName == f)[0].dataType

          if (type == 'date') {
            modelToSend[f] = moment(value).toISOString()
          } else {
            modelToSend[f] = value
          }
        }
      })
      // до кучи сохраняем автомаппинг в модель, чтобы сокетом не дрочить
    }

    if (!modelIsChanged && !submitMapping && !_.isEqual(gatherDefaults(), localModel) && !autoSubmit &&
      !(_.get(params, "general.saveState") && _.get(params, "general.saveStateTo"))) {
      setLoading(false)
      // Сбрасываем флаг асинхронно, чтобы избежать гонки с useEffect
      if (autoSubmit) {
        // Выключаем лоадинг если был включен
        if (_.get(params, "general.showLoadingIndicatorOnAutosubmit")) {
          setState(prevState => ({ ...prevState, loading: "false" }));
        }
        queueMicrotask(() => {
          isAutoSubmittingRef.current = false;
        });
      }
      finish && finish(false)
      return;
    }

    // State to object
    if (_.get(params, "general.saveState") && _.get(params, "general.saveStateTo")) {
      modelToSend[_.get(params, "general.saveStateTo")] = JSON.stringify(localState)
    }

    // REQUIRED:
    let requiredFieldValues = _.chain(_.get(params, "steps"))
      .filter(showSectionForCond)
      .flatMap('elements')
      .filter(i => !checkHidden(i))
      .flatMap('_input_fields')
      .filter(i => !_.get(i, "_conditionalView") || checkHidden(i))
      .filter('_field_required')
      .map('_field')
      .value();


    function excludeNonEmptyValues(obj, keys) {
      const filteredKeys = _.pickBy(obj, (value, key) => {
        return !_.isEmpty((value || "").toString()); // Exclude keys with non-empty values
      });
      return keys.filter(key => !(key in filteredKeys));
    }

    let emptyFields = excludeNonEmptyValues(modelToSend, requiredFieldValues)

    if (emptyFields.length > 0 && !autoSubmit) {
      emptyFields = emptyFields.map(i => {
        const fieldName = _.find(fields, { sysName: i }).name || _.find(fields, { sysName: i }).sysName
        return fieldName ? '"' + fieldName + '"' : '"' + i + '"'
      })
      const errMessage = dict[lang].form.emptyRequired + emptyFields.join(", ")
      
      // Выключаем лоадинг если был включен
      const validationErrorState = autoSubmit && _.get(params, "general.showLoadingIndicatorOnAutosubmit")
        ? { ...templateState(stateRef.current, localModel), _submitError: errMessage, loading: "false" }
        : { ...templateState(stateRef.current, localModel), _submitError: errMessage };
      
      setState(validationErrorState)
      // Сбрасываем флаг асинхронно, чтобы избежать гонки с useEffect
      if (autoSubmit) {
        queueMicrotask(() => {
          isAutoSubmittingRef.current = false;
        });
      }
      finish && finish(true)
      return;
    }
    let actionError = ""
    if (actionReq && emptyFields.length > 0) {
      emptyFields = emptyFields.map(i => {
        const fieldName = _.get(_.find(fields, { sysName: i }), "name") || _.get(_.find(fields, { sysName: i }), "sysName")
        if (!fieldName) { console.log("FpsForm2.js !!! " + i); console.log(fields) }
        return fieldName ? '"' + fieldName + '"' : '"' + i + '"'
      })
      const errMessage = dict[lang].form.emptyRequired + emptyFields.join(", ")
      actionError = errMessage
      setActionError && setActionError(actionError)
      
      // Выключаем лоадинг если был включен
      if (autoSubmit && _.get(params, "general.showLoadingIndicatorOnAutosubmit")) {
        setState(prevState => ({ ...prevState, loading: "false" }));
      }
      
      // Сбрасываем флаг асинхронно, чтобы избежать гонки с useEffect
      if (autoSubmit) {
        queueMicrotask(() => {
          isAutoSubmittingRef.current = false;
        });
      }
      return;
    }

    localState._submitError = ""
    if (autoSubmit) {
      console.log('[AUTOSUBMIT LOG] Устанавливаем state перед отправкой:', JSON.parse(JSON.stringify(localState)));
    }
    setState({ ...localState })
    setLoading(true)

    const endpoint = _.get(data, "sl")
    callEndpoint && callEndpoint(
      endpoint,
      "POST",
      modelToSend,
      undefined,
      (result, data) => {
        setActionError && setActionError(actionError)
        if (result == "ok") {
          let saveState = { ...localState }
          let stateUpdate = {}
          let modelUpdate = {}
          if (data && data.length > 0) {
            try {
              const response = JSON.parse(data)
              // update state
              if (!isEmpty(_.get(response, "state"))) {
                stateUpdate = _.get(response, "state") || {}
              }
              // update model
              if (!isEmpty(_.get(response, "model"))) {
                modelUpdate = _.get(response, "model") || {}
              }
              if (!isEmpty(_.get(response, "object"))) {
                modelUpdate = _.get(response, "object") || {}
              }
              // refresh
              if (_.get(response, "refresh")) {
                refreshOptions()
              }
              // redirect
              if (!isEmpty(_.get(response, "redirect")) &&
                !isEmpty(_.get(response, "redirect.target"))) {
                let delay = 0
                if (!isEmpty(_.get(response, "redirect.delay"))) {
                  delay = typeof _.get(response, "redirect.delay") == 'number' ? _.get(response, "redirect.delay") : parseInt(_.get(response, "redirect.delay"))
                }
                let target = _.get(response, "redirect.target")
                setTimeout(() => {
                  if (target.startsWith("http")) {
                    window.location.href = target;
                  } else {
                    handleRoute(target)()
                  }
                }, delay)
              }
            } catch (err) {
              console.log(err)
            }
          }
          setLoading(false)
          const apiResponseData = _.get(data,"result.data[0]")

          finish && finish(data)
          let extendedModelUpdate = { ...newExtendedModel, ...apiResponseData }
          
          // Выключаем лоадинг после обработки ответа, не перезатирая stateUpdate из API
          const finalStateUpdate = autoSubmit && _.get(params, "general.showLoadingIndicatorOnAutosubmit") 
            ? { ...saveState, ...stateUpdate, loading: "false" }
            : { ...saveState, ...stateUpdate };
          
          if (autoSubmit) {
            console.log('[AUTOSUBMIT LOG] API ответил успешно');
            console.log('[AUTOSUBMIT LOG] saveState:', JSON.parse(JSON.stringify(saveState)));
            console.log('[AUTOSUBMIT LOG] stateUpdate из API:', JSON.parse(JSON.stringify(stateUpdate)));
            console.log('[AUTOSUBMIT LOG] finalStateUpdate (что ставим в setState):', JSON.parse(JSON.stringify(finalStateUpdate)));
            setState(finalStateUpdate)
          } else {
            setState({ ...saveState, step: targetStep || "submitted", ...stateUpdate })
          }
          if (submitKeepModel && !resetModel) {
            modelUpdate = { ...model, ...modelToSend, ...modelUpdate };
            extendedModelUpdate = { ...extendedModelUpdate, ...modelUpdate }
          } else if (resetModel) {
            // При resetModel сбрасываем модель в пустой объект
            modelUpdate = {}
            extendedModelUpdate = {}
          }
          
          setModel(modelUpdate)
          setExtendedModel(extendedModelUpdate)
          setOriginalModel(modelUpdate)
          setOriginalExtendedModel(extendedModelUpdate)
          // Сбрасываем флаг автосабмита асинхронно после всех обновлений состояния
          if (autoSubmit) {
            console.log('[AUTOSUBMIT LOG] modelUpdate:', JSON.parse(JSON.stringify(modelUpdate)));
            console.log('[AUTOSUBMIT LOG] === КОНЕЦ АВТОСАБМИТА (успех) ===');
            queueMicrotask(() => {
              isAutoSubmittingRef.current = false;
            });
          }
        } else {
          // Выключаем лоадинг при ошибке
          const errorStateUpdate = autoSubmit && _.get(params, "general.showLoadingIndicatorOnAutosubmit")
            ? { ...stateRef.current, _apiError: data.msg, loading: "false" }
            : { ...stateRef.current, _apiError: data.msg };
          
          setState(errorStateUpdate)
          setLoading(false)
          // Сбрасываем флаг автосабмита асинхронно даже при ошибке
          if (autoSubmit) {
            queueMicrotask(() => {
              isAutoSubmittingRef.current = false;
            });
          }
          finish && finish(true)
        }
      }
    )
  }, [data, fields, params, modelIsChanged, templateState, callEndpoint, gatherDefaults, template, setModel, setExtendedModel, setOriginalModel, setOriginalExtendedModel, setState, setLoading, refreshOptions, handleRoute, dict, lang])

  // DEBOUNCED ФУНКЦИИ - определяются ПОСЛЕ submit
  const submitOnModelRef = useRef(debounce(submit, 1400));
  const submitOnStateRef = useRef(debounce(submit, 1400));
  const submitDebouncedRef = useRef(debounce((finish, submitKeepModel, targetStep, autoSubmit, submitMapping, newData, actionReq, setActionError, resetModel, currentModel, newExtendedModel) => {
    submit(finish, submitKeepModel, targetStep, autoSubmit, submitMapping, newData, actionReq, setActionError, resetModel, currentModel, newExtendedModel);
  }, 1000));

  // Обновляем рефы когда submit функция меняется
  useEffect(() => {
    // Отменяем старые pending вызовы перед пересозданием
    submitOnModelRef.current.cancel();
    submitOnStateRef.current.cancel();
    submitDebouncedRef.current.cancel();
    
    submitOnModelRef.current = debounce(submit, 1400);
    submitOnStateRef.current = debounce(submit, 1400);
    submitDebouncedRef.current = debounce((finish, submitKeepModel, targetStep, autoSubmit, submitMapping, newData, actionReq, setActionError, resetModel, currentModel, newExtendedModel) => {
      submit(finish, submitKeepModel, targetStep, autoSubmit, submitMapping, newData, actionReq, setActionError, resetModel, currentModel, newExtendedModel);
    }, 1000);
  }, [submit]);

  // Алиасы для обратной совместимости
  const submitOnModel = submitOnModelRef.current;
  const submitOnState = submitOnStateRef.current;
  const submitDebounced = submitDebouncedRef.current;

  // ============= PUBLIC API для кастомных функций =============
  // Прокидываем API в window для доступа из внешнего кода
  useEffect(() => {
    // Используем короткий ID из params.comp_ID
    const componentId = _.get(data, 'params.comp_ID') || id;
    if (!componentId) return;
    
    // Инициализируем глобальный объект если его нет
    if (!window.FpsForm2_API) {
      window.FpsForm2_API = {};
    }
    
    // Регистрируем API для этой конкретной формы по короткому ID
    window.FpsForm2_API[componentId] = {
      // Получение данных
      getModel: () => modelRef.current,
      getExtendedModel: () => extendedModelRef.current,
      getState: () => stateRef.current,
      getOriginalModel: () => originalModelRef.current,
      
      // Изменение model (один field)
      editModel: (field, value) => {
        const copyModel = _.cloneDeep(modelRef.current);
        _.set(copyModel, field, value);
        setModel(copyModel);
        
        const copyExtendedModel = _.cloneDeep(extendedModelRef.current);
        _.set(copyExtendedModel, field, value);
        setExtendedModel(copyExtendedModel);
      },
      
      // Изменение всего model целиком (merge)
      setModel: (newModelData) => {
        const mergedModel = { ...modelRef.current, ...newModelData };
        setModel(mergedModel);
        
        const mergedExtendedModel = { ...extendedModelRef.current, ...newModelData };
        setExtendedModel(mergedExtendedModel);
      },
      
      // Замена model полностью
      replaceModel: (newModel) => {
        setModel(newModel);
        setExtendedModel(newModel);
      },
      
      // Изменение state (один field)
      editState: (field, value) => {
        const copyState = _.cloneDeep(stateRef.current);
        _.set(copyState, field, value);
        setState(copyState);
      },
      
      // Изменение state целиком (merge)
      setState: (newStateData) => {
        const mergedState = { ...stateRef.current, ...newStateData };
        setState(mergedState);
      },
      
      // Замена state полностью
      replaceState: (newState) => {
        setState(newState);
      },
      
      // Сабмит формы программно
      submit: (options = {}) => {
        submit(
          options.finish,
          options.submitKeepModel !== false, // по умолчанию true
          options.targetStep,
          options.autoSubmit || false,
          options.submitMapping,
          options.newData,
          options.actionReq,
          options.setActionError,
          options.resetModel || false
        );
      },
      
      // Вызов action по ID или имени (полная реализация)
      callAction: (actionIdOrName, callback) => {
        const actions = _.get(data, "params.actions") || [];
        const action = _.find(actions, a => a.id === actionIdOrName || a.name === actionIdOrName);
        
        if (!action) {
          console.error(`Action "${actionIdOrName}" not found`);
          callback && callback(false);
          return;
        }
        
        console.log('performAction (API)', action);
        
        // Get current state FIRST
        let copyModel = { ...modelRef.current };
        let copyState = { ...stateRef.current };
        let copyExtendedModel = { ...extendedModelRef.current };
        
        console.log('📊 copyModel в начале callAction:', copyModel);
        
        // Локальная версия template - принимает модель как параметр
        const localTemplate = (input, currentModel, currentExtModel, currentState) => {
          if (!input || input === "{{undefined}}" || input === "{{null}}") return "";
          
          // Используем переданные параметры, не замыкание
          let templateData = { ...defaultExtModel, ...currentModel, ...currentExtModel, ...currentState };
          
          const replaceNullWithEmptyString = obj => _.mapValues(obj, value => value === null ? "" : value);
          _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
          if (!templateData) return "";
          
          templateData = replaceNullWithEmptyString(templateData);
          
          // Простая конвертация чисел в строки
          templateData = _.mapValues(templateData, value => {
            if (typeof value === 'number') return value.toString();
            return value;
          });
          
          try {
            const result = _.template(input, {
              interpolate: /{{([\s\S]+?)}}/g
            })(templateData);
            return result;
          } catch (error) {
            console.warn("template error in callAction:", error);
            return '';
          }
        };
        
        // Helper functions
        const transformObject = array => _.reduce(array, (result, item) => {
          if (!array || array.length === 0) return {};
          const { field, value } = item;
          const templatedValue = localTemplate(value, copyModel, copyExtendedModel, copyState);
          console.log(`  Mapping: ${field} = "${value}" → "${templatedValue}"`);
          result[field] = templatedValue;
          return result;
        }, {});
        
        const transformState = (array, type) => _.reduce(array, (result, item) => {
          if (!array || array.length === 0) return {};
          const { field, value } = item;
          if (field.substring(0, 9) === "FormState" && type === "state") {
            result[field.substring(10)] = localTemplate(value, copyModel, copyExtendedModel, copyState);
          }
          if (field.substring(0, 9) !== "FormState" && type === "model") {
            result[field] = localTemplate(value, copyModel, copyExtendedModel, copyState);
          }
          return result;
        }, {});
        
        // Discard model
        if (action.discardModel) {
          copyModel = originalModelRef.current;
          copyExtendedModel = originalExtendedModel;
          setModel(originalModelRef.current);
          setExtendedModel(originalExtendedModel);
        }
        
        // STATE or ENDPOINT_STATE actions
        if (_.get(action, "actionType") === "state" || _.get(action, "actionType") === "endpoint_state" || !_.get(action, "actionType")) {
          const payloadState = transformState(action.stateMapping, "state");
          const payloadModel = transformState(action.stateMapping, "model");
          copyState = { ...copyState, ...payloadState };
          copyModel = { ...copyModel, ...payloadModel };
          copyExtendedModel = { ...copyExtendedModel, ...payloadModel };
          
          if (action.actionSubmit && _.get(action, "actionType") !== "endpoint_state") {
            // Submit with state action
            submit(
              (res) => {
                callback && callback(true, res);
              },
              true, // submitKeepModel
              undefined, // targetStep
              true, // autoSubmit
              undefined, // submitMapping
              { state: copyState, model: { ...modelRef.current, ...payloadModel } },
              undefined, // actionReq
              (err) => {
                console.error('Action submit error:', err);
                callback && callback(false, err);
              },
              action.resetModel // resetModel
            );
          } else {
            setState(copyState);
            if (action.resetModel) {
              copyModel = {};
              copyExtendedModel = {};
              setModel({});
              setExtendedModel({});
            } else {
              setModel(copyModel);
              setExtendedModel(copyExtendedModel);
            }
            callback && callback(true);
          }
        }
        
        // ENDPOINT or ENDPOINT_STATE actions
        if ((_.get(action, "actionType") === "endpoint" || _.get(action, "actionType") === "endpoint_state" || !_.get(action, "actionType")) && action.endpoint) {
          let payload = transformObject(action.mapping);
          if (action.sendModel) {
            payload = { ...copyModel, ...payload };
          }
          
          if (action.actionSubmit) {
            // Submit first, then call endpoint
            submit(
              (res) => {
                console.log("finish onSubmit", res);
                console.log("payload => " + action.endpoint);
                console.log(payload);
                
                // Call endpoint after submit
                callEndpoint(
                  action.endpoint,
                  "POST",
                  payload,
                  undefined,
                  (result, responseData) => {
                    console.log("result => " + action.endpoint);
                    console.log(result);
                    callback && callback(result === "ok", responseData);
                  }
                );
              },
              true, // submitKeepModel
              undefined, // targetStep
              true, // autoSubmit
              undefined, // submitMapping
              { state: copyState, model: copyModel },
              undefined, // actionReq
              (err) => {
                console.error('Action submit error:', err);
                callback && callback(false, err);
              },
              action.resetModel // resetModel
            );
          } else {
            // Call endpoint directly
            console.log("payload => " + action.endpoint);
            console.log(payload);
            
            callEndpoint(
              action.endpoint,
              "POST",
              payload,
              undefined,
              (result, responseData) => {
                console.log("result => " + action.endpoint);
                console.log(result);
                callback && callback(result === "ok", responseData);
              }
            );
          }
        }
      },
      
      // Refresh options (для полей с динамическими опциями)
      refreshOptions: () => {
        setRefresh(refresh + 1);
      }
    };
    
    // Cleanup при unmount
    return () => {
      if (window.FpsForm2_API && window.FpsForm2_API[componentId]) {
        delete window.FpsForm2_API[componentId];
      }
    };
  }, [data, id, refresh, submit, template, callEndpoint]);
  // =============================================================

  // AUTOSUBMIT ON MODEL - ПОСЛЕ определения submitDebounced
  useEffect(() => {
    // ПЕРВАЯ ПРОВЕРКА - блокируем планирование новых автосабмитов если уже идет автосабмит
    if (isAutoSubmittingRef.current) {
      console.log('[AUTOSUBMIT LOG] useEffect(model): пропускаем, т.к. идет автосабмит');
      return;
    }
    
    // Проверяем настройку disableSubmitOnSocket - если включена и это обновление от сокета, то не делаем автосабмит
    if (_.get(params, "general.disableSubmitOnSocket") && isSocketUpdateRef.current) {
      console.log('[AUTOSUBMIT LOG] useEffect(model): пропускаем из-за сокетного обновления');
      isSocketUpdateRef.current = false; // сбрасываем флаг после обработки
      return;
    }
    
    // Сбрасываем флаг сокетного обновления в любом случае
    if (isSocketUpdateRef.current) {
      console.log('[AUTOSUBMIT LOG] useEffect(model): сброс флага isSocketUpdateRef');
      isSocketUpdateRef.current = false;
    }
    
    if (_.get(params, "general.autosubmit") === "model" && typeof previousModel !== 'undefined' && !_.isEmpty(model)) {
      if (_.get(params, "general.autosubmit_model") && _.get(params, "general.autosubmit_model").length > 0) {
        let send = false;
        let changedFields = [];
        _.get(params, "general.autosubmit_model").forEach(field => {
          if (!_.isEqual(_.get(previousModel, field), _.get(model, field)) && (_.get(previousModel, field) || _.get(model, field))) {
            send = true;
            changedFields.push(field);
          }
        });
        if (send) {
          // КРИТИЧЕСКАЯ ПРОВЕРКА: если изменения вернули модель к оригиналу - не автосабмитим
          const fieldsChanged = _.get(params, "general.autosubmit_model");
          let reallyDifferentFromOriginal = false;
          fieldsChanged.forEach(field => {
            if (!_.isEqual(_.get(model, field), _.get(originalModelRef.current, field))) {
              reallyDifferentFromOriginal = true;
            }
          });
          
          if (!reallyDifferentFromOriginal) {
            return;
          }
          
          // ВКЛЮЧАЕМ ЛОАДИНГ СРАЗУ, не дожидаясь debounce!
          if (_.get(params, "general.showLoadingIndicatorOnAutosubmit")) {
            setState(prevState => ({ ...prevState, loading: "true" }));
          }
          
          console.log('[AUTOSUBMIT LOG] useEffect(model): планируем дебаунсированный автосабмит, измененные поля:', changedFields);
          console.log('[AUTOSUBMIT LOG] useEffect(model): текущий state:', JSON.parse(JSON.stringify(stateRef.current)));
          
          submitDebounced(
            undefined, // finish
            true,      // submitKeepModel
            undefined, // targetStep
            true,      // autoSubmit
            undefined, // submitMapping
            undefined, // newData
            undefined, // actionReq
            undefined, // setActionError
            false,     // resetModel
            modelRef.current, // currentModel
            extendedModel     // newExtendedModel
          );
        }
      } else {
        let send = false;
        if (!_.isEqual(previousModel, model)) { 
          send = true; 
        }
        if (send) {
          // КРИТИЧЕСКАЯ ПРОВЕРКА: если модель равна оригиналу - не автосабмитим
          if (_.isEqual(model, originalModelRef.current)) {
            return;
          }
          
          // ВКЛЮЧАЕМ ЛОАДИНГ СРАЗУ, не дожидаясь debounce!
          if (_.get(params, "general.showLoadingIndicatorOnAutosubmit")) {
            setState(prevState => ({ ...prevState, loading: "true" }));
          }
          
          console.log('[AUTOSUBMIT LOG] useEffect(model): планируем дебаунсированный автосабмит (все поля)');
          console.log('[AUTOSUBMIT LOG] useEffect(model): текущий state:', JSON.parse(JSON.stringify(stateRef.current)));
          
          submitDebounced(
            undefined, // finish
            true,      // submitKeepModel
            undefined, // targetStep
            true,      // autoSubmit
            undefined, // submitMapping
            undefined, // newData
            undefined, // actionReq
            undefined, // setActionError
            false,     // resetModel
            modelRef.current, // currentModel
            extendedModel     // newExtendedModel
          );
        }
      }
    }
  }, [model, previousModel, params, submitDebounced]);

  // Clean up on unmount - отменяем все debounced функции
  useEffect(() => {
    return () => {
      submitDebouncedRef.current.cancel();
      submitOnModelRef.current.cancel();
      submitOnStateRef.current.cancel();
    };
  }, []); // Пустой массив зависимостей - очищаем только при unmount

  // AUTOSUBMIT ON STATE
  useEffect(() => {
    if (!_.isEqual(previousState, state)) {
      setHighlightState(true)
      setTimeout(() => setHighlightState(false), 300)
    }
    
    // Проверяем: если текущий step это восстановленный step - пропускаем автосабмит
    if (restoredStepRef.current !== null && state.step === restoredStepRef.current) {
      return;
    }
    
    // Если step изменился на что-то другое - сбрасываем ref восстановленного step
    if (restoredStepRef.current !== null && state.step !== restoredStepRef.current) {
      restoredStepRef.current = null; // теперь можно автосабмитить
    }
    
    if (_.get(params, "general.autosubmit") == "always" && autoSubmitStep !== state.step) {
      setAutoSubminStep(state.step)
      submitOnState(undefined, true, undefined, true)
    }
    if (_.get(params, "general.autosubmit") == "steps"
      && _.includes(_.get(params, "general.autosubmit_steps").split(","), state.step
        && autoSubmitStep !== state.step)) {
      setAutoSubminStep(state.step)
      submitOnState(undefined, true, undefined, true, undefined, { state: state })
    }
  }, [state, submitOnState])

  useEffect(() => {
    if (data.error || data.response) {
      setLoading(false)
    }
  }, [data.error, data.response])

  function flatternModel(m) {
    const flatternObject = a => {
      if (Array.isArray(a)) {
        return a.map(i => i.id || i).join(",")
      }
      if (typeof a == 'object') {
        return _.get(a, "id")
      }
      return a
    }
    return _.mapValues(m, flatternObject)
  }

  // front-end template engine

  const formatDate = (value, formatOptions) => {
    if (!value) { return null }
    formatOptions = formatOptions || {}
    const formattedDate = formatOptions.isUTC == 'true' ?
      moment.utc(value).locale(formatOptions.dateLocale || 'ed-gb').format(formatOptions.dateFormat + formatOptions.timeFormat || 'DD/MM/Y, HH:mm, Z')
      :
      moment(value).locale(formatOptions.dateLocale || 'ed-gb').format(formatOptions.dateFormat + formatOptions.timeFormat || 'DD/MM/Y, HH:mm, Z')
    return formattedDate
  }

  const getDateFields = () => {
    let dates = {}
    _.get(data, "headers", []).forEach(i => {
      if (i.dataType == 'date') {
        _.set(dates, i.sysName, i.formatOptions || {})
      }
    })
    _.get(data, "fileds", []).forEach(i => {
      if (i.dataType == 'date') {
        _.set(dates, i.sysName, i.formatOptions || {})
      }
    })
    return dates
  }

  // HOISTED FUNCTION - template тоже с hoisting'ом!
  function template(input, noDate) {
    if (!input || input == "{{undefined}}" || input == "{{null}}") return "";

    function convertNumbersToStrings(obj) {
      for (let key in obj) {
        if (typeof obj[key] === 'number') {
          obj[key] = obj[key].toString();
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
          convertNumbersToStrings(obj[key]);
        }
      }
      return obj;
    }

    let templateData = { ...defaultExtModel, ...(model || {}), ...(extendedModel || {}), ...(state || {}) };

    const replaceNullWithEmptyString = obj => _.mapValues(obj, value => value === null ? "" : value);
    _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
    if (!templateData) return "";

    templateData = _.mapValues(templateData, (value, key) => {
      if (getDateFields().hasOwnProperty(key)
      ) {
        return formatDate(value, getDateFields()[key])
      }
      return value;
    });

    const preprocessTemplate = (str, data) => {
      const regex = /{{\s*([\w.]+)\s*}}/g;
      return str.replace(regex, (match, p1) => {
        const keys = p1.split('.');
        let value = data;
        keys.forEach(key => {
          if (value && value[key]) {
            value = value[key];
          }
        });
        if (typeof value === 'object' && value !== null && value.id) {
          return `{{${p1}.id}}`;
        }
        return match;
      });
    };

    templateData = replaceNullWithEmptyString(templateData);
    templateData = convertNumbersToStrings(templateData);

    function extractStringsWithinBraces(str) {
      const matches = str.match(/\{\{(.*?)\}\}/g);
      if (matches) {
        return matches.map(match => match.replace(/\{\{|\}\}/g, '').trim());
      }
      return [];
    }

    (extractStringsWithinBraces(input) || []).forEach(i => {
      if (!_.get(templateData, i)) {
        _.set(templateData, i, "")
      }
    })

    const preprocessedInput = preprocessTemplate(input, templateData);

    const renderTemplate = (template) => {
      return _.template(template, {
        interpolate: /{{([\s\S]+?)}}/g
      })(templateData, {
        variable: '',
        evaluate: /<%([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
      });
    };

    try {
      const result = renderTemplate(preprocessedInput);
      return result;
    } catch (error) {
      console.warn("template error");
      console.warn(input);
      console.warn(templateData);
      console.warn('Error rendering template:', error);
      return '';
    }
  }

  // HOISTED FUNCTION - теперь доступна везде!
  function templateState(input, model) {
    const templateData = { ...defaultModel, ...(model || {}) }
    _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
    // Custom function to handle undefined variables by replacing them with ""

    if (!templateData) return {}
    const renderTemplate = (template) => {
      return _.template(template, {
        interpolate: /{{([\s\S]+?)}}/g
      })(templateData, {
        variable: '',
        evaluate: /<%([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
      });
    };

    // Use a try-catch block to handle errors gracefully
    try {
      const result = JSON.parse(renderTemplate(JSON.stringify(input)));
      return result;
    } catch (error) {
      // If there's an error during rendering, return an empty string
      console.error("templateState")
      console.error(input)
      console.error(templateData)
      console.error('Error rendering template:', error);
      return '';
    }
  }
  // ========================

  // ============= МЕМОИЗИРОВАННЫЕ ВЫЧИСЛЕНИЯ =============
  const formTitle = useMemo(() => template(_.get(params, "form_title")), [template, params])
  const formDescription = useMemo(() => template(_.get(params, "form_description")), [template, params])
  const maxWidth = useMemo(() => _.get(params, "form_maxWidth") || "auto", [params])
  const popupWidth = useMemo(() => _.get(params, "popup_width") || 400, [params])
  const closePopupOnClick = useMemo(() => _.get(params, "general.closePopupOnClick") || false, [params])
  const object = useMemo(() => _.get(data, "data[0]"), [data])
  const formSteps = useMemo(() => _.get(params, "steps") || [], [params])

  //const currentStep = (state.step ? _.find(formSteps, { sysName: state.step }) : _.get(formSteps, "[0]")) || {}
  // =============

  const editModel = field => value => {
    // console.log("edit " + field + " => " + value)
    const copyModel = _.cloneDeep(model)
    _.set(copyModel, field, value)
    setModel(copyModel)
    // console.log(copyModel)
    // console.log(copyModel.budget_date.toISOString())
    const copyExtendedModel = _.cloneDeep(extendedModel)
    _.set(copyExtendedModel, field, value)
    setExtendedModel(copyExtendedModel)
  }

  const editModelAL = field => (action = 'edit', id, object = {}) => {
    // отдельная поебота для редактирования array links
    const copyModel = _.cloneDeep(model)
    const copyExtendedModel = _.cloneDeep(extendedModel)

    if (action == 'delete') {
      // удаляем из модели
      const arrayLink = _.get(copyModel, field)
      const newValue = arrayLink.split(",").filter(i => i != id)
      _.set(copyModel, field, newValue.length > 0 ? newValue.join(",") : "")
      setModel(copyModel)

      // удаляем из extendedModel
      let extendedArrayLink = _.get(copyExtendedModel, field) || []
      _.remove(extendedArrayLink, (item) => item.id === id);
      _.set(copyExtendedModel, field, extendedArrayLink)
      setExtendedModel(copyExtendedModel)
    }

    if (action == 'add') {
      console.log("add")
      console.log(object)
      // добавляем в модель
      const arrayLink = _.get(copyModel, field) ? _.get(copyModel, field).split(",") : []
      _.set(copyModel, field, [...arrayLink, object.id].join(","))
      setModel(copyModel)

      // добавляем в extendedModel
      let extendedArrayLink = _.get(copyExtendedModel, field) || []
      _.set(copyExtendedModel, field, [...extendedArrayLink, object])
      setExtendedModel(copyExtendedModel)
    }

    if (action == 'replace') {
      // модель не меняется

      // заменяем в extendedModel
      let extendedArrayLink = _.get(copyExtendedModel, field) || []
      _.set(copyExtendedModel, field, extendedArrayLink.map(i => i.id == id ? object : i))
      setExtendedModel(copyExtendedModel)
    }
  }

  if (_.get(data, 'error') == '403') {
    return <Hint error title="403" margin={{ top: 0, bottom: 0 }}>
      <p>{dict[lang].form.noPermissions}</p>
    </Hint>
  }

  const checkIfAllInputsHidden = element => {
    return element.type == "input" && !_.get(params, "general.debugConditions") && _.every(element._input_fields, item => item._field_hidden === true);
  }

  function refreshOptions() {
    setRefresh(refresh + 1)
  }

  function isDebugUser(targetString, commaSeparatedList) {
    // Split the comma-separated string into an array and trim spaces
    const listArray = _.map(_.split(commaSeparatedList, ','), _.trim);

    // Check if the target string is in the array
    return _.includes(listArray, targetString);
  }

  const userDebug = !_.get(params, "general.debugForUsers") || (
    _.get(params, "general.debugForUsers") && _.get(auth, "isAuth") && _.get(auth, "user")
    && isDebugUser(_.get(auth, "user"), _.get(params, "general.debugUsers"))
  )

  if (!initialized) return <Loader />

  return <div className={`${styles.formWrapper} D_FPS_FORM2_WRAPPER`}
    style={{ maxWidth, position: 'relative' }}
  >
    {/* Оверлей загрузки - хуярит весь UI к хуям когда loading === "true" */}
    {state.loading === "true" && (
      <div className={styles.loadingOverlay}>
        <Loader>{dict[lang].loading}</Loader>
      </div>
    )}

    {/* POPUP */}
    {state.popup && <FpsFormPopup
      onClose={(forceClose) => (closePopupOnClick || forceClose) ? setState({ ...state, popup: "" }) : undefined}
      width={popupWidth}>
      {formSteps
        .filter(section => section.sysName == state.popup)
        .map(currentStep => {
          return <div className={`${styles.formSection} D_FPS_FORM2_SECTION ${currentStep.CSSclass}`}
            style={{
              gap: (currentStep.sectionGap || currentStep.sectionGap == 0) ?
                `${currentStep.sectionGap}px 0`
                :
                `18px 0`
            }}
          >
            {_.get(params, "general.showState") && userDebug && <pre className={styles.debug}>
              <code>{currentStep.sysName}</code>
              <span>debug mode: STEP</span>
            </pre>}
            <RenderStep
              {...props}
              refresh={refresh}
              setOriginalModel={setOriginalModel}
              originalExtendedModel={originalExtendedModel}
              setOriginalExtendedModel={setOriginalExtendedModel}
              userDebug={userDebug}
              currentStep={currentStep}
              refreshOptions={refreshOptions}
              model={model}
              checkHidden={checkHidden}
              dict={dict}
              extendedModel={extendedModel}
              setExtendedModel={setExtendedModel}
              state={state}
              originalModel={originalModel}
              templateState={templateState}
              loading={loading}
              template={template}
              setState={setState}
              lang={lang}
              submit={submit}
              editModel={editModel}
              editModelAL={editModelAL}
              setModel={setModel}
              params={params}
              checkIfAllInputsHidden={checkIfAllInputsHidden}
            />
          </div>
        })}
    </FpsFormPopup>}

    {formTitle && <h2
      className={`${styles.formHeader} D_FPS_FORM2_HEADER`}>
      <InnerHTML allowRerender={true} html={formTitle} /></h2>}

    {formDescription && <div
      className={`${styles.formDescription} D_FPS_FORM2_DESCRIPTION`}>
      <InnerHTML allowRerender={true} html={formDescription} /></div>}

    {_.get(params, "general.showState") && userDebug && <pre className={`${styles.debug} ${highlightState ? styles.highlight : ''}`}>
      <code>{JSON.stringify(state, 0, 3)}</code>
      <span>debug mode: STATE</span>
    </pre>}

    {_.get(params, "general.showFullModel") && userDebug && <pre className={`${styles.debug} ${highlightState ? styles.highlight : ''}`}>
      <code>{JSON.stringify(extendedModel, 0, 3)}</code>
      <span>debug mode: EXT. MODEL</span>
    </pre>}

    {_.get(params, "general.showAuthModel") && userDebug && <pre className={`${styles.debug} ${highlightState ? styles.highlight : ''}`}>
      <code>{JSON.stringify({ ...auth, id: auth.user }, 0, 3)}</code>
      <span>debug mode: USER INFO</span>
    </pre>}

    {_.get(params, "general.showModel") && userDebug && <pre className={`${styles.debug} ${highlightModel ? styles.highlight : ''}`}>
      <code>{JSON.stringify(model, 0, 3)}</code>
      <span>debug mode: MODEL</span>
      {edditingOn && <code className='icon icon-edit'>Editting object is ON</code>}
      {_.get(params, "general.debugConditions") && <code className='icon icon-help'>Debug conditions is ON</code>}
      {_.get(params, "general.autosubmit") == "always" && <code className='icon icon-move'>Autosubmit on each step change</code>}
      {_.get(params, "general.autosubmit") == "steps" && <code className='icon icon-move'>Autosubmit on: {_.get(params, "general.autosubmit_steps")}</code>}
      {_.get(params, "general.autosubmit") == "model" && <code className='icon icon-move'>Autosubmit on model change
        {_.get(params, "general.autosubmit_model") && _.get(params, "general.autosubmit_model").length > 0 ? `. Trigger fields: ${_.get(params, "general.autosubmit_model").join(", ")}` : ''}
        {_.get(params, "general.disableSubmitOnSocket") ? '. Socket updates disabled' : ''}</code>}
      {modelIsChanged && <code className='icon icon-info'>Model is changed</code>}
    </pre>}

    {state._apiError && <Hint error closable onClose={() => setState({ ...state, _apiError: "" })}>
      {state._apiError}
    </Hint>}
    {formSteps
      .filter(showSection)
      .map(currentStep => {
        return <div className={`${styles.formSection} D_FPS_FORM2_SECTION ${currentStep.CSSclass}`}
          style={{
            gap: (currentStep.sectionGap || currentStep.sectionGap == 0) ?
              `${currentStep.sectionGap}px 0`
              :
              `18px 0`
          }}
        >
          {_.get(params, "general.showState") && userDebug && <pre className={styles.debug}>
            <code>{currentStep.sysName}</code>
            <span>debug mode: STEP</span>
          </pre>}
          <RenderStep
            {...props}
            refresh={refresh}
            refreshOptions={refreshOptions}
            currentStep={currentStep}
            model={model}
            userDebug={userDebug}
            setOriginalModel={setOriginalModel}
            originalExtendedModel={originalExtendedModel}
            setOriginalExtendedModel={setOriginalExtendedModel}
            extendedModel={extendedModel}
            setExtendedModel={setExtendedModel}
            checkHidden={checkHidden}
            dict={dict}
            originalModel={originalModel}
            state={state}
            templateState={templateState}
            loading={loading}
            template={template}
            setState={setState}
            lang={lang}
            submit={submit}
            editModel={editModel}
            editModelAL={editModelAL}
            setModel={m => {
              // console.log("m")
              // console.log(m)
              setModel(m)
            }}
            params={params}
            checkIfAllInputsHidden={checkIfAllInputsHidden}
          />
        </div>
      })}
  </div>
}

function RenderStep(props) {
  const { auth, data, callEndpoint, onEvent, id, handleRoute, currentStep, templateState, checkIfAllInputsHidden, editModel, editModelAL, originalModel,
    model, checkHidden, userDebug, dict, locale, state, refreshOptions, refresh, extendedModel, setOriginalModel, originalExtendedModel, setOriginalExtendedModel, setExtendedModel, loading, template, setState, lang, submit, params, setModel } = props


  const callEndpointPOST = (endpoint, body, finish, ignoreResponse = false) => {
    callEndpoint && callEndpoint(
      endpoint,
      "POST",
      body,
      undefined,
      (result, content, data) => {
          if (result == "ok") {
            finish && finish(content, data)
            if (ignoreResponse) return
            try {
              const response = JSON.parse(content)
              // update state
              if (!isEmpty(_.get(response, "state"))) {
                const stateUpdate = _.get(response, "state")
                setState({ ...state, ...stateUpdate })
              }
            // update model/object
            if (!isEmpty(_.get(response, "object"))) {
              const modelUpdate = _.get(response, "object")
              setModel({ ...model, ...modelUpdate })
              setOriginalModel({ ...model, ...modelUpdate })
              setOriginalExtendedModel({ ...extendedModel, ...modelUpdate })
              // setExtendedModel({ ...extendedModel, ...modelUpdate })
            }
            if (!isEmpty(_.get(response, "model"))) {
              const modelUpdate = _.get(response, "model")
              setModel({ ...model, ...modelUpdate })
              setOriginalModel({ ...model, ...modelUpdate })
              setOriginalExtendedModel({ ...extendedModel, ...modelUpdate })
              // setExtendedModel({ ...extendedModel, ...modelUpdate })
            }
            if (!isEmpty(_.get(response, "redirect")) &&
              !isEmpty(_.get(response, "redirect.target"))) {
              let delay = 0
              if (!isEmpty(_.get(response, "redirect.delay"))) {
                delay = typeof _.get(response, "redirect.delay") == 'number' ? _.get(response, "redirect.delay") : parseInt(_.get(response, "redirect.delay"))
              }
              let target = _.get(response, "redirect.target")
              setTimeout(() => {
                if (target.startsWith("http")) {
                  window.location.href = target;
                } else {
                  handleRoute(target)()
                }
              }, delay)
            }
            // refresh
            if (_.get(response, "refresh")) {
              refreshOptions()
            }
          } catch (err) {
            console.log(err)
          }
        }
      }
    )
  }

  return <React.Fragment>{(currentStep.elements || [])
    //.filter(element => !checkHidden(element) && !checkIfAllInputsHidden(element))
    .map(element => <FormElement
      {...props}
      model={model}
      userDebug={userDebug}
      refresh={refresh}
      hidden={checkHidden(element)}
      data={data}
      checkHidden={checkHidden}
      originalModel={originalModel}
      dict={dict}
      locale={locale}
      handleRoute={handleRoute}
      state={state}
      templateState={templateState}
      loading={loading}
      setState={setState}
      lang={lang}
      onSubmit={submit}
      template={template}
      extendedModel={extendedModel}
      setExtendedModel={setExtendedModel}
      editModel={editModel}
      editModelAL={editModelAL}
      setModel={setModel}
      element={element}
      callEndpointPOST={callEndpointPOST}
      callEndpoint={(endpoint, params, finish, setOptions, setError) => {
        //params= {...params, _value: "a"} // убрать это для проверки корректности запроса!
        // console.log('===> calling endpoint /' + endpoint)
        // console.log(params)
        const transformedArray = (inputArray, visibleNames) => _.map(inputArray, (item) => {
          const parseJson = json => {
            if (!json) return {}
            let parsedJson = {}
            if (typeof json == 'object') return json
            try {
              parsedJson = JSON.parse(json)
            }
            catch (e) {
              console.log(json);
              console.log(e);
            }
            return parsedJson
          }

          const { id, ...rest } = item; // Destructure `id` and the rest of the properties
          const value = _.trim(_.map(parseJson(visibleNames), field => _.get(item, field.sysName)).join(' ')) ||
            _.values(_.pickBy(rest, _.isString)).join(' '); // Concatenate string values
          const excludeFields = [..._.map(parseJson(visibleNames), i => i.sysName), ...["userpic", "image", "picture", "photo"]]
          const description = _.trim((_.keys(_.omit(rest, excludeFields)) || []).map(i => rest[i]).join(" "))
          return {
            key: id,
            value: _.trim(value) || id,
            image: _.get(rest, "userpic") || _.get(rest, "image") || _.get(rest, "picture") || _.get(rest, "photo"),
            description: description,
          };
        });

        // fake request
        // setTimeout(() => {
        //   const data = [
        //     {
        //       "title": "IT",
        //       "id": "it"
        //     },
        //     {
        //       "title": "HR",
        //       "id": "hr"
        //     }
        //   ]
        //   const visibleNames = '[{"sysName":"firstName"}]'
        //   finish && finish(transformedArray(data, visibleNames))
        //   setOptions && setOptions(transformedArray(data, visibleNames))
        // }, 1000)

        // false &&
        callEndpoint && callEndpoint(
          endpoint,
          "GET",
          undefined,
          params,
          (result, data, visibleNames) => {
            if (result == "ok") {
              finish && finish(transformedArray(data, visibleNames))
              setOptions && setOptions(transformedArray(data, visibleNames))
            }
            else {
              setError && setError(data)
              finish && finish([])
              setOptions && setOptions([])
            }
          }
        )
      }}
      key={element.id} />)}
    {(currentStep.elements || [])
      .filter(element => checkIfAllInputsHidden(element))
      .map(element => <FormElement
        {...props}
        model={model}
        userDebug={userDebug}
        refresh={refresh}
        data={data}
        checkHidden={checkHidden}
        originalModel={originalModel}
        dict={dict}
        locale={locale}
        handleRoute={handleRoute}
        state={state}
        extendedModel={extendedModel}
        templateState={templateState}
        loading={loading}
        setState={setState}
        lang={lang}
        onSubmit={submit}
        template={template}
        editModel={editModel}
        editModelAL={editModelAL}
        setModel={setModel}
        element={element}
        callEndpointPOST={callEndpointPOST}
        callEndpoint={(endpoint, params, finish, setOptions, setError) => {
          // console.log('===> calling endpoint /' + endpoint)
          // console.log(params)
          const transformedArray = (inputArray, visibleNames) => _.map(inputArray, (item) => {
            const parseJson = json => {
              if (!json) return {}
              let parsedJson = {}
              if (typeof json == 'object') return json
              try {
                parsedJson = JSON.parse(json)
              }
              catch (e) {
                console.log(json);
                console.log(e);
              }
              return parsedJson
            }

            const { id, ...rest } = item; // Destructure `id` and the rest of the properties
            const value = _.trim(_.map(parseJson(visibleNames), field => _.get(item, field.sysName)).join(' ')) ||
              _.values(_.pickBy(rest, _.isString)).join(' '); // Concatenate string values
            return {
              key: id,
              value: _.trim(value) || id
            };
          });

          // fake request
          // setTimeout(() => {
          //   const data = [
          //     {
          //         "name": "Paul",
          //         "id": "paul"
          //     },
          //     {
          //         "name": "Peter",
          //         "id": "peter"
          //     }
          // ]
          //   const visibleNames = '[{"sysName":"firstName"},{"sysName":"lastName"}]'
          //   finish && finish(transformedArray(data, visibleNames))
          //   setOptions && setOptions(transformedArray(data, visibleNames))
          // }, 300)

          // false &&
          callEndpoint && callEndpoint(
            endpoint,
            "GET",
            undefined,
            params,
            (result, data, visibleNames) => {
              // console.log(result)
              // console.log(data)

              if (result == "ok") {
                finish && finish(transformedArray(data, visibleNames))
                setOptions && setOptions(transformedArray(data, visibleNames))
              }
              else {
                setError && setError(data)
                finish && finish([])
                setOptions && setOptions([])
              }
            }
          )
        }}
        key={element.id} />)}
  </React.Fragment>
}

FpsForm2.propTypes = {
  data: PropTypes.object.isRequired,
  auth: PropTypes.object,
  locale: PropTypes.string,
  onChange: PropTypes.func,
};

FpsForm2.defaultProps = {
  data: {},
  auth: {},
  locale: "ENG",
  onChange: undefined,
};

FpsForm2.settings = {
  icon: icon,
  name: 'Multistep Form',
  sysName: 'FpsForm2',
  isLegacy: false,
  //isMarketplace: true,
  form: [
    { name: 'Select API-endpoint', sysName: 'sl', type: 'api-endpoint' },
    { name: 'Default HTTP request params', sysName: 'httpParams', type: 'httpParams' },
    { name: 'Component comment', sysName: 'comment', type: 'comment' },
  ]
}
