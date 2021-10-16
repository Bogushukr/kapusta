import { Component } from 'react';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

import { reportActions } from '../../Redux/report/';
import { arrMonthRU } from '../../Utils/arrMonth';

import { fetchReportCashInSixMonth, fetchReportCashOutSixMonth} from '../../Redux/report/report-operations';
import { cashOutSixMonth, cashInSixMonth } from '../../Redux/report/report-selectors'

import s from './Summary.module.scss';

const n = Number('01');
console.log(n === 1);

const obj = [
  {
    id: 1,
    month: '01',
    year: '2001',
    value: '16000',
  },
  {
    id: 2,
    month: '02',
    year: '2001',
    value: '16000',
  },
  {
    id: 3,
    month: '03',
    year: '2001',
    value: '16000',
  },
  {
    id: 4,
    month: '04',
    year: '2001',
    value: '16000',
  },
  {
    id: 5,
    month: '05',
    year: '2001',
    value: '16000',
  },
  {
    id: 6,
    month: '06',
    year: '2001',
    value: '16000',
  },
];
// /cash-out/last-six-month
// /cash-in/last-six-month

class Summary extends Component {
  state = {
    cashOutSixMonth: this.props.cashOutSixMonth,
    cashInSixMonth: this.props.cashInSixMonth,
    cashIncome: this.props.cashIncome,
  };
  static defaultProps = {
    cashOutSixMonth: null,
    cashInSixMonth: null
  };

  componentDidMount() {
    console.log('asd211111');
    
    this.props.onfetchReportCashInSixMonth()
    this.props.onfetchReportCashOutSixMonth()
  }
  btn = ()  => {
    console.log(this.props.cashInSixMonth, this.props.cashOutSixMonth);
    
  }

  render() {
    const {cashInSixMonth, cashOutSixMonth} = this.props
    return (
      <>
      <button type="button" onClick={this.btn}></button>
        <div className={s.wrapper}>
          <span className={s.title}>Сводка</span>
          <ul className={s.list}>
            {cashOutSixMonth && cashOutSixMonth.map(({ Total }) => {
              return (
                <li  className={s.item}>
                  {/* <span className={s.text}>{arrMonthRU[Number(month)]}</span>
                  <span className={s.text}>{value}</span> */}
                  <p>Total</p>
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
    // HandleMonthUp: () => dispatch(reportActions.incrementMonthPicker(1)),
    // HandleMonthdown: () => dispatch(reportActions.dectementMonthPicker(1))
    onfetchReportCashInSixMonth: () => dispatch(fetchReportCashInSixMonth()),
    onfetchReportCashOutSixMonth: () => dispatch(fetchReportCashOutSixMonth()),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(Summary);
