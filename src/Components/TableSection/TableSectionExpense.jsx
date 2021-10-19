import { connect, useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import transactionOperations from '../../Redux/Operations/transactionOperations'
import Summary from '../Summary/Summary'

import styles from './TableSection.module.css'

const TableSectionExpense = ( props ) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(transactionOperations.getAllTransactions())
    }, [dispatch])    
    const transactions = useSelector(state => state.transactions.transactions) 
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
                    { transactions.transactions?.length > 0 && transactions.transactions.map(expense => { 
                        return ( expense.cashIncome === false &&
                            <tr className={styles.tableBodyRow} key={expense._id}>
                                <td className={styles.tableBodyDate}>{`${expense.day}.${expense.month}.${expense.year}`}</td>
                                <td className={styles.tableBodyDescription}>{expense.desc}</td>
                                <td className={styles.tableBodyCategory}>{expense.expenseCategories}</td>
                                <td className={styles.tableBodySum}>{`${-expense.value}`}</td>
                                <td>
                                    <button type='button' onClick={() => dispatch(transactionOperations.deleteTransaction(expense._id))} >
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

export default connect()(TableSectionExpense)