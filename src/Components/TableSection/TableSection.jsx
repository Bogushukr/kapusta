import { Component } from 'react'
import styles from './TableSection.module.css'

class TableSection extends Component {
    render() {
        const items = this.props.items
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
                        {items.map(item => {
                            console.log('--- in map ---')
                            return (
                                <tr className={styles.tableBodyRow}>
                                    <td className={styles.tableBodyDate}></td>
                                    <td className={styles.tableBodyDescription}>{item.description}</td>
                                    <td className={styles.tableBodyCategory}>{item.category}</td>
                                    <td className={styles.tableBodySum}>{item.sum}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
    )
}
}

// const TableSection = ( {description, category, sum} ) => {
//     let items = []
//     items.push({description, category, sum})
//     // console.log('itemsNew in Table: ', items)
//     return (
//         <div className={styles.tableContainer}>
//             <table className={styles.table}>
//                 <thead className={styles.tableHead}>
//                     <tr className={styles.tableHeadRow}>
//                         <th className={styles.tableHeadDate}>Дата</th>
//                         <th className={styles.tableHeadDescription}>Описание</th>
//                         <th className={styles.tableHeadCategory}>Категория</th>
//                         <th className={styles.tableHeadSum}>Сумма</th>
//                     </tr>
//                 </thead>
//                 <tbody className={styles.tableBody}>
//                     {items.map(item => {
//                         // console.log('--- in map ---')
//                         return (
//                             <tr className={styles.tableBodyRow}>
//                                 <td className={styles.tableBodyDate}></td>
//                                 <td className={styles.tableBodyDescription}>{item.description}</td>
//                                 <td className={styles.tableBodyCategory}>{item.category}</td>
//                                 <td className={styles.tableBodySum}>{item.sum}</td>
//                             </tr>
//                         )
//                     })}
//                 </tbody>
//             </table>
//         </div>
//     )
// }

export default TableSection