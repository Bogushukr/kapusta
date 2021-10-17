import PropTypes from 'prop-types';

import Icons from '../../Icons/IconsReport.svg';
import s from './ItemReport.module.scss';
import { numberWithSpace } from '../../Utils/numberWithSpace';

const ItemReport = ({ chapter, value, text, idx, idxA, setActiveIdx }) => {
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
  ];
  const svgIcon = arrSvg.indexOf(chapter);


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
  setActiveIdx: PropTypes.func.isRequired,
};

export default ItemReport;
