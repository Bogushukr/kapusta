import { connect, useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import transactionOperations from '../../Redux/Operations/transactionOperations'

import Summary from '../Summary/Summary'

import styles from './TableSection.module.css'

// function emptyTable(){
//     let table = []
//     for(let i=0; i<8; i++) {
//         table.push(
//             <tr className={styles.tableBodyRow}>
//                 <td className={styles.tableBodyDate}>{}</td>
//                 <td className={styles.tableBodyDescription}>{}</td>
//                 <td className={styles.tableBodyCategory}>{}</td>
//                 <td className={styles.tableBodySum}>{}</td>
//             </tr>
//         )
//     }
//     return table
// }

const TableSectionExpense = ( props ) => {
    const dispatch = useDispatch()
    const path = useLocation().pathname
    // const {items} = props
    const transactions = useSelector(state => state.transactions.transactions)
    console.log('transactions from BE: ', transactions)
    const filteredExpenses = transactions.filter(transaction => transaction.cashIncome === false)
    console.log('filteredExpenses: ', filteredExpenses);
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
                    {/* {transactions.length === 0 && emptyTable()} */}
                    {`${path}`==='/home/expense' && filteredExpenses.map(expense => {
                        return (
                            <tr className={styles.tableBodyRow} key={expense._id}>
                                <td className={styles.tableBodyDate}>{`${expense.day}.${expense.month}.${expense.year}`}</td>
                                <td className={styles.tableBodyDescription}>{expense.desc}</td>
                                <td className={styles.tableBodyCategory}>{expense.expenseCategories}</td>
                                <td className={styles.tableBodySum}>{`${-expense.value}`}</td>
                                <td>
                                    <button type='button' onClick={()=>dispatch(transactionOperations.deleteTransaction(expense._id))}>
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