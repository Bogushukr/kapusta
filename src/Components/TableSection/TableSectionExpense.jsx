import { connect, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import transactionOperations from '../../Redux/Operations/transactionOperations'
import Summary from '../Summary/Summary'

import styles from './TableSection.module.css'

const TableSectionExpense = ( { transactions } ) => {
    const dispatch = useDispatch()
    useEffect(() => { 
        dispatch(transactionOperations.getAllTransactions()) 
    }, [dispatch])
    // console.log('transactions: ', transactions)
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
                { transactions?.length > 0 && transactions.map(expense => {
                        return ( expense.cashIncome === false &&
                            <tr className={styles.tableBodyRow} key={expense._id}>
                                <td className={styles.tableBodyDate}>{`${expense.day}.${expense.month}.${expense.year}`}</td>
                                <td className={styles.tableBodyDescription}>{expense.desc}</td>
                                <td className={styles.tableBodyCategory}>{expense.expenseCategories}</td>
                                <td className={styles.tableBodySum}>{`${-expense.value}`}</td>
                                <td>
                                    <button className={styles.btnDel} type='button' onClick={() => dispatch(transactionOperations.deleteTransaction(expense._id))} >
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className={styles.summaryWrp}>
                <Summary cashIncome={false}/>
            </div>            
        </div>
    )
}

const mapStateToProps = (state, props) => ({
    transactions:  state.transactions.transactions,
})

export default connect(mapStateToProps)(TableSectionExpense)