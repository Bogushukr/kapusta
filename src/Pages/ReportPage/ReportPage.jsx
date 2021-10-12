import { Component } from 'react';

import GeneratorItemReport from '../../Components/GeneratorItemReport';
import GeneratorScheduleReport from '../../Components/GeneratorScheduleReport/';
import MonthPIcker from '../../Components/MonthPIcker';
import Comeback from '../../Components/Comeback';

// import Balance from '../../Components/Balance';
import Icon from '../../Icons/comeback.svg';
import s from './ReportPage.module.scss';

class ReportPage extends Component {
  state = {
    month: this.props.month,
    year: this.props.year,
  };
  static defaultProps = {
    month: 0,
    year: 2021,
  };

  HandleMonthUp = () => {
    if (this.state.month === 11) {
      this.setState(prevState => {
        return {
          month: 0,
          year: prevState.year + 1,
        };
      });
      return;
    }
    this.setState(prevState => {
      return {
        month: prevState.month + 1,
      };
    });
  };
  HandleMonthdown = () => {
    if (this.state.month === 0) {
      this.setState(prevState => {
        return {
          month: 11,
          year: prevState.year - 1,
        };
      });
      return;
    }
    this.setState(prevState => {
      return {
        month: prevState.month - 1,
      };
    });
  };

  render() {
    const { month, year } = this.state;
    return (
      <>
        <div className={s.wrapper}>
          <Comeback />
          <MonthPIcker
            year={year}
            month={month}
            onHandleMonthdown={this.HandleMonthdown}
            onHandleMonthUp={this.HandleMonthUp}
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
