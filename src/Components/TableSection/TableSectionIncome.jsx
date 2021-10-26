import { connect, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import transactionOperations from '../../Redux/Operations/transactionOperations'
import Summary from '../Summary/Summary'

import styles from './TableSection.module.css'

const TableSectionIncome = ( { transactions } ) => {
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
                    {transactions?.length > 0 && transactions.map(income => {                        
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
                <Summary cashIncome={true}/>
            </div>  
        </div>
    )
}

const mapStateToProps = (state, props) => ({    
    transactions:  state.transactions.transactions,
})

export default connect(mapStateToProps)(TableSectionIncome)