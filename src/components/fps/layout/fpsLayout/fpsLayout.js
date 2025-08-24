import React, { useState, useEffect, useRef } from 'react'
// import Button from '../../button/button'
import styles from './fpsLayout.module.css'
// import FpsCards from '../../viewobjects/cards/FpsCards'
import TabsPane from '../tabpane/tabpane'
import _ from 'lodash'
import Loader from '../../loader/loader'
import { dict } from '../../locale'
import PropTypes from 'prop-types';

const brakePoints = {
  mobile: { from: 0, to: 478, display: 400 },
  tablet: { from: 479, to: 768, display: 700 },
  desktop: { from: 769, to: 1201, display: 1200 },
  wideDesktop: { from: 1202, to: '∞', display: 1400 },
}

export function FpsLayout({ layout, onChangeTab, localLoading, locale, callEndpoint, data, auth }) {

  const layoutRef = useRef(null);
  const [currentBP, setCurrentBP] = useState('desktop')
  const [layoutWidth, setLayoutWidth] = useState(brakePoints[currentBP].display)
  const [fullHeight, setFullHeight] = useState(null)
  const lang = locale ? locale.length == 3 ? locale : 'ENG' : 'ENG'

  // Функция для вычисления высоты D_FPS_TAB_WRAPPER
  const calculateFullHeight = () => {
    if (!layoutRef.current) return null;
    
    const tabWrapper = layoutRef.current.querySelector('.D_FPS_TAB_WRAPPER');
    if (tabWrapper) {
      return tabWrapper.offsetHeight - 1;
    }
    
    return null;
  };

  // Пересчитываем fullHeight когда меняется DOM или размеры
  useEffect(() => {
    const updateHeight = () => {
      const newHeight = calculateFullHeight();
      if (newHeight !== fullHeight) {
        setFullHeight(newHeight);
      }
    };

    // Обновляем сразу
    updateHeight();

    // Наблюдаем за изменениями в DOM
    const observer = new MutationObserver(updateHeight);
    const resizeObserver = new ResizeObserver(updateHeight);

    if (layoutRef.current) {
      observer.observe(layoutRef.current, { 
        childList: true, 
        subtree: true, 
        attributes: true,
        attributeFilter: ['class', 'style']
      });
      
      const tabWrapper = layoutRef.current.querySelector('.D_FPS_TAB_WRAPPER');
      if (tabWrapper) {
        resizeObserver.observe(tabWrapper);
      }
    }

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
    };
  }, [fullHeight]);

  console.log("fullHeight", fullHeight)

  // Calculating layout width:
  useEffect(() => {
    if (layoutRef.current && layoutRef.current.offsetWidth != layoutWidth) {
      setLayoutWidth(layoutRef.current.offsetWidth)
    }
  })
  useEffect(() => {
    if (layoutWidth <= brakePoints.mobile.to) {
      setCurrentBP('mobile')
    }
    if (layoutWidth >= brakePoints.tablet.from && layoutWidth <= brakePoints.tablet.to) {
      setCurrentBP('tablet')
    }
    if (layoutWidth >= brakePoints.desktop.from && layoutWidth <= brakePoints.desktop.to) {
      setCurrentBP('desktop')
    }
    if (layoutWidth >= brakePoints.wideDesktop.from) {
      setCurrentBP('wideDesktop')
    }
  }, [layoutWidth])

  useEffect(() => {
    const resizeListener = () => {
      if (layoutRef.current && layoutRef.current.offsetWidth !== layoutWidth) {
        setLayoutWidth(layoutRef.current.offsetWidth);
      }
    }
    window.addEventListener("resize", resizeListener);
    return () => { window.removeEventListener('resize', resizeListener); };
  }, []);
  // =========================

  // console.log("LAYOUT")
  // console.log(layout)

  if (!layout) { return <div className={styles.error}>no layout</div> }

  const composeTabsContent = (tabId) => {
    if (localLoading) return <div style={{ margin: 24 }}><Loader>{dict[lang].loading}</Loader></div>
    if (!layout.sections[tabId] || layout.sections[tabId].length == 0) return <div />
    return <div>
      {layout.sections[tabId].map(section => <Section fullHeight={fullHeight} auth={auth} callEndpoint={callEndpoint} data={data} key={section.id} section={section} currentBP={currentBP} />)}
    </div>
  }
  const tabs = layout.tabs.map(tab => { return { ...tab, key: tab.id, content: composeTabsContent(tab.id) } })

  return (
    (tabs && tabs[0]) ? <div className={`${styles.fpsLayout} D_FPS_LAYOUT`} ref={layoutRef}>
      {layout.showHeader && layout.header && <h1 className={`${styles.layoutHeader} D_FPS_LAYOUT_HEADER`}>{layout.header}</h1>}
      {tabs &&
        <div className={`${styles.tabsOuterWrapper} D_FPS_TAB_OUTER_WRAPPER`} style={{ overflow: _.get(data, "themeSettings.tabsScroll") == "fix_tabs" ? 'hidden' : 'auto' }}>
          <TabsPane type={_.get(data, "themeSettings.tabsStyle")} fpsTabs hideSingleTab tabs={tabs} saveTabToURL onChangeTab={onChangeTab} //currentTabKey={tabs[0].key}
            fixedScroll={_.get(data, "themeSettings.tabsScroll") == "fix_tabs"}
          /></div>}
    </div> : <div />)
}

const Section = ({ section, currentBP, callEndpoint, data, auth, fullHeight }) => {

  // console.log('section')
  // console.log(section)

  const [hideSection, setHideSection] = useState(
    !!section._visibilityEndpoint &&
    _.get(section, "_visibilityConditions._conditions").length > 0
  )

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

  function template(input) {

    if (!input || input == "{{undefined}}" || input == "{{null}}") return ""
    let templateData = { WebUser: { ...auth, id: auth.user } };

    // Function to convert object references to their desired string representation paths
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
        // Check if the value is an object and replace it with the id property if it exists
        if (typeof value === 'object' && value !== null && value.id) {
          return `{{${p1}.id}}`;
        }
        return match;
      });
    };

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
      console.error("template error");
      console.error(input);
      console.error(templateData);
      console.error('Error rendering template:', error);
      return '';
    }
  }


  const checkHidden = (element, object) => {
    if (!object) return true


    const checkHiddenCondition = element => {
      let isHidden = false

      let field = _.get(object, element._conditionalView_field)
      let value = template(element._conditionalView_value)

      // { key: "modelNotChanged" },
      if (element._conditionalView_operator == "modelNotChanged") {
        if (modelIsChanged) {
          // console.log("element is hidden")
          // console.log("model is changed")
          isHidden = true
        }
      }

      // { key: "modelChanged" },
      if (element._conditionalView_operator == "modelChanged") {
        if (!modelIsChanged) {
          // console.log("element is hidden")
          // console.log("model is NOT changed")
          isHidden = true
        }
      }

      // { key: "==", value: "is equal" },
      if (element._conditionalView_operator == "==") {
        if (typeof field == 'boolean') { field = JSON.stringify(field) }
        if (!_.isEqual(field, value)) {
          // console.log("element is hidden")
          // console.log(element._conditionalView_operator)
          // console.log("{{" + element._conditionalView_field + "}} → " + field + " !== " + value)
          isHidden = true
        }
      }

      // { key: "!==", value: "is NOT equal" },
      if (element._conditionalView_operator == "!==") {
        if (typeof field == 'boolean') { field = JSON.stringify(field) }
        if (_.isEqual(field, value)) {
          // console.log("element is hidden")
          // console.log(element._conditionalView_operator)
          // console.log("{{" + element._conditionalView_field + "}} → " + field + " == " + value)
          isHidden = true
        }
      }

      // { key: "contains", value: "contains" },
      if (element._conditionalView_operator == "contains") {
        value = value ? value.split(",") : null
        field = field ? field.split(",") : null
        if ((field && field.length > 0 &&
          value && value.length > 0
          && _.intersection(value, field).length == 0) || !field || !value) {
          // console.log("element is hidden")
          // console.log("{{" + element._conditionalView_field + "}} → " + field + " does NOT contain " + value)
          isHidden = true
        }
      }
      // { key: "notContains", value: "does NOT contain" },
      if (element._conditionalView_operator == "notContains") {
        value = value ? value.split(",") : null
        field = field ? field.split(",") : null
        if ((field && field.length > 0 &&
          value && value.length > 0
          && _.intersection(value, field).length > 0) || !field || !value) {
          // console.log("element is hidden")
          // console.log("{{" + element._conditionalView_field + "}} → " + field + " contains " + value)
          isHidden = true
        }
      }

      // { key: "in", value: "in" },
      if (element._conditionalView_operator == "in") {
        value = value ? value.split(",") : null
        field = field ? field.split(",") : null
        if ((field && field.length > 0 &&
          value && value.length > 0
          && _.intersection(value, field).length == 0) || !field || !value) {
          // console.log("element is hidden")
          // console.log(value + " does NOT contain " + "{{" + element._conditionalView_field + "}} → " + field)
          isHidden = true
        }
      }

      // { key: "notIn", value: "NOT in" }
      if (element._conditionalView_operator == "notIn") {
        value = value ? value.split(",") : null
        field = field ? field.split(",") : null
        if ((field && field.length > 0 &&
          value && value.length > 0
          && _.intersection(value, field).length > 0) || !field || !value) {
          // console.log("element is hidden")
          // console.log(value + " contains " + "{{" + element._conditionalView_field + "}} → " + field)
          isHidden = true
        }
      }

      // { key: "isNull", value: "is empty" },
      if (element._conditionalView_operator == "isNull") {
        if (!_.isEmpty(field)) {
          // console.log("element is hidden")
          // console.log("{{" + element._conditionalView_field + "}} → " + field + " is empty")
          isHidden = true
        }
      }

      // { key: "isNotNull", value: "is NOT empty" },
      if (element._conditionalView_operator == "isNotNull") {
        if (_.isEmpty(field)) {
          // console.log("element is hidden")
          // console.log("{{" + element._conditionalView_field + "}} → " + field + " is NOT empty")
          isHidden = true
        }
      }

      return isHidden
    }

    let result = false
    if (!_.get(element, "_conditions") || _.get(element, "_conditions").length == 0) return false;

    if (_.get(element, "_action_conditionals_and_or") == "OR") {
      result = true
      _.get(element, "_conditions").forEach(element => {
        if (!checkHiddenCondition(element)) { result = false }
      })
    } else {
      _.get(element, "_conditions").forEach(element => {
        if (checkHiddenCondition(element)) { result = true }
      })
    }

    return result
  }

  const callEndpointHandle = () => {
    const finish = (status, data) => {
      setHideSection(checkHidden(_.get(section, "_visibilityConditions"), flatternModel(_.get(data, "[0]"))))
    }
    callEndpoint && callEndpoint(section._visibilityEndpoint, "GET", {}, {}, finish)
  }

  useEffect(() => {
    if (!!section._visibilityEndpoint &&
      _.get(section, "_visibilityConditions._conditions").length > 0) {
      // call endpoint and check conditions
      callEndpointHandle()
    }
  }, [data])

  if (hideSection) return <div /> //<button onClick={e => callEndpointHandle()}>check api</button></div>

  if (!section.columns || section.columns.length == 0) return <div>no columns</div>
  const correctedBP = currentBP == 'wideDesktop' ? 'desktop' : currentBP;
  const marginTop = _.get(section, 'spacing.marginTop') || _.get(section, 'spacing.marginTop') === 0 ? _.get(section, 'spacing.marginTop') :
    (_.get(section, 'marginTop') || _.get(section, 'marginTop') === 0 ? _.get(section, 'marginTop') : 24)
  const marginBottom = _.get(section, 'spacing.marginBottom') || _.get(section, 'spacing.marginBottom') === 0 ? _.get(section, 'spacing.marginBottom') :
    (_.get(section, 'marginBottom') || _.get(section, 'marginBottom') === 0 ? _.get(section, 'marginBottom') : 24)
  const marginLeft = _.get(section, 'spacing.marginLeft') || _.get(section, 'spacing.marginLeft') === 0 ? _.get(section, 'spacing.marginLeft') :
    (_.get(section, 'marginLeft') || _.get(section, 'marginLeft') === 0 ? _.get(section, 'marginLeft') : 24)
  const marginRight = _.get(section, 'spacing.marginRight') || _.get(section, 'spacing.marginRight') === 0 ? _.get(section, 'spacing.marginRight') :
    (_.get(section, 'marginRight') || _.get(section, 'marginRight') === 0 ? _.get(section, 'marginRight') : 24)

  const paddingTop = _.get(section, 'spacing.paddingBottom') || _.get(section, 'spacing.paddingBottom') === 0 ? _.get(section, 'spacing.paddingBottom') :
    (_.get(section, 'paddingTop') || _.get(section, 'paddingTop') === 0 ? _.get(section, 'paddingTop') : 0)
  const paddingBottom = _.get(section, 'spacing.paddingBottom') || _.get(section, 'spacing.paddingBottom') === 0 ? _.get(section, 'spacing.paddingBottom') :
    (_.get(section, 'paddingBottom') || _.get(section, 'paddingBottom') === 0 ? _.get(section, 'paddingBottom') : 0)
  const paddingLeft = _.get(section, 'spacing.paddingLeft') || _.get(section, 'spacing.paddingLeft') === 0 ? _.get(section, 'spacing.paddingLeft') :
    (_.get(section, 'paddingLeft') || _.get(section, 'paddingLeft') === 0 ? _.get(section, 'paddingLeft') : 0)
  const paddingRight = _.get(section, 'spacing.paddingRight') || _.get(section, 'spacing.paddingRight') === 0 ? _.get(section, 'spacing.paddingRight') :
    (_.get(section, 'paddingRight') || _.get(section, 'paddingRight') === 0 ? _.get(section, 'paddingRight') : 0)

  const maxWidth = _.get(section, 'maxWidth') || _.get(section, 'maxWidth') === 0 ? _.get(section, 'maxWidth') : 'none'
  const align = _.get(section, 'align')

  const isFullHeight = _.get(section, 'fullHeight', false)

  const maxFullHeight = isFullHeight ? (fullHeight - marginTop - marginBottom - paddingTop - paddingBottom) : 'auto'

  return <div className={`${styles.section} ${_.get(section, "cssClass")} ${align == 'center' ? styles.alignCenter : ''}`}
    style={{
      flexDirection: section.flexDirection[correctedBP],
      marginTop: parseInt(marginTop),
      marginBottom: parseInt(marginBottom),
      marginLeft: parseInt(marginLeft),
      marginRight: parseInt(marginRight),
      paddingTop: parseInt(paddingTop),
      paddingBottom: parseInt(paddingBottom),
      paddingLeft: parseInt(paddingLeft),
      paddingRight: parseInt(paddingRight),
      maxWidth: parseInt(maxWidth),
      height: isFullHeight ? maxFullHeight : 'auto'
    }}>
    {section.columns.map((column, i) => <Column
      section={section}
      last={section.columns.length == i + 1}
      key={column.id}
      maxFullHeight={maxFullHeight}
      isFullHeight={isFullHeight}
      currentBP={currentBP}
      row={section.flexDirection[correctedBP] == 'row'}
      column={column} />)}
  </div>
}

const Column = ({ column, row, last, section, maxFullHeight, isFullHeight, currentBP }) => {

  // Передаем maxFullHeight в функцию рендера или клонируем элемент
  const renderWithProps = column.render && typeof column.render === 'function'
    ? column.render(currentBP, { maxFullHeight: isFullHeight ? maxFullHeight : 'auto', isFullHeight })
    : column.render && React.isValidElement(column.render)
      ? React.cloneElement(column.render, { maxFullHeight: isFullHeight ? maxFullHeight : 'auto', isFullHeight })
      : column.render;

  return <div className={`${styles.column} D_FPS_LAYOUT_COLUMN`}
    style={{ width: row ? column.size + '%' : 'auto', height: isFullHeight ? maxFullHeight : 'auto' }}>
    <ComponentWrapper last={last} section={section} row={row}>
      {renderWithProps}
    </ComponentWrapper>
  </div>
}

function ComponentWrapper(props) {
  const { section } = props

  const paddingRight = _.get(section, 'horSpacing') || _.get(section, 'horSpacing') === 0 ? _.get(section, 'horSpacing') : 24 // space between columns
  const paddingBottom = _.get(section, 'vertSpacing') || _.get(section, 'vertSpacing') === 0 ? _.get(section, 'vertSpacing') : 24 // space between rows


  const layoutRef = useRef(null);
  const [currentBP, setCurrentBP] = useState('desktop')
  const [layoutWidth, setLayoutWidth] = useState(brakePoints[currentBP].display)

  // Calculating layout width:
  useEffect(() => {
    if (layoutRef.current && layoutRef.current.offsetWidth != layoutWidth) {
      setLayoutWidth(layoutRef.current.offsetWidth)
    }
  })
  useEffect(() => {
    if (layoutWidth <= brakePoints.mobile.to) {
      setCurrentBP('mobile')
    }
    if (layoutWidth >= brakePoints.tablet.from && layoutWidth <= brakePoints.tablet.to) {
      setCurrentBP('tablet')
    }
    if (layoutWidth >= brakePoints.desktop.from && layoutWidth <= brakePoints.desktop.to) {
      setCurrentBP('desktop')
    }
    if (layoutWidth >= brakePoints.wideDesktop.from) {
      setCurrentBP('wideDesktop')
    }
  }, [layoutWidth])

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (layoutRef.current && layoutRef.current.offsetWidth !== layoutWidth) {
        setLayoutWidth(layoutRef.current.offsetWidth);
      }
    });
  }, []);
  // =========================


  return (
    <div className={`${styles.componentWrapper} D_FPS_COMPONENT_WRAPPER`} ref={layoutRef}
      style={{
        paddingRight: !props.last && props.row ? parseInt(paddingRight) : 0,
        paddingBottom: !props.last && !props.row ? parseInt(paddingBottom) : 0
      }}>

      {/* For Production / For Storybook testing:  */}
      {props.children ? (typeof props.children === 'function' ? props.children(currentBP) : props.children) :
        <div style={{ height: 100, backgroundColor: 'lightcoral', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.5 }}>
          <code>development mode</code></div>}

    </div>)
}


FpsLayout.propTypes = {
  layout: PropTypes.object,
  locale: PropTypes.string
};

FpsLayout.defaultProps = {
  layout: {},
  locale: "ENG"
};