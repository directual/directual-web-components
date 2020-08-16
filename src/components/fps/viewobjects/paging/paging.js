import React from 'react'
import styles from './paging.module.css'
import Button from '../../button/button'

export function Paging({ sendMsg, pageSize, totalPages, currentPage }) {
    return (
        <div className={styles.paging}>
            {currentPage != 0 &&
                <Button small onClick={() => sendMsg({ page: currentPage - 1 })}>❮ Prev</Button>
                }
            {currentPage != totalPages &&
                <Button small onClick={() => sendMsg({ page: currentPage + 1 })}>Next ❯</Button>
                }
            <div>pageSize: {pageSize}</div>
            <div>totalPages: {totalPages}</div>
            <div>totalObjects: ~{totalPages * pageSize}</div>
            <div>currentPage: {currentPage}</div>
            
        </div>
    )
}