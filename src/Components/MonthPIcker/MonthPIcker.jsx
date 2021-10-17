import { connect } from 'react-redux';

import { reportActions } from '../../Redux/report/';

import s from './MonthPIcker.module.scss';
import Icons from '../../Icons/IconsPicker.svg';

import { arrMonthRU } from '../../Utils/arrMonth';

const MonthPIcker = ({
  year,
  month,
  HandleMonthdown,
  HandleMonthUp,
}) => {
  const activeMonth = arrMonthRU[month];
  return (
    <>
      <div className={s.blockDiv}>
        <span className={s.title}>Текущий период:</span>
        <div className={s.wrapper}>
          <div
            className={s.prevMth}
            onClick={
              HandleMonthdown
            }
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
            onClick={
              HandleMonthUp
            }
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
  };
};

const mapDispatchProps = dispatch => {
  return {
    HandleMonthUp: () => dispatch(reportActions.incrementMonthPicker(1)),
    HandleMonthdown: () => dispatch(reportActions.dectementMonthPicker(1)),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(MonthPIcker);
