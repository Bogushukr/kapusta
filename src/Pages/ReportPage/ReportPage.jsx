import { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios';

import GeneratorItemReport from '../../Components/GeneratorItemReport';
import GeneratorScheduleReport from '../../Components/GeneratorScheduleReport/';
import MonthPIcker from '../../Components/MonthPIcker';
import Comeback from '../../Components/Comeback';
import PickerExpensesIncome from '../../Components/PickerExpensesIncome'

import Summary from '../../Components/Summary'

import {fetchReportCashOneInMonth, fetchReportCashOutOneMonth} from '../../Redux/report/report-operations'
import { testRequest } from '../../Redux/report/report-actions'

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



const mapDispatchProps = dispatch => {
  return {
    handleClick: () => dispatch(fetchReportCashOutOneMonth())
    // handleClick: () => dispatch(fetchReportCashSixMonth())
    // HandleMonthUp: () => dispatch(reportActions.incrementMonthPicker(1)),
    // HandleMonthdown: () => dispatch(reportActions.dectementMonthPicker(1))
  }
}

export default connect(null, mapDispatchProps)(ReportPage);
