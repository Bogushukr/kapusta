import { Component } from 'react';

import GeneratorItemReport from '../../Components/GeneratorItemReport';
import GeneratorScheduleReport from '../../Components/GeneratorScheduleReport/';
import MonthPIcker from '../../Components/MonthPIcker';
import Comeback from '../../Components/Comeback';

import Summary from '../../Components/Summary'

// import Balance from '../../Components/Balance';
import Icon from '../../Icons/comeback.svg';
import s from './ReportPage.module.scss';

class ReportPage extends Component {
  state = {
  };
  static defaultProps = {
  };

  render() {
    return (
      <>
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

export default ReportPage;
