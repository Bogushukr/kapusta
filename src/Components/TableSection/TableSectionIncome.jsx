import { connect, useSelector } from 'react-redux'
import { useLocation } from 'react-router'

import Summary from '../Summary/Summary'

import styles from './TableSection.module.css'

const TableSectionIncome = ( props ) => {
    const path = useLocation().pathname
    // const {items} = props
    const transactions = useSelector(state => state.transactions.transactions)
    // let concatArr = items.map(item => item.concat(dateFromCalendar))
    // let concatArr = items.map(item => Object.assign(item, {date: dateFromCalendar[0]}))
    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead className={styles.tableHead}>
                    <tr className={styles.tableHeadRow}>
                        <th className={styles.tableHeadDate}>Дата</th>
                        <th className={styles.tableHeadDescription}>Описание</th>
                        <th className={styles.tableHeadCategory}>Категория</th>
                        <th className={styles.tableHeadSum}>Сумма</th>
                    </tr>
                </thead>
                <tbody className={styles.tableBody}>
                    {`${path}`==='/home/income' && transactions.map(transaction => {
                        return (
                            <tr className={styles.tableBodyRow}>
                                <td className={styles.tableBodyDate}>{`${transaction.day}.${transaction.month}.${transaction.year}`}</td>
                                <td className={styles.tableBodyDescription}>{transaction.desc}</td>
                                <td className={styles.tableBodyCategory}>{transaction.incomeCategories}</td>
                                <td className={styles.tableBodySum}>{transaction.value}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className={styles.summaryWrp}>
                <Summary />
            </div>  
        </div>
    )
}

export default connect()(TableSectionIncome)