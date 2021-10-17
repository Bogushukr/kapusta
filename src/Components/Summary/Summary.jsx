import { Component } from 'react';
import { connect } from 'react-redux';

import { arrMonthRU } from '../../Utils/arrMonth';
import { numberWithSpace } from '../../Utils/numberWithSpace';

import {
  fetchReportCashInSixMonth,
  fetchReportCashOutSixMonth,
} from '../../Redux/report/report-operations';
import {
  cashOutSixMonth,
  cashInSixMonth,
} from '../../Redux/report/report-selectors';

import s from './Summary.module.scss';

class Summary extends Component {
  state = {
    cashIncome: this.props.cashIncome,
    cashOutSixMonth: this.props.cashOutSixMonth,
    cashInSixMonth: this.props.cashInSixMonth,
  };
  static defaultProps = {
    cashOutSixMonth: null,
    cashInSixMonth: null,
  };

  componentDidMount() {
    this.props.onfetchReportCashInSixMonth();
    this.props.onfetchReportCashOutSixMonth();
  }

  render() {
    // const {cashInSixMonth, cashOutSixMonth} = this.props
    const { cashIncome, cashInSixMonth, cashOutSixMonth } = this.props;

    return (
      <>
        <div className={s.wrapper}>
          <span className={s.title}>Сводка</span>
          <ul className={s.list}>
            {cashOutSixMonth &&
              !cashIncome &&
              cashOutSixMonth.map(({ Total: value, _id: { month } }) => {
                return (
                  <li key={month} className={s.item}>
                    <span className={s.text}>{arrMonthRU[Number(month)]}</span>
                    <span className={s.text}>{numberWithSpace(value)}</span>
                  </li>
                );
              })}
            {cashInSixMonth &&
              cashIncome &&
              cashInSixMonth.map(({ Total: value, _id: { month } }) => {
                return (
                  <li key={month} className={s.item}>
                    <span className={s.text}>{arrMonthRU[Number(month)]}</span>
                    <span className={s.text}>{numberWithSpace(value)}</span>
                  </li>
                );
              })}
          </ul>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    cashOutSixMonth: cashOutSixMonth(state),
    cashInSixMonth: cashInSixMonth(state),
  };
};

const mapDispatchProps = dispatch => {
  return {
    onfetchReportCashInSixMonth: () => dispatch(fetchReportCashInSixMonth()),
    onfetchReportCashOutSixMonth: () => dispatch(fetchReportCashOutSixMonth()),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(Summary);
