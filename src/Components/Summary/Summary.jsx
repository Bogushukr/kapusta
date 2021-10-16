import { Component } from 'react';
import { connect } from 'react-redux';

import { arrMonthRU } from '../../Utils/arrMonth';

import { fetchReportCashInSixMonth, fetchReportCashOutSixMonth} from '../../Redux/report/report-operations';
import { cashOutSixMonth, cashInSixMonth } from '../../Redux/report/report-selectors'

import s from './Summary.module.scss';

class Summary extends Component {
  state = {
    cashIncome: this.props.cashIncome,
  };
  static defaultProps = {
    cashOutSixMonth: null,
    cashInSixMonth: null
  };

  componentDidMount() {
    
    this.props.onfetchReportCashInSixMonth()
    this.props.onfetchReportCashOutSixMonth()
  }
  btn = ()  => {
    console.log(this.props.cashInSixMonth, this.props.cashOutSixMonth);
    
  }

  render() {
    const {cashInSixMonth, cashOutSixMonth} = this.props
    const {cashIncome} = this.state
    
    return (
      <>
      <button type="button" onClick={this.btn}></button>
        <div className={s.wrapper}>
          <span className={s.title}>Сводка</span>
          <ul className={s.list}>
            {cashOutSixMonth && !cashIncome && cashOutSixMonth.map(({ Total: value, _id: {month} }) => {
              return (
                <li key={month}   className={s.item}>
                  <span className={s.text}>{arrMonthRU[Number(month)]}</span>
                  <span className={s.text}>{value}</span>
                
                </li>
              );
            })}
            {cashOutSixMonth && cashIncome && cashInSixMonth.map(({ Total: value, _id: {month} }) => {
              return (
                <li key={month}  className={s.item}>
                  <span className={s.text}>{arrMonthRU[Number(month)]}</span>
                  <span className={s.text}>{value}</span>
                
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
    cashInSixMonth: cashInSixMonth(state)
  };
};

const mapDispatchProps = dispatch => {
  return {
    onfetchReportCashInSixMonth: () => dispatch(fetchReportCashInSixMonth()),
    onfetchReportCashOutSixMonth: () => dispatch(fetchReportCashOutSixMonth()),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(Summary);
