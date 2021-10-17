import { Component } from 'react';
import { connect } from 'react-redux'

import GeneratorItemReport from '../../Components/GeneratorItemReport';
import GeneratorScheduleReport from '../../Components/GeneratorScheduleReport/';
import MonthPIcker from '../../Components/MonthPIcker';
import Comeback from '../../Components/Comeback';
import PickerExpensesIncome from '../../Components/PickerExpensesIncome'

import {fetchReportCashOutSixMonth, fetchReportCashInSixMonth, fetchReportCashInOneMonth, fetchReportCashOutOneMonth } from '../../Redux/report/report-operations'

import Summary from '../../Components/Summary'
// import Balance from '../../Components/Balance';
import Icon from '../../Icons/comeback.svg';
import s from './ReportPage.module.scss';

class ReportPage extends Component {
  constructor(props) {
    super(props);
    this.handleClick = props.handleClick.bind(this);
  }

  render() {
    
  
    return (
      <>
      <button type="button" onClick={this.handleClick}/>
        <div className={s.wrapper}>
        <Summary cashIncome={true}/>
        {/* <Summary cashIncome={false}/> */}
          <Comeback />
          <MonthPIcker />
          <div className={s.menu}>
          <PickerExpensesIncome />
            <GeneratorItemReport/>
          </div>
          <div className={s.timetable}>
            <GeneratorScheduleReport />
          </div>
        </div>
      </>
    );
  }
}



const mapStateToProps = state => {
  return {
    year: state.report.date.currentReportYear,
    month: state.report.date.currentReportMonth,
    cashIncome: state.report.cashIncomeReducer,
  };
};

const mapDispatchProps = dispatch => {
  return {
    handleClick: () => dispatch(fetchReportCashOutSixMonth())
  }
}

export default connect(mapStateToProps, mapDispatchProps)(ReportPage);
