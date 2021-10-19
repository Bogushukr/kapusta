import { connect, useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import transactionOperations from '../../Redux/Operations/transactionOperations'
import Summary from '../Summary/Summary'

import styles from './TableSection.module.css'

const TableSectionIncome = ( props ) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(transactionOperations.getAllTransactions())
    }, [dispatch])  
    const transactions = useSelector(state => state.transactions.transactions)
    const filteredIncome = transactions.transactions.filter(transaction => transaction.cashIncome === true)
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
                    {transactions.transactions?.length > 0 && filteredIncome.map(income => {                        
                        return ( income.cashIncome === true &&                           
                            <tr className={styles.tableBodyRow} key={income._id}>
                                <td className={styles.tableBodyDate}>{`${income.day}.${income.month}.${income.year}`}</td>
                                <td className={styles.tableBodyDescription}>{income.desc}</td>
                                <td className={styles.tableBodyCategory}>{income.incomeCategories}</td>
                                <td className={styles.tableBodySum}>{income.value}</td>
                                <td>
                                    <button type='button' onClick={() => dispatch(transactionOperations.deleteTransaction(income._id))} >
                                        Delete
                                    </button>
                                </td>
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