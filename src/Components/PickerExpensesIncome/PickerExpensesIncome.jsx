import { connect } from 'react-redux';

import { PickerCash } from '../../Redux/report/report-actions';

import s from './PickerExpensesIncome.module.scss';
import Icons from '../../Icons/IconsPicker.svg';

const PickerExpensesIncome = ({cashIncome, HandleСash}) => {
  console.log(cashIncome);
  
  return (
    <>
      <div className={s.blockDiv}>
        <div className={s.wrapper}>
          <div
            className={s.prevMth}
            onClick={HandleСash}
          >
            <svg className={s.svg}>
              <use xlinkHref={`${Icons}#icon-leftArrow`} />
            </svg>
          </div>
          <div className={s.curentMth}>
            {cashIncome ?  <span>Доходы</span> : <span>Расходы</span>}
          </div>
          <div
            className={s.nextMth}
            onClick={HandleСash}
          >
            <svg className={s.svg}>
              <use xlinkHref={`${Icons}#icon-rightArrow`} />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    cashIncome: state.report.cashIncomeReducer,
  };
};

const mapDispatchProps = dispatch => {
  return {
    HandleСash: () => dispatch(PickerCash()),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(PickerExpensesIncome);
