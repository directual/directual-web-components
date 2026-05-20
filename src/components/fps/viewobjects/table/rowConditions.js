import _ from 'lodash'

/**
 * ========================================================================
 * УТИЛИТА ДЛЯ УСЛОВНОЙ СТИЛИЗАЦИИ СТРОК ТАБЛИЦЫ
 * ========================================================================
 * 
 * Эта утилита обрабатывает условия из _condition_library и применяет
 * CSS классы к строкам таблицы на основе данных строки.
 * 
 * СТРУКТУРА ДАННЫХ:
 * _condition_library: [{
 *   id: "condition_xxx",
 *   _conditionalView: true,
 *   title: ".author_red",  // CSS класс (точка опциональна)
 *   _action_conditionals_and_or: "AND" | "OR",
 *   _conditions: [{
 *     id: "condition_yyy",
 *     _conditionalView_field: "author",        // имя поля из rowData
 *     _conditionalView_operator: "isNull",     // оператор сравнения
 *     _conditionalView_value: "{{WebUser.id}}" // значение (поддерживает {{WebUser.field}})
 *   }]
 * }]
 * 
 * ПОДДЕРЖИВАЕМЫЕ ОПЕРАТОРЫ:
 * - "==" : равно
 * - "!==" : не равно
 * - "contains" : содержит (для массивов через запятую)
 * - "notContains" : не содержит
 * - "in" : значение в списке
 * - "notIn" : значение не в списке
 * - "isNull" : пустое значение
 * - "isNotNull" : не пустое значение
 * 
 * ШАБЛОНЫ В VALUE:
 * - {{fieldName}} - значение из данных строки
 * - {{WebUser.id}} - значение auth.user (ID пользователя)
 * - {{WebUser.role}} - значение auth.role
 * - {{WebUser.firstName}} - значение auth.firstName
 * - и т.д. - любое поле из объекта auth
 * 
 * ПРИМЕР 1 - Подсветка пустых строк:
 * _condition_library = [{
 *   id: "cond1",
 *   _conditionalView: true,
 *   title: ".author_red",
 *   _conditions: [{
 *     _conditionalView_field: "author",
 *     _conditionalView_operator: "isNull"
 *   }]
 * }]
 * 
 * ПРИМЕР 2 - Подсветка своих записей:
 * _condition_library = [{
 *   id: "cond2",
 *   _conditionalView: true,
 *   title: ".my_row",
 *   _conditions: [{
 *     _conditionalView_field: "author",
 *     _conditionalView_operator: "==",
 *     _conditionalView_value: "{{WebUser.id}}"
 *   }]
 * }]
 * // Строка с author === auth.user получит класс "my_row"
 * 
 * ПРИМЕР 3 - Комбинированное условие (AND):
 * _condition_library = [{
 *   id: "cond3",
 *   _conditionalView: true,
 *   title: ".author_red",
 *   _action_conditionals_and_or: "AND",
 *   _conditions: [
 *     {
 *       _conditionalView_field: "author",
 *       _conditionalView_operator: "isNull"
 *     },
 *     {
 *       _conditionalView_field: "status",
 *       _conditionalView_operator: "==",
 *       _conditionalView_value: "active"
 *     }
 *   ]
 * }]
 * // Класс применится только если author пустой И status === "active"
 * 
 * ИСПОЛЬЗОВАНИЕ:
 * const classes = evaluateRowConditions(conditionLibrary, rowData, auth)
 * <tr className={classes}>...</tr>
 * 
 * Пользователь определяет стили:
 * .author_red { background-color: #ffcccc; }
 * .my_row { background-color: #cce5ff; }
 * 
 * ========================================================================
 */

/**
 * Простая template функция для подстановки значений из rowData и auth (WebUser)
 * Заменяет {{fieldName}} на значение rowData[fieldName]
 * Заменяет {{WebUser.field}} на значение auth[field]
 */
function template(input, rowData, auth) {
  if (!input) return ""
  
  // Если это просто значение без шаблона
  if (!input.includes('{{')) return input
  
  // Формируем WebUser объект как в форме: добавляем id = auth.user
  const webUser = auth ? { ...auth, id: auth.user } : {}
  
  // Извлекаем все {{field}} из строки
  const regex = /\{\{([^}]+)\}\}/g
  return input.replace(regex, (match, fieldPath) => {
    const trimmedPath = fieldPath.trim()
    
    // Проверяем если это WebUser.field - берём из webUser
    if (trimmedPath.startsWith('WebUser.')) {
      const authField = trimmedPath.substring('WebUser.'.length)
      const value = _.get(webUser, authField)
      // Конвертируем в строку для сравнения
      if (value === null || value === undefined) return ""
      if (typeof value === 'boolean') return JSON.stringify(value)
      if (typeof value === 'object') return JSON.stringify(value)
      return String(value)
    }
    
    // Иначе берём из rowData
    let value = _.get(rowData, trimmedPath)
    
    // ВАЖНО: Если значение это объект с полем id (например, author объект), берём id
    if (value && typeof value === 'object' && value.id !== undefined) {
      value = value.id
    }
    
    // Конвертируем в строку для сравнения
    if (value === null || value === undefined) return ""
    if (typeof value === 'boolean') return JSON.stringify(value)
    if (typeof value === 'object') return JSON.stringify(value)
    return String(value)
  })
}

/**
 * Проверяет одно условие для строки таблицы
 * @param {Object} condition - условие с полями _conditionalView_field, _conditionalView_operator, _conditionalView_value
 * @param {Object} rowData - данные строки таблицы
 * @param {Object} auth - объект авторизации (WebUser)
 * @returns {boolean} - true если условие НЕ выполнено (для совместимости с логикой формы где isHidden=true)
 */
function checkCondition(condition, rowData, auth) {
  let field = template("{{" + condition._conditionalView_field + "}}", rowData, auth)
  let value = template(condition._conditionalView_value, rowData, auth)
  
  // { key: "==", value: "is equal" }
  if (condition._conditionalView_operator === "==") {
    if (typeof field === 'boolean') field = JSON.stringify(field)
    return !_.isEqual(field, value) // true если НЕ равны (isHidden)
  }
  
  // { key: "!==", value: "is NOT equal" }
  if (condition._conditionalView_operator === "!==") {
    if (typeof field === 'boolean') field = JSON.stringify(field)
    return _.isEqual(field, value) // true если равны (isHidden)
  }
  
  // { key: "contains", value: "contains" }
  if (condition._conditionalView_operator === "contains") {
    const valueArr = value ? value.split(",") : []
    const fieldArr = field ? field.split(",") : []
    const hasIntersection = fieldArr.length > 0 && valueArr.length > 0 && _.intersection(valueArr, fieldArr).length > 0
    return !hasIntersection // true если НЕ содержит
  }
  
  // { key: "notContains", value: "does NOT contain" }
  if (condition._conditionalView_operator === "notContains") {
    const valueArr = value ? value.split(",") : []
    const fieldArr = field ? field.split(",") : []
    const hasIntersection = fieldArr.length > 0 && valueArr.length > 0 && _.intersection(valueArr, fieldArr).length > 0
    return hasIntersection // true если содержит
  }
  
  // { key: "in", value: "in" }
  if (condition._conditionalView_operator === "in") {
    const valueArr = value ? value.split(",") : []
    const fieldArr = field ? field.split(",") : []
    const hasIntersection = fieldArr.length > 0 && valueArr.length > 0 && _.intersection(valueArr, fieldArr).length > 0
    return !hasIntersection // true если НЕ in
  }
  
  // { key: "notIn", value: "NOT in" }
  if (condition._conditionalView_operator === "notIn") {
    const valueArr = value ? value.split(",") : []
    const fieldArr = field ? field.split(",") : []
    const hasIntersection = fieldArr.length > 0 && valueArr.length > 0 && _.intersection(valueArr, fieldArr).length > 0
    return hasIntersection // true если in
  }
  
  // { key: "isNull", value: "is empty" }
  if (condition._conditionalView_operator === "isNull") {
    return !_.isEmpty(field) // true если НЕ пустое (isHidden)
  }
  
  // { key: "isNotNull", value: "is NOT empty" }
  if (condition._conditionalView_operator === "isNotNull") {
    return _.isEmpty(field) // true если пустое (isHidden)
  }
  
  return false
}

/**
 * Вычисляет какие CSS классы нужно применить к строке на основе библиотеки условий
 * @param {Array} conditionLibrary - массив условий из data.params._condition_library
 * @param {Object} rowData - данные строки таблицы (row.original)
 * @param {Object} auth - объект авторизации (WebUser)
 * @returns {string} - строка с CSS классами через пробел, например "author_red priority_high"
 */
export function evaluateRowConditions(conditionLibrary, rowData, auth) {
  if (!conditionLibrary || !Array.isArray(conditionLibrary)) return ""
  
  const appliedClasses = []
  
  conditionLibrary.forEach(condItem => {
    // Проверяем что это условие для отображения и у него есть title (CSS класс)
    if (!condItem._conditionalView || !condItem.title) return
    
    const conditions = _.get(condItem, "_conditions") || []
    const andOr = _.get(condItem, "_action_conditionals_and_or") || "AND"
    
    if (conditions.length === 0) return
    
    let shouldApplyClass = false
    
    // Логика как в форме:
    // AND: если хоть одно условие isHidden=true, то весь блок hidden
    // OR: если все условия isHidden=true, то блок hidden
    
    if (andOr === "OR") {
      // Для OR: класс применяется если хотя бы одно условие выполнено (isHidden=false)
      shouldApplyClass = !conditions.every(cond => checkCondition(cond, rowData, auth))
    } else {
      // Для AND: класс применяется если все условия выполнены (ни одно не isHidden=true)
      shouldApplyClass = !conditions.some(cond => checkCondition(cond, rowData, auth))
    }
    
    if (shouldApplyClass) {
      // Добавляем класс (убираем точку в начале если есть, потому что className не должен содержать точку)
      const className = condItem.title.startsWith('.') ? condItem.title.substring(1) : condItem.title
      appliedClasses.push(className)
    }
  })
  
  return appliedClasses.join(' ')
}
