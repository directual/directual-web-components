import React, { useState } from 'react'
import styles from '../table/table.module.css'
import Button from '../../button/button'
import Filters from '../filters/Filters'
import Input from '../../dataentry/input/input'

export function TableTitle({ tableQuickSearch, tableTitle, tableFilters, onFilter, onSearch }) {
    const [showSearch, setShowSearch] = useState(false)
    const [showFilters, setShowFilters] = useState(false)
    return (
        <React.Fragment>
            <div className={styles.tableTitle}>
                {tableTitle && <h1>{tableTitle}</h1>}
                {(tableQuickSearch || tableFilters) &&
                    <div className={styles.tableActions}>
                        {/* фильтры в 0.1 версии спрячем */}
                        {/* <Button
                            icon={`${!showFilters ? 'filter' : 'filterFill'}`}
                            onClick={() => setShowFilters(!showFilters)}
                        >{`${!showFilters ? 'Show filters' : 'Hide filters'}`}</Button> */}

                        {/* поиск в 0.1 версии спрячем */}
                        {/* <div className={styles.tableQuickSearchField}>
                            {showSearch ?
                                <Input
                                    type='search'
                                    searchOnEnter={true}
                                    inputClassName={styles.quickSearchInput}
                                    placeholder='Search...'
                                    width={300}
                                    onPressEnter={value => {
                                        onSearch(value)
                                    }}
                                    tip='Press Enter for searching'
                                    onClear={() => {
                                        onSearch('')
                                        setShowSearch(false)
                                    }}
                                    nomargin />
                                :
                                <Button icon='search'
                                    onClick={() => setShowSearch(true)}></Button>
                            }
                        </div> */}
                    </div>}

            </div>
            {showFilters &&
                <Filters>

                </Filters>
            }
        </React.Fragment>
    )
}