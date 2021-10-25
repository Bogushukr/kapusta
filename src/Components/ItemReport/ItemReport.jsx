import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icons from '../../Icons/IconsReport.svg';
import s from './ItemReport.module.scss';
import { numberWithSpace } from '../../Utils/numberWithSpace';

import {
  activeSvgCashInPicker,
  activeSvgCashOutPicker,
} from '../../Redux/report/report-actions';

const ItemReport = ({ chapter, value, text, idx, idxA, CashIn, activeSvgCashIn, activeSvgCashOut  }) => {
  const arrSvg = [
    'Транспорт',
    'Продукты',
    'Здоровье',
    'Алкоголь',
    'Развлечения',
    'Всё для дома',
    'Техника',
    'Коммуналка, связь',
    'Спорт, хобби',
    'Образование',
    'Прочее',
    'ЗП',
    'Доп. доход',
  ];
  const svgIcon = arrSvg.indexOf(chapter);

  if (svgIcon === -1) {
    console.log(`${chapter} = ${svgIcon}`)
    console.log(arrSvg)
  }
  let optionClasses = [s.svg];
  if (idx === idxA) {
    optionClasses.push(s.svg__action);
  }
  return (
    <button
      className={s.btn}
      onClick={() => {
        CashIn ? activeSvgCashIn(idx) : activeSvgCashOut(idx)
      }}
    >
      <span className={s.span}>{numberWithSpace(value)}</span>
      <svg className={optionClasses.join(' ')}>
        <use xlinkHref={`${Icons}#icon-${svgIcon !== -1 ? chapter : 'defaultSvg'}`} />
      </svg>
      <span className={s.span}>{text}</span>
    </button>
  );
};

ItemReport.defaultProps = {
  value: '0.00',
  chapter: 'defaultSvg',
};
ItemReport.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number,
  idx: PropTypes.number.isRequired,
  idxA: PropTypes.number.isRequired,
  CashIn: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    year: state.report.date.currentReportYear,
    month: state.report.date.currentReportMonth,
    cashIncome: state.report.cashIncomeReducer,
    arrCashOut: state.report.cashOutOneMonth,
    arrCashIn: state.report.cashInOneMonth,
  };
};

const mapDispatchProps = dispatch => {
  return {
    activeSvgCashIn: props => dispatch(activeSvgCashInPicker(props)),
    activeSvgCashOut: props => dispatch(activeSvgCashOutPicker(props)),
  };
};
export default connect(mapStateToProps, mapDispatchProps)(ItemReport);