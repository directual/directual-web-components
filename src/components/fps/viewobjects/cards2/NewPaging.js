import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './NewPaging.module.css'
import Button from '../../button/button'
import Select from '../../dataentry/select/select'
import ActionPanel from '../../actionspanel/actionspanel'

function NewPaging({
    totalObjects,
    objectsPerPage,
    showPageSizeDropdown,
    onPageSizeChange,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    firstPage,
    lastPage,
    loading = false
}) {
    const [localPageSize, setLocalPageSize] = useState(objectsPerPage)

    // Синхронизируем localPageSize с objectsPerPage
    useEffect(() => {
        setLocalPageSize(objectsPerPage)
    }, [objectsPerPage])

    const handlePageSizeChange = (newPageSize) => {
        setLocalPageSize(newPageSize)
        onPageSizeChange && onPageSizeChange(newPageSize)
    }

    return (
        <div className={`FPS_NEWPAGING ${styles.newPaging}`}>
            <div className={`FPS_NEWPAGING__INFO ${styles.newPaging__info}`}>
                <span className={styles.newPaging__info__text}>
                    Total: <strong>{totalObjects}</strong>
                </span>
            </div>

            <div className={`FPS_NEWPAGING__CONTROLS ${styles.newPaging__controls}`}>
                <div className={`FPS_NEWPAGING__PAGESIZE ${styles.newPaging__pageSize}`}>
                    page size: <strong>{localPageSize}</strong>
                </div>

                <div className={`FPS_NEWPAGING__NAVIGATION ${styles.newPaging__navigation}`}>
                    <ActionPanel>
                        <Button height={32} onClick={firstPage} >First</Button>
                        <Button height={32} onClick={prevPage} icon='back' verySmall/>
                        <Button height={32} onClick={nextPage} icon='forward' verySmall/>
                        <Button height={32} onClick={lastPage} >Last</Button>
                    </ActionPanel>
                </div>
            </div>
        </div>
    )
}

NewPaging.propTypes = {
    totalObjects: PropTypes.number.isRequired,
    objectsPerPage: PropTypes.number.isRequired,
    showPageSizeDropdown: PropTypes.bool,
    onPageSizeChange: PropTypes.func,
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func,
    loading: PropTypes.bool
}

NewPaging.defaultProps = {
    showPageSizeDropdown: true,
    loading: false
}

export default NewPaging 