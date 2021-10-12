import styles from './TableSection.module.css'

const TableSection = ( {description, category, sum} ) => {
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
                    <tr className={styles.tableBodyRow}>
                        <td className={styles.tableBodyDate}></td>
                        <td className={styles.tableBodyDescription}>{description}</td>
                        <td className={styles.tableBodyCategory}>{category}</td>
                        <td className={styles.tableBodySum}>{sum}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableSection