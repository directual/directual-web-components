import React from 'react'
import styles from './paging.module.css'
import Button from '../../button/button'

export function Paging({ sendMsg, pageSize, totalPages, currentPage, setLoading, loading }) {
    return (
        <div className={styles.paging}>
            {currentPage != 0 &&
                <Button disabled={loading} small onClick={() => {setLoading(true); sendMsg({ page: currentPage - 1 })}}>❮ Prev</Button>
                }
            {currentPage < (totalPages - 1) &&
                <Button disabled={loading} small onClick={() => {setLoading(true); sendMsg({ page: currentPage + 1 })}}>Next ❯</Button>
                }
            {/* <div>pageSize: {pageSize}</div>
            <div>totalPages: </div>
            <div>totalObjects: ~{totalPages * pageSize}</div>
            <div>currentPage: </div> */}
            <div>page <strong>{currentPage + 1}</strong> of <strong>{totalPages}</strong></div>
            
        </div>
    )
}