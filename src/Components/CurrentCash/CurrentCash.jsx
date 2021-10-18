import { Component } from 'react';
import { connect } from 'react-redux';

import ValueCash from '../CurrentCashSpan'
import { numberWithSpace } from '../../Utils/numberWithSpace';

import s from './CurrentCash.module.scss';

const CurrentCash = ({ cashIn, cashOut, cashInReserve, cashOutReserve }) => {
  return (
    <>
    <div className={s.wrapper}>
      <div className={s.div}>
        <span className={s.text}>Расходы:</span>
        <ValueCash value={cashOut} CashIn={false}/>
      </div>
      <div className={s.div}>
        <span className={s.text}>Доходы:</span>
         <ValueCash className={s.value} value={cashIn} CashIn={true}/>
        <span></span>
      </div>

    </div>
    </>
  );
};

CurrentCash.defaultProps = {
  cashIn: 0,
  cashOut: 0,
  cashInReserve: 0,
  cashOutReserve: 0,
};

const mapStateToProps = state => {
  return {
    cashIn: state.report.cashOutOneMonth.cashInMonth,
    cashOut: state.report.cashOutOneMonth.cashOutMonth,
    cashInReserve: state.report.cashInOneMonth.cashInMonth,
    cashOutReserve: state.report.cashInOneMonth.cashOutMonth,
  };
};

export default connect(mapStateToProps)(CurrentCash);
