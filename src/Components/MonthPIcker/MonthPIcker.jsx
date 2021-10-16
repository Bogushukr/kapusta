import { connect } from 'react-redux';

import { reportActions } from '../../Redux/report/';
import {
  fetchReportCashInOneMonth,
  fetchReportCashOutOneMonth,
} from '../../Redux/report/report-operations';

import s from './MonthPIcker.module.scss';
import Icons from '../../Icons/IconsPicker.svg';

import { arrMonthRU } from '../../Utils/arrMonth';

const MonthPIcker = ({
  year,
  month,
  HandleMonthdown,
  HandleMonthUp,
  fetchReportCashIn,
  fetchReportCashOut,
  cashIncome,
}) => {
  const activeMonth = arrMonthRU[month];
  

  const fetchReport = () => {
    if (cashIncome) {
      fetchReportCashIn({ year, month });
    } else {
      fetchReportCashOut({ year, month });
    }
  };
  return (
    <>
      <div className={s.blockDiv}>
        <span className={s.title}>Текущий период:</span>
        <div className={s.wrapper}>
          <div
            className={s.prevMth}
            onClick={() => {
              HandleMonthdown();
              fetchReport();
            }}
          >
            <svg className={s.svg}>
              <use xlinkHref={`${Icons}#icon-leftArrow`} />
            </svg>
          </div>
          <div className={s.curentMth}>
            <span style={{ marginRight: 5 }}>{year}</span>
            <span>{activeMonth}</span>
          </div>
          <div
            className={s.nextMth}
            onClick={() => {
              HandleMonthUp();
              fetchReport();
            }}
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
    year: state.report.date.currentReportYear,
    month: state.report.date.currentReportMonth,
    cashIncome: state.report.cashIncomeReducer,
  };
};

const mapDispatchProps = dispatch => {
  return {
    HandleMonthUp: () => dispatch(reportActions.incrementMonthPicker(1)),
    HandleMonthdown: () => dispatch(reportActions.dectementMonthPicker(1)),
    fetchReportCashIn: props => dispatch(fetchReportCashInOneMonth(props)),
    fetchReportCashOut: props => dispatch(fetchReportCashOutOneMonth(props)),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(MonthPIcker);
