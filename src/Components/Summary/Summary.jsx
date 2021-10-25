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

import { fixBagBackendFixMonth } from '../../Utils/fixBagBackendFixMonth';

import s from './Summary.module.scss';

class Summary extends Component {
  state = {
    cashIncome: this.props.cashIncome,
    arrOut: [],
    arrIn: [],
  };
  static defaultProps = {
    cashOutSixMonth: null,
    cashInSixMonth: null,
  };

  componentDidMount() {
    this.props.onfetchReportCashInSixMonth();
    this.props.onfetchReportCashOutSixMonth();
  }

  componentDidUpdate(prevProps, prevState) {
    const { cashOutSixMonth, cashInSixMonth } = this.props;
    if (cashOutSixMonth !== prevProps.cashOutSixMonth) {
      this.setState({
        arrOut: fixBagBackendFixMonth(cashOutSixMonth),
      });
    }
    if (cashInSixMonth !== prevProps.cashInSixMonth) {
      this.setState({
        arrIn: fixBagBackendFixMonth(cashInSixMonth),
      });
    }
  }

  render() {
    const { arrIn, arrOut } = this.state;

    const { cashIncome, cashInSixMonth, cashOutSixMonth } = this.props;

    return (
      <>
        <div className={s.wrapper}>
          <span className={s.title}>Сводка</span>
          <ul className={s.list}>
            {cashOutSixMonth &&
              !cashIncome &&
              arrOut.map(({ Total: value, _id: { month } }) => {
                return (
                  <li key={month} className={s.item}>
                    <span className={s.text}>
                      {arrMonthRU[Number(month - 1)]}
                    </span>
                    <span className={s.text}>{numberWithSpace(value)}</span>
                  </li>
                );
              })}
            {cashInSixMonth &&
              cashIncome &&
              arrIn.map(({ Total: value, _id: { month } }) => {
                return (
                  <li key={month} className={s.item}>
                    <span className={s.text}>
                      {arrMonthRU[Number(month - 1)]}
                    </span>
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
