import { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios';

import GeneratorItemReport from '../../Components/GeneratorItemReport';
import GeneratorScheduleReport from '../../Components/GeneratorScheduleReport/';
import MonthPIcker from '../../Components/MonthPIcker';
import Comeback from '../../Components/Comeback';

import Summary from '../../Components/Summary'

import {getAllTransactions} from '../../Redux/report/report-operations'
import { testRequest } from '../../Redux/report/report-actions'

// import Balance from '../../Components/Balance';
import Icon from '../../Icons/comeback.svg';
import s from './ReportPage.module.scss';

class ReportPage extends Component {
  constructor(props) {
    super(props);
    this.handleClick = props.handleClick.bind(this);
    this.state = { 
      year: props.year,
      month: props.month,
    };
  }

  render() {
  
    return (
      <>
      <p>{this.state.year}{this.state.month}</p>
      <button type="button" onClick={this.handleClick}/>
        <div className={s.wrapper}>
          <Comeback />
          <Summary />
          <MonthPIcker
          />
          <div className={s.menu}>
            <GeneratorItemReport />
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
    month: state.report.date.currentReportMonth
  }

}

const mapDispatchProps = dispatch => {
  return {
    handleClick: () => dispatch(getAllTransactions())
    // handleClick: () => dispatch(fetchReportCashSixMonth())
    // HandleMonthUp: () => dispatch(reportActions.incrementMonthPicker(1)),
    // HandleMonthdown: () => dispatch(reportActions.dectementMonthPicker(1))
  }
}

export default connect(mapStateToProps, mapDispatchProps)(ReportPage);
