import React from 'react'
import styles from './paging.module.css'
import Button from '../../button/button'
import Loader from '../../loader/loader'

export function Paging({ setPage, pageSize, totalPages, currentPage, setLoading, loading }) {
    if (totalPages == 1) return <div />
    return (
        <div className={styles.paging}>
            {currentPage != 0 &&
                <Button disabled={loading} small onClick={() => {setLoading(true); setPage(currentPage - 1)}}>❮ Prev</Button>
                }
            {currentPage < (totalPages - 1) &&
                <Button disabled={loading} small onClick={() => {setLoading(true); setPage(currentPage + 1)}}>Next ❯</Button>
                }
            {!loading ?
                <div>page <strong>{currentPage + 1}</strong> of <strong>{totalPages}</strong></div>
                :
                <Loader>Loading...</Loader>
            }
        </div>
    )
}