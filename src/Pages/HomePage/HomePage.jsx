import React from 'react'
import { useLocation } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import Balance from '../../Components/Balance'
import SectionExpense from '../../Sections/SectionExpense/SectionExpense'
import SectionIncome from '../../Sections/SectionIncome/SectionIncome'

const HomeView = () => {
  const path = useLocation().pathname
  return (
    <>
      <Balance />
      <div className="summary">
            <NavLink to="/home" className="consumptionButton">Расход</NavLink>
            <NavLink to="/home/income" exact className="incomeButton">Доход</NavLink>
      </div>
      <div>{`${path}`==='/home/income' ? <SectionIncome /> : <SectionExpense />} </div>
    </>
  )
};

export default HomeView;
