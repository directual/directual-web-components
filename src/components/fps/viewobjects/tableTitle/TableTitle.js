import React, { useState } from 'react'
import styles from '../table/table.module.css'
import Button from '../../button/button'
import Filters from '../filters/Filters'
import Input from '../../dataentry/input/input'
import Loader from '../../loader/loader'

export function TableTitle({ tableQuickSearch, search, tableTitle, tableFilters, onFilter, currentDQL,
    onSearch, loading, searchValue, currentBP, lang, dict }) {
    const [showSearch, setShowSearch] = useState(search)
    const [showFilters, setShowFilters] = useState(false)
    return (
        <React.Fragment>
            <div className={`${styles.tableTitle} ${styles[currentBP]}`}>
                <div className={styles.tableTitleWrapper}>
                    {tableTitle && <h2><span>{tableTitle}</span></h2>}

                    {loading && searchValue && <div className={styles.subtitle}><Loader>Loading...</Loader></div>}
                    {searchValue && !loading &&
                        <div className={styles.titleSearch}>
                            <span>{dict[lang].searching}: <strong>{searchValue}</strong></span>
                        </div>
                    }
                </div>
                {tableQuickSearch &&
                    <div className={styles.tableActions}>
                        {/* фильтры в 0.1 версии спрячем */}
                        {/* <Button
                            icon={`${!showFilters ? 'filter' : 'filterFill'}`}
                            onClick={() => setShowFilters(!showFilters)}
                        >{`${!showFilters ? 'Show filters' : 'Hide filters'}`}</Button> */}

                        {showSearch &&
                            <div className={styles.tableQuickSearchField}>
                                <Input
                                    type='search'
                                    searchOnEnter={true}
                                    defaultValue={searchValue}
                                    inputClassName={styles.quickSearchInput}
                                    placeholder={`${dict[lang].search}...`}
                                    //debug
                                    //width={500}
                                    onPressEnter={value => {
                                        onSearch(value)
                                    }}
                                    onClear={() => {
                                        onSearch('')
                                        //setShowSearch(false)
                                    }}
                                    nomargin />
                            </div>
                            // :
                            // <Button icon='search'
                            //     onClick={() => setShowSearch(true)}></Button>
                        }
                    </div>}

            </div>
            {showFilters &&
                <Filters />
            }
        </React.Fragment>
    )
}