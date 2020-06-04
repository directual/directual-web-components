import React from 'react'
import styles from '../../styles.module.css'

export default function ({ data, onEvent, id }) {
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

  return (
    <div className='wrap'>
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
