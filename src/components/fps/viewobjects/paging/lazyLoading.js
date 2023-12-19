import React, {useEffect, useRef, useState} from 'react'
import styles from './paging.module.css'
import Button from '../../button/button'
import Loader from '../../loader/loader';

export function LazyLoading({ setPage, pageSize, totalPages, currentPage, setLoading, loading, dict, lang, chartPaging }) {
    const lazyRef = useRef(null);
    const currentPageRef = useRef(currentPage);

    // Update the ref whenever currentPage changes
    useEffect(() => {
        currentPageRef.current = currentPage;
    }, [currentPage]);

    const addOnePage = () => {
        if (totalPages === 1) return;
        if (currentPageRef.current < (totalPages - 1)) {
            setLoading(true);
            setPage(currentPageRef.current + 1);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    console.log('lazyRef is visible!');
                    addOnePage();
                } else {
                    console.log('lazyRef is not visible.');
                }
            },
            {
                root: null,
                threshold: 0.1,
            }
        );

        if (lazyRef.current) {
            observer.observe(lazyRef.current);
        }

        return () => {
            if (lazyRef.current) {
                observer.unobserve(lazyRef.current);
            }
        };
    }, []); // Empty dependency array to ensure this effect runs only once

    return (
        <div style={{ marginBottom: 30, minHeight: 50 }} ref={lazyRef}>
            {loading && <Loader>Loading...</Loader>}
        </div>
    );
}