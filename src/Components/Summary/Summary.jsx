import { connect } from 'react-redux';

import { reportActions } from '../../Redux/report/';
import { arrMonthRU } from '../../Utils/arrMonth'

import s from './Summary.module.scss';

const n = Number('01');
console.log(n === 1);

const obj = [
  {
    id: new Date(),
    month: '01',
    year: '2001',
    value: '16000',
  },
  {
    id: new Date(),
    month: '02',
    year: '2001',
    value: '16000',
  },
  {
    id: new Date(),
    month: '03',
    year: '2001',
    value: '16000',
  },
  {
    id: new Date(),
    month: '04',
    year: '2001',
    value: '16000',
  },
  {
    id: new Date(),
    month: '05',
    year: '2001',
    value: '16000',
  },
  {
    id: new Date(),
    month: '06',
    year: '2001',
    value: '16000',
  },
];

const Summary = () => {
  return (
    <>
      <div className={s.wrapper}>
        
        <span className={s.title}>Сводка</span>
        <ul className={s.list}>
          {obj.map(({ id, month, value }) => {
            return (
              <li
                key={id}
                className={s.item}
              >
                <span className={s.text}>{arrMonthRU[Number(month)]}</span>
                <span  className={s.text}>{value}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    // year: state.report.date.currentReportYear,
    // month: state.report.date.currentReportMonth
  };
};

const mapDispatchProps = dispatch => {
  return {
    // HandleMonthUp: () => dispatch(reportActions.incrementMonthPicker(1)),
    // HandleMonthdown: () => dispatch(reportActions.dectementMonthPicker(1))
  };
};

export default connect(mapStateToProps, mapDispatchProps)(Summary);
