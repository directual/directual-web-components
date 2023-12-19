import React, {useEffect, useRef, useState} from 'react'
import styles from './paging.module.css'
import Button from '../../button/button'
import Loader from '../../loader/loader';

export function LazyLoading({ setPage, pageSize, totalPages, currentPage, setLoading, loading, dict, lang, chartPaging }) {

    const lazyRef = useRef(null);

    const [currPage,setCurrPage] = useState(currentPage)

    useEffect(()=>{
        if (currentPage != currPage) { setCurrPage(currentPage)}
    }, [currentPage])

    const addOnePage = () => {
        console.log('=========> addOnePage ============>')
        console.log("currPage = " + currPage)
        console.log(currPage + 1)
        if (totalPages == 1) return undefined

        if (currPage < (totalPages - 1)) {
            setLoading(true)
            setPage(currPage + 1)
        }
    }

    console.log("LazyLoading")
    console.log("currentPage = " + currentPage)
    console.log("totalPages = " + totalPages)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    console.log('lazyRef is visible!');
                    addOnePage()
                } else {
                    console.log('lazyRef is not visible.');
                }
            },
            {
                root: null, // using the viewport
                threshold: 0.1, // box is considered visible if it's 10% visible
            }
        );

        if (lazyRef.current) {
            observer.observe(lazyRef.current);
        }

        // Cleanup the observer on component unmount
        return () => {
            if (lazyRef.current) {
                observer.unobserve(lazyRef.current);
            }
        };
    }, []);

    return <div style={{marginBottom:30, minHeight:50}} ref={lazyRef}>
        {loading && <Loader>Loading...</Loader>}
    </div>

    if (chartPaging) return <div className={styles.chartPaging}>
        <Button height={40} disabled={loading || currentPage >= (totalPages - 1)}
            small onClick={() => { setLoading(true); setPage(currentPage + 1) }}>❮</Button>
        <div>{dict[lang].page} <strong>{currentPage + 1}</strong> {dict[lang].of} <strong>{totalPages}</strong></div>
        <div className={styles.chartPagingFirst}>
            <Button height={40} disabled={loading || currentPage == 0}
                small onClick={() => { setLoading(true); setPage(currentPage - 1) }}>❯</Button>
            &nbsp;
            <Button height={40} disabled={loading || currentPage <= 1}
                small onClick={() => { setLoading(true); setPage(0) }}>❯❯</Button>
        </div>

    </div>

    if (totalPages == 1) return <div />
    return (
        <div className={styles.paging}>
            {currentPage > 1 &&
                <Button height={40} disabled={loading} small onClick={() => { setLoading(true); setPage(0) }}>❮❮</Button>
            }
            {currentPage != 0 &&
                <Button height={40} disabled={loading} small onClick={() => { setLoading(true); setPage(currentPage - 1) }}>❮ {dict[lang].prev}</Button>
            }
            {currentPage < (totalPages - 1) &&
                <Button height={40} disabled={loading} small onClick={() => { setLoading(true); setPage(currentPage + 1) }}>{dict[lang].next} ❯</Button>
            }
            {/* {!loading ? */}
            <div>{dict[lang].page} <strong>{currentPage + 1}</strong> {dict[lang].of} <strong>{totalPages}</strong></div>
            {/* :
                 <Loader>{dict[lang].loading}</Loader>
             } */}
        </div>
    )
}