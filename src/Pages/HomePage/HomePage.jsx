import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'

import Balance from '../../Components/Balance'
import SectionExpense from '../../Sections/SectionExpense/SectionExpense'
import SectionIncome from '../../Sections/SectionIncome/SectionIncome'

import styles from './HomePage.module.css'

const HomeView = () => {
  const path = useLocation().pathname
  return (
    <>
      <MediaQuery maxWidth={767}>
        <div>{`${path}`==='/home/income' ? <SectionIncome /> : <></>}</div>
        <div>{`${path}`==='/home/expense' ? <SectionExpense /> : <></>}</div>
        <div>{`${path}`==='/home' 
            ? <div>
              <Balance />
              <div className={styles.summaryContainer}>
                <div className="summary">
                      <Link to="/home/expense" className="consumptionButton">Расход</Link>
                      <Link to="/home/income" className="incomeButton">Доход</Link>
                </div>
              </div>
            </div> 
            : <></>}
        </div>
      </MediaQuery>    
      <MediaQuery minWidth={768}>
        <Balance />
        <div className={styles.summaryContainer}>
          <div className="summary">
            <Link to="/home/expense"
                  className={`${path}`==='/home/expense'
                    ? 'consumptionButton consumptionButtonActive'
                    : 'consumptionButton'}>Расход</Link>
            <Link to="/home/income"
                  className={`${path}`==='/home/income'
                    ? 'incomeButton incomeButtonActive'
                    : 'incomeButton'}>Доход</Link>
          </div>
          <div>{`${path}`==='/home/income' ? <SectionIncome /> : <SectionExpense />} </div>
        </div>
      </MediaQuery>
    </>
  )
}

export default HomeView;
