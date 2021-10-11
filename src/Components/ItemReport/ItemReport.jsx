import PropTypes from 'prop-types';

import Icons from '../../Icons/IconsReport.svg';
import s from './ItemReport.module.scss';

const ItemReport = ({ chapter, value, text, idx, idxA, setActiveIdx }) => {
  let optionClasses = [s.svg];
  if (idx === idxA) {
    optionClasses.push(s.svg__action);
  }

  return (
    <button
      className={s.btn}
      onClick={() => {
        setActiveIdx(idx);
      }}
    >
      <span className={s.span}>{value}</span>
      <svg className={optionClasses.join(' ')}>
        <use xlinkHref={`${Icons}#icon-${chapter}`} />
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
  chapter: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string,
  idx: PropTypes.number.isRequired,
  idxA: PropTypes.number.isRequired,
  setActiveIdx: PropTypes.func.isRequired,
};

export default ItemReport;
