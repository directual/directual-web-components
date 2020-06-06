import React from 'react'
import styles from '../../styles.module.css'
import icon from './../../icons/fps-cards.svg'

function FpsCards({ data, onEvent, id }) {
  const tableHeader = data.headers || []
  const tableData = data.data || []
  const totalPages = data.totalPages || 0
  const currentPage = data.pageNumber || 0
  const sendMsg = (msg) => {
    const message = { ...msg, _id: id }
    if (onEvent) {
      onEvent(message)
    }
  }

  data.error =
    data.error && data.error == '403'
      ? 'You have no permissions for viewing form'
      : data.error
  data.error =
    data.error && data.error == '511' ? 'Form is not configured' : data.error

  return (
    <div className='wrap'>
      {data.error && <div>error:{data.error}</div>}
      <div className='cards-view'>
        <div className='cards-list'>
          {tableData.length === 0 && <div> Table is empty</div>}

          {tableData.map((row) => (
            <a href='#' className='card-wrapper' onClick='return false'>
              <div className='card-data-wrapper'>
                {tableHeader.map((column) => (
                  <div>
                    {column.name} : {row[column.sysName]} <br />
                  </div>
                ))}
              </div>
            </a>
          ))}
        </div>
        <div className='cards-paging'>
          {Array.apply(0, Array(totalPages)).map((x, i) => (
            <span
              style={{ fontWeight: currentPage === i ? 'bold' : '' }}
              onClick={() => sendMsg({ page: i })}
            >
              {i + 1}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
FpsCards.settings = {
  icon: icon,
  name: 'Cards view',
  sysName: 'FpsTable',
  form: [
    { name: 'Select SL', sysName: 'sl', type: 'api-endpoint' },
    { name: 'pageSize', sysName: 'successText', type: 'input' },
    { name: 'headerField', sysName: 'headerField', type: 'input' }
  ]
}
export default FpsCards
