import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import Balance from '../../Components/Balance'
import SectionExpense from '../../Sections/SectionExpense/SectionExpense'
import SectionIncome from '../../Sections/SectionIncome/SectionIncome'

import styles from './HomePage.module.css'

const HomeView = () => {
  const path = useLocation().pathname
  return (
    <>
      <Balance />
      <div className={styles.summaryContainer}>
        <div className="summary">
              <Link to="/home/expense" className="consumptionButton">Расход</Link>
              <Link to="/home/income" className="incomeButton">Доход</Link>
        </div>
        <div>{`${path}`==='/home/income' ? <SectionIncome /> : <SectionExpense />} </div>
      </div>
    </>
  )
}

export default HomeView;
