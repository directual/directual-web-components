import React from 'react'
import styles from './paging.module.css'
import Button from '../../button/button'
import Loader from '../../loader/loader'

export function Paging({ setPage, pageSize, totalPages, currentPage, setLoading, loading, dict, lang }) {
    if (totalPages == 1) return <div />
    return (
        <div className={styles.paging}>
            {currentPage > 1 &&
                <Button height={40} disabled={loading} small onClick={() => {setLoading(true); setPage(0)}}>❮❮</Button>
                }
            {currentPage != 0 &&
                <Button height={40} disabled={loading} small onClick={() => {setLoading(true); setPage(currentPage - 1)}}>❮ {dict[lang].prev}</Button>
                }
            {currentPage < (totalPages - 1) &&
                <Button height={40} disabled={loading} small onClick={() => {setLoading(true); setPage(currentPage + 1)}}>{dict[lang].next} ❯</Button>
                }
            {!loading ?
                <div>{dict[lang].page} <strong>{currentPage + 1}</strong> {dict[lang].of} <strong>{totalPages}</strong></div>
                :
                <Loader>{dict[lang].loading}</Loader>
            }
        </div>
    )
}