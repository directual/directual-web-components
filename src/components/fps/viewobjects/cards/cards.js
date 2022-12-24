import React, { useState, useEffect, useRef } from 'react'
import styles from './cards.module.css'
import SomethingWentWrong from '../../SomethingWentWrong/SomethingWentWrong'
import ExpandedText from '../../expandedText/expandedText'
import { Paging } from '../paging/paging'
import Button from '../../button/button'
import Hint from '../../hint/hint'
import ActionPanel from '../../actionspanel/actionspanel'
import moment from 'moment'
import _ from 'lodash'

export function Cards({
  data,
  onExpand,
  edenrichConds,
  loading,
  searchValue,
  auth,
  submitAction,
  params,
  checkActionCond,
  currentBP
}) {
  const tableHeaders = data.headers || []
  const tableData = enrichTableDataWithWriteFields(data) || []
  const tableParams = data.params || {
    cardHeaderComment: '',
    cardBodyText: ''
  }

  // console.log('=========params=========')
  // console.log(tableParams)

  const pageSize = data.pageSize || 0
  const totalPages = data.totalPages || 0
  const currentPage = data.pageNumber || 0

  const tableFieldScheme = data.fieldScheme || []
  const tableStructures = data.structures || {}

  // обогащаем поля теми, что не пришли по данным, но мы их можем писать:
  function enrichTableDataWithWriteFields(data) {
    const saveData = data.data ? [...data.data] : []
    saveData.forEach((field) => {
      data.writeFields &&
        data.writeFields.forEach((writeField) => {
          if (!field[writeField]) {
            field[writeField] = ''
          }
        })
    })
    return saveData
  }

  data.error =
    data.error && data.error == '403' ? 'You have no permissions' : data.error
  data.error =
    data.error && data.error == '511' ? 'Table is not configured' : data.error


  const getInitialStructureParams = () => {
    const randomFieldArray =
      (tableHeaders.filter(
        (field) => field.dataType != 'link' && field.dataType != 'arrayLink'
      )[0] &&
        tableHeaders.filter(
          (field) => field.dataType != 'link' && field.dataType != 'arrayLink'
        )) ||
      []
    let randomField = randomFieldArray[0].sysName
    let id =
      (tableFieldScheme.filter((field) => randomField == field[0])[0] &&
        tableFieldScheme.filter((field) => randomField == field[0])[0][1]) ||
      null
    if (!id) {
      randomField = randomFieldArray[1].sysName
      id =
        (tableFieldScheme.filter((field) => randomField == field[0])[0] &&
          tableFieldScheme.filter((field) => randomField == field[0])[0][1]) ||
        null
    }
    if (!id) {
      randomField = randomFieldArray[2].sysName
      id =
        (tableFieldScheme.filter((field) => randomField == field[0])[0] &&
          tableFieldScheme.filter((field) => randomField == field[0])[0][1]) ||
        null
    }
    const name = id && tableStructures[id] && tableStructures[id].name
    // console.log('randomField')
    // console.log('tableFieldScheme')
    // console.log(tableFieldScheme)
    // console.log(randomField)
    // console.log('id')
    // console.log(id)
    // console.log(tableStructures[id])
    const viewName =
      id &&
      tableStructures[id] &&
      (tableStructures[id].jsonViewIdSettings
        ? Object.values(
          JSON.parse(tableStructures[id].jsonViewIdSettings || [])
        ).map((i) => (i = i && i.sysName))
        : [])
    return {
      id,
      name,
      viewName
    }
  }

  // Gathers current structure info:
  const getStructure = (obj, tableFieldScheme, tableStructures) => {
    const structure = {}
    for (const field in obj) {
      if (typeof obj[field] !== 'object') {
        if (tableFieldScheme.filter((i) => i[0] == field).length > 0) {
          structure.id = tableFieldScheme.filter((i) => i[0] === field)[0][1]
        }
      }
    }
    if (structure.id && tableStructures[structure.id]) {
      structure.sysName = tableStructures[structure.id].sysName
      structure.name = tableStructures[structure.id].name
      structure.visibleName =
        tableStructures[structure.id] &&
        (tableStructures[structure.id].jsonViewIdSettings
          ? Object.values(
            JSON.parse(tableStructures[structure.id].jsonViewIdSettings)
          ).map((i) => (i = i.sysName))
          : [])
      structure.fieldStructure = JSON.parse(
        tableStructures[structure.id].jsonObject
      )
    }
    return structure
  }

  const transformTableFieldScheme = (sysname, tableFieldScheme) => {
    const newTableFieldScheme = tableFieldScheme.filter((i) =>
      i[0].startsWith(sysname + '.')
    )
    var deepClone = JSON.parse(JSON.stringify(newTableFieldScheme))
    deepClone.forEach((i) => (i[0] = i[0].substring(sysname.length + 1)))
    return deepClone
  }

  const getLinkName = (sysname, obj, fieldScheme) => {
    fieldScheme = fieldScheme || tableFieldScheme
    const structure = getStructure(
      obj,
      transformTableFieldScheme(sysname, fieldScheme),
      tableStructures
    )
    const linkNameArr = []
    structure.visibleName &&
      structure.visibleName.forEach((field) => {
        const fieldDetails = structure.fieldStructure.filter(
          (i) => i.sysName == field
        )[0]
        if (obj[field] || obj[field] == 0) {
          if (fieldDetails.dataType == 'date') {
            linkNameArr.push(formatDate(obj[field], fieldDetails.formatOptions))
          } else {
            if (typeof obj[field] === 'object') {
              linkNameArr.push(
                getLinkName(
                  field,
                  obj[field],
                  transformTableFieldScheme(sysname, fieldScheme)
                )
              )
            } else {
              linkNameArr.push(obj[field])
            }
          }
        }
        // if (obj[field] || obj[field] == 0) {
        //     linkNameArr.push(obj[field])
        // }
      })
    const linkName = linkNameArr
      ? linkNameArr.length > 0
        ? linkNameArr.join(' ')
        : null
      : null
    let displayID = ''
    if (typeof obj === 'string') {
      displayID = obj
    }
    return linkName == 0
      ? '0'
      : linkName || displayID || obj.id || 'No visible name'
  }

  const [successWeb3, setSuccessWeb3] = useState(false)

  return (
    <React.Fragment>
      <div
        className={`${styles.cardsWrapper}
                ${(data.error ||
            tableData.length === 0 ||
            tableHeaders.length === 0) &&
          styles.emptyTable
          } ${loading && styles.loading}`}
      >
        {tableData.length != 0 &&
          tableHeaders.length != 0 &&
          tableData.map((row, i) => <Card
            params={params}
            row={row}
            data={data}
            i={i}
            currentBP={currentBP}
            tableParams={tableParams}
            tableHeaders={tableHeaders}
            loading={loading}
            successWeb3={successWeb3}
            edenrichConds={edenrichConds}
            searchValue={searchValue}
            auth={auth}
            submitAction={submitAction}
            checkActionCond={checkActionCond}
            setSuccessWeb3={setSuccessWeb3}
            onExpand={onExpand}
            getLinkName={getLinkName}
            getInitialStructureParams={getInitialStructureParams}
          />)}
        {data.error && (
          <SomethingWentWrong icon='warning' message={data.error} />
        )}
        {(tableData.length === 0 || tableHeaders.length === 0) &&
          !data.error && (
            <SomethingWentWrong
              icon='ban'
              message={`${searchValue
                ? `No object found for ${searchValue}`
                : `No objects`
                }`}
            />
          )}
      </div>
    </React.Fragment>
  )
}

export function Card({ row, params, getInitialStructureParams, data,
  successWeb3, setSuccessWeb3, checkActionCond, submitAction, auth, searchValue, edenrichConds,
  tableHeaders, getLinkName, tableParams, i, currentBP, loading, onExpand, onEvent, setLoading }) {
  const object = row
  // actions для меню быстрого доступа
  const quickActions = params.actions
    ? params.actions.filter(
      (i) =>
        i.dropdown &&
        i.displayAs == 'button' &&
        i.callFrom != 'linked' &&
        checkActionCond(i.conditionals, object)
    )
    : []


  // actions кнопок в футере карточки
  const footerButtons = params.actions
    ? params.actions.filter(
      (i) =>
        i.footerButtons &&
        i.displayAs == 'button' &&
        i.callFrom != 'linked' &&
        checkActionCond(i.conditionals, object)
    )
    : []

  // выполнить Action
  function performAction(actionParams) {
    // console.log('actionParams')
    // console.log(actionParams)
    const mapping = {} // calling api-endpoint
    const options = {} // calling web3-api
    if (actionParams.web3) {
      options.web3 = true
    }
    if (
      (!actionParams.formMapping ||
        actionParams.formMapping.length == 0) &&
      !actionParams.web3
    ) {
      console.log('action does nothing')
      return null
    }

    // gathering mapping for endpoint call:
    actionParams.formMapping &&
      actionParams.formMapping.length &&
      actionParams.formMapping.forEach((row) => {
        if (row.type == 'user') {
          mapping[row.target] = auth ? auth.user : null
        }
        if (row.type == 'const') {
          mapping[row.target] = row.value
        }
        if (row.type == 'objectField') {
          mapping[row.target] =
            typeof object[row.value] !== 'object'
              ? object[row.value]
              : Array.isArray(object[row.value])
                ? object[row.value].map((i) => i.id).join(',')
                : object[row.value].id
        }
      })

    // gathering mapping for web3-api call:
    actionParams.web3Mapping &&
      actionParams.web3Mapping.length &&
      actionParams.web3Mapping.forEach((row) => {
        if (row.type == 'user') {
          options[row.target] = auth ? auth.user : null
        }
        if (row.type == 'const') {
          options[row.target] = row.value
        }
        if (row.type == 'objectField') {
          options[row.target] =
            typeof object[row.value] !== 'object'
              ? object[row.value]
              : Array.isArray(object[row.value])
                ? object[row.value].map((i) => i.id).join(',')
                : object[row.value].id
        }
      })
    const sl = actionParams.sysName
    const result = submitAction(mapping, sl, options)

    if (result) {
      result
        .then((ok) => {
          console.log("ok async" + ok)
          setSuccessWeb3(true)
        })
        .catch((err) => {
          console.log("err async")
          console.log(err)
        })
    }
  }

  // форматируем дату для карточки (если есть) в соответствии с formatOptions
  const formatDate = (value, formatOptions) => {
    if (!value) {
      return null
    }
    formatOptions = formatOptions || {}
    const formattedDate =
      formatOptions.isUTC == 'true'
        ? moment
          .utc(value)
          .locale(formatOptions.dateLocale || 'ed-gb')
          .format(
            formatOptions.dateFormat + formatOptions.timeFormat ||
            'DD/MM/Y, HH:mm, Z'
          )
        : moment(value)
          .locale(formatOptions.dateLocale || 'ed-gb')
          .format(
            formatOptions.dateFormat + formatOptions.timeFormat ||
            'DD/MM/Y, HH:mm, Z'
          )
    return formattedDate
  }

  const formatJson = (value, formatOptions) => {
    const jsonParse = (def) => {
      try {
        return JSON.parse(def) || {}
      } catch (e) {
        console.log(e)
        return def || {}
      }
    }

    // Range слайдер пока не прикрутил, см условие на .secondValue
    if (!formatOptions.range || jsonParse(value).secondValue) {
      return
    }
    // console.log('SLIDER')
    // console.log(value)
    // console.log(formatOptions)
    // console.log(jsonParse(value))

    const progress = jsonParse(value)
      ? (100 * jsonParse(value).firstValue) /
      (formatOptions.range.max - formatOptions.range.min)
      : 0
    // console.log(progress)

    return (
      <div className={styles.cardsSlider}>
        <div className={styles.line}>
          <div
            className={styles.fill}
            style={{ width: `${progress || '0'}%` }}
          />
        </div>
        <div className={styles.sliderValue}>
          {jsonParse(value).firstValue || '0'}
          {formatOptions.unitName}
        </div>
      </div>
    )
  }

  // в этой хуете мы подтягиваем для Заголовка, Подзаголовка и Текста карточки visible name если поле типа link/arrayLink
  let cardHeader =
    getInitialStructureParams().viewName &&
    getInitialStructureParams().viewName &&
    (getInitialStructureParams().viewName.length > 0
      ? getInitialStructureParams()
        .viewName.map((i) =>
          typeof row[i] === 'object'
            ? !Array.isArray(row[i])
              ? getLinkName(i, row[i])
              : row[i].map((j) => getLinkName(i, j)).join(', ')
            : !tableHeaders.filter((h) => h.sysName == i)[0]
              ? ''
              : tableHeaders.filter((h) => h.sysName == i)[0]
                .dataType != 'date'
                ? row[i]
                : formatDate(
                  row[i],
                  tableHeaders.filter((h) => h.sysName == i)[0]
                    .formatOptions
                )
        )
        .join(' ')
      : '')

  // console.log('cardHeader')
  // console.log(getInitialStructureParams().viewName)

  cardHeader =
    cardHeader == '' ||
      cardHeader == ' ' ||
      cardHeader == '  ' ||
      cardHeader == '   ' ||
      cardHeader == '    ' ||
      cardHeader == '     ' ||
      cardHeader == '      '
      ? row.id || 'No visible name'
      : cardHeader

  cardHeader = cardHeader
    ? typeof cardHeader === 'object'
      ? cardHeader.value || JSON.stringify(cardHeader)
      : cardHeader
    : 'No visible name'

  const cardHeaderComment =
    row &&
    (typeof row[tableParams.cardHeaderComment] === 'object'
      ? !Array.isArray(row[tableParams.cardHeaderComment])
        ? getLinkName(
          tableParams.cardHeaderComment,
          row[tableParams.cardHeaderComment]
        )
        : row[tableParams.cardHeaderComment].map((i) =>
          getLinkName(tableParams.cardHeaderComment, i)
        )
      : tableHeaders.filter(
        (h) => h.sysName == tableParams.cardHeaderComment
      )[0] &&
        tableHeaders.filter(
          (h) => h.sysName == tableParams.cardHeaderComment
        )[0].dataType == 'date'
        ? // <pre>{JSON.stringify(tableHeaders.filter(h => h.sysName == tableParams.cardHeaderComment)[0],0,3)}</pre> :
        formatDate(
          row[tableParams.cardHeaderComment],
          tableHeaders.filter(
            (h) => h.sysName == tableParams.cardHeaderComment
          )[0].formatOptions
        )
        : row[tableParams.cardHeaderComment])

  const cardBodyText =
    row &&
    (typeof row[tableParams.cardBodyText] === 'object'
      ? !Array.isArray(row[tableParams.cardBodyText])
        ? getLinkName(
          tableParams.cardBodyText,
          row[tableParams.cardBodyText]
        )
        : row[tableParams.cardBodyText].map((i) =>
          getLinkName(tableParams.cardBodyText, i)
        )
      : tableHeaders.filter(
        (h) => h.sysName == tableParams.cardBodyText
      )[0] &&
        tableHeaders.filter(
          (h) => h.sysName == tableParams.cardBodyText
        )[0].dataType == 'date'
        ? formatDate(
          row[tableParams.cardBodyText],
          tableHeaders.filter(
            (h) => h.sysName == tableParams.cardBodyText
          )[0].formatOptions
        )
        : tableHeaders.filter(
          (h) => h.sysName == tableParams.cardBodyText
        )[0] &&
          tableHeaders.filter(
            (h) => h.sysName == tableParams.cardBodyText
          )[0].dataType == 'json'
          ? formatJson(
            row[tableParams.cardBodyText],
            tableHeaders.filter(
              (h) => h.sysName == tableParams.cardBodyText
            )[0].formatOptions
          )
          : row[tableParams.cardBodyText])
  // ==================================

  const cardColor = row[tableParams.cardColor]
    ? row[tableParams.cardColor][0] == '#' ||
      row[tableParams.cardColor][0] == 'r'
      ? row[tableParams.cardColor]
      : '#' + row[tableParams.cardColor]
    : null

  // Render the card below:

  const customCardHtml = object.id ? _.get(data, `cardCustomLayout[${object.id}]`) : "<code>Object ID is missed</code>"

  return (
    <div
      key={i}
      className={`${styles.card} ${styles[currentBP]} ${styles[tableParams.cardListLayout || 'grid']
        }`}
    >

      {/* quick actions menu */}
      <QuickActionsControl
        quickActions={quickActions}
        performAction={performAction}
      />
      <div
        className={`${styles.cardInnerWrapper}
                                ${tableParams.cardColor &&
          tableParams.cardColorOption == 'border' &&
          styles.borderColor
          }
                                ${styles[tableParams.cardImageType]}
                                ${tableParams.invertColors &&
          styles.invertColors
          }
                                `}
        style={
          tableParams.cardColor &&
            tableParams.cardColorOption == 'border'
            ? {
              borderColor: cardColor,
              minHeight:
                tableParams.cardImageType == 'cover'
                  ? tableParams.cardCoverHeight
                    ? tableParams.cardCoverHeight
                    : 'auto'
                  : 'auto'
            }
            : {
              minHeight:
                tableParams.cardImageType == 'cover'
                  ? tableParams.cardCoverHeight
                    ? tableParams.cardCoverHeight
                    : 'auto'
                  : 'auto'
            }
        }
        onClick={() => {
          // console.log(row)
          console.log('click')
          console.log(loading)
          !loading && onExpand(row)
        }}
      >
        {params.cardLayoutType == 'html' ?
          <div
            dangerouslySetInnerHTML={{ __html: customCardHtml }}
          />
          :
          <div
            className={`${styles.cardInnerWrapperImage} ${styles[tableParams.cardImageType]}`}>
            {/* Разукрашиваем карточку */}
            {tableParams.cardColor &&
              tableParams.cardColorOption != 'none' && (
                <div
                  style={{
                    backgroundColor: cardColor
                  }}
                  className={`${styles.color} ${styles[tableParams.cardColorOption]
                    }`}
                />
              )}
            {/* Картинка карточки */}
            {tableParams.cardImageField && (
              <div
                className={`${styles.cardImage}`}
                style={{
                  backgroundSize:
                    tableParams.cardImageResize == 'contain'
                      ? 'contain'
                      : 'cover',
                  backgroundImage: `url(${(row[tableParams.cardImageField] || '').split(',')
                    ? (row[tableParams.cardImageField] || '').split(
                      ','
                    )[0]
                    : ''
                    })`,
                  width:
                    tableParams.cardImageType == 'left' ||
                      tableParams.cardImageType == 'leftCircle'
                      ? parseInt(tableParams.cardImageSize)
                        ? parseInt(
                          currentBP == 'mobile'
                            ? Math.floor(
                              tableParams.cardImageSize / 1.5
                            )
                            : tableParams.cardImageSize
                        )
                        : 100
                      : 'auto',
                  height:
                    tableParams.cardImageType == 'top' ||
                      tableParams.cardImageType == 'leftCircle'
                      ? parseInt(tableParams.cardImageSize)
                        ? parseInt(
                          currentBP == 'mobile'
                            ? Math.floor(
                              tableParams.cardImageSize / 1.5
                            )
                            : tableParams.cardImageSize
                        )
                        : 100
                      : 'auto',
                  minHeight:
                    tableParams.cardImageType == 'left' &&
                      tableParams.cardImageSizeHeight
                      ? parseInt(
                        currentBP == 'mobile'
                          ? Math.floor(tableParams.cardImageSize / 1.5)
                          : tableParams.cardImageSize
                      )
                      : 'none'
                }}
              >
                {!row[tableParams.cardImageField] && (
                  <span className='icon icon-ban'>no&nbsp;picture</span>
                )}
              </div>
            )}

            {/* Текст карточки */}
            <div className={styles.cardText}>
              {params.cardHeaderStyle == 'p' ?
                <p className={styles.cardHeader}>
                  <span className={styles.txt}>
                    {cardHeader.length > 0 ? cardHeader : 'No visible name'}
                  </span>

                  {/* counter: */}
                  {tableParams.counterField &&
                    row &&
                    row[tableParams.counterField] &&
                    row[tableParams.counterField] != 0 &&
                    row[tableParams.counterField] != '0' ? (
                    <span
                      className={`${styles.counter} ${!quickActions || quickActions.length == 0
                        ? styles.moveCounter
                        : ''
                        }`}
                      title={`${row[tableParams.counterField]} ${tableParams.counterText
                        }`}
                    >
                      {(typeof row[tableParams.counterField] == 'object') ?
                        getLinkName(tableParams.counterField, row[tableParams.counterField]) :
                        row[tableParams.counterField]}
                    </span>
                  ) : (
                    ''
                  )}
                </p>
                :
                <h3 className={styles.cardHeader}>
                  <span className={styles.txt}>
                    {cardHeader.length > 0 ? cardHeader : 'No visible name'}
                  </span>

                  {/* counter: */}
                  {tableParams.counterField &&
                    row &&
                    row[tableParams.counterField] &&
                    row[tableParams.counterField] != 0 &&
                    row[tableParams.counterField] != '0' ? (
                    <span
                      className={`${styles.counter} ${!quickActions || quickActions.length == 0
                        ? styles.moveCounter
                        : ''
                        }`}
                      title={`${row[tableParams.counterField]} ${tableParams.counterText
                        }`}
                    >
                      {(typeof row[tableParams.counterField] == 'object') ?
                        getLinkName(tableParams.counterField, row[tableParams.counterField]) :
                        row[tableParams.counterField]}
                    </span>
                  ) : (
                    ''
                  )}
                </h3>}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  marginRight: -12
                }}
              >
                {cardHeaderComment &&
                  // если Array, то это у нас либо список labels, либо arrayLink
                  // также чекаем на то, что это link/arrayLink, тогда добавляем классом linkText рамочку
                  // для labels рамочка добавляется классом labelText
                  (!Array.isArray(cardHeaderComment) ? (
                    <div
                      className={`${styles.cardHeaderComment} ${typeof row[tableParams.cardHeaderComment] ===
                        'object' && styles.linkText
                        }`}
                    >
                      {cardHeaderComment}
                    </div>
                  ) : (
                    <div
                      className={`${styles.headerArray} ${styles.cardHeaderComment}`}
                    >
                      {cardHeaderComment.map((i) => (
                        <div
                          className={`${typeof row[
                            tableParams.cardHeaderComment
                          ][0] === 'object'
                            ? styles.linkText
                            : styles.labelText
                            }`}
                        >
                          {i}
                        </div>
                      ))}
                    </div>
                  ))}
                {cardBodyText &&
                  // все также как у cardHeaderComment
                  (!Array.isArray(cardBodyText) ? (
                    <ExpandedText
                      textLength={
                        tableParams.cardBodyTextLength == 0
                          ? 0
                          : tableParams.cardBodyTextLength || 300
                      }
                      className={`${styles.cardBodyText} ${typeof row[tableParams.cardBodyText] ===
                        'object' && styles.linkText
                        }`}
                    >
                      {/* {currentBP} */}
                      {cardBodyText}
                    </ExpandedText>
                  ) : (
                    <div
                      className={`${styles.headerArray} ${styles.cardBodyText}`}
                    >
                      {cardBodyText.map((i) => (
                        <div
                          className={`${typeof row[tableParams.cardBodyText][0] ===
                            'object'
                            ? styles.linkText
                            : styles.labelText
                            }`}
                        >
                          {i}
                        </div>
                      ))}
                    </div>
                  ))}
              </div>
            </div>
          </div>}
        {footerButtons && footerButtons.length > 0 && <FooterButtons
          loading={loading}
          data={data}
          successWeb3={successWeb3}
          footerButtons={footerButtons}
          performAction={performAction}
        />}
      </div>
    </div>
  )
}

function FooterButtons({ footerButtons, performAction, loading, successWeb3, data }) {

  return (
    <React.Fragment>
      {footerButtons && footerButtons.length && (
        <div className={styles.cardsFooter}>
          <ActionPanel margin={{ top: 0, left: 0 }}>
            {footerButtons.map((button) => {

              const [localLoading, setLocalLoading] = useState(false)
              const [submitted, isSubmitted] = useState(false)
              const [message, setMessage] = useState(false)

              const [noData, setNoData] = useState(null)

              function noActionData() {
                // setGenericLoading(true)
                setTimeout(
                  () => {
                    // setGenericLoading(false)
                    setNoData('Action does nothing')
                  },
                  500
                )
                setTimeout(
                  () => {
                    setNoData(null)
                  },
                  10000
                )
              }

              // global loading to local loading:
              useEffect(() => {
                if (!loading) {
                  setLocalLoading(false)
                } else {
                  !localLoading && isSubmitted(false)
                }
                button.showMessage && setMessage(true)
              }, [loading, data])

              // if user clicks another card, we need to turn off the flag here:
              useEffect(() => {
                if (!localLoading && !successWeb3) {
                  button.web3 && isSubmitted(false)
                }
              }, [localLoading])

              // success (transaction confirmed):
              if (!loading && message && submitted && (successWeb3 || !button.web3))
                return (<div style={{ width: "100%" }}>
                  <Hint key={button.id} ok margin={{ top: 0, bottom: 3 }}>
                    <div
                      dangerouslySetInnerHTML={{ __html: button.resultMessage }}
                    />
                  </Hint>
                </div>
                )
              if (noData) { return <div className={styles.noData}>{noData}</div> }

              return (
                <Button
                  key={button.id}
                  accent={button.buttonType == 'accent'}
                  danger={button.buttonType == 'danger'}
                  icon={button.buttonIcon}
                  loading={localLoading}
                  onClick={(e) => {
                    e.stopPropagation()

                    if (
                      (!button.formMapping ||
                        button.formMapping.length == 0) &&
                      !button.web3
                    ) {
                      noActionData()
                      console.log('action does nothing')
                      return null
                    } else {
                      performAction(button)
                      setLocalLoading(true)
                      // лютый костыль — в канбане какого-то хуя не срабатывает сброс лоадинга
                      setTimeout(() => setLocalLoading(false), 5000)
                    }
                    isSubmitted(true)
                  }}
                >
                  {button.buttonTitle || button.name}
                </Button>
              )
            })}
          </ActionPanel>
        </div>
      )}
    </React.Fragment>
  )
}

function QuickActionsControl({ quickActions, performAction }) {
  const [showQA, setShowQA] = useState(false)
  const quickMenu = useRef(null)

  useOutsideAlerter(quickMenu)

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowQA(false)
        }
      }

      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  return (
    <React.Fragment>
      {quickActions && quickActions.length > 0 && (
        <div className={`${styles.details}`}>
          <div
            onClick={(e) => {
              e.stopPropagation()
              setShowQA(true)
            }}
            className={`${styles.detailsButton} icon icon-details`}
          />
          <ul
            ref={quickMenu}
            className={`${styles.quickMenu} ${!showQA && styles.hide}`}
          >
            {quickActions.map((action) => (
              <li
                onClick={(e) => {
                  e.stopPropagation()
                  performAction(action)
                  setShowQA(false)
                }}
                className={`${action.buttonIcon
                  ? 'icon small icon-' + action.buttonIcon
                  : ''
                  }`}
              >
                <span>{action.buttonTitle || action.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </React.Fragment>
  )
}
