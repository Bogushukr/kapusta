import { Component } from 'react';

import s from './MonthPIcker.module.scss';
import Icons from '../../Icons/IconsPicker.svg';

const arrMonth = [
  'Січень',
  'Лютий',
  'Март',
  'Квітень',
  'Травень',
  'Червень',
  'Липень',
  'Серпень',
  'Вересень',
  'Жовтень',
  'Листопад',
  'Грудень',
];
const MonthPIcker = ({ year, month, onHandleMonthdown, onHandleMonthUp }) => {
  const activeMonth = arrMonth[month];
  return (
    <>
      <div className={s.blockDiv}>
        <span className={s.title}>Текущий период:</span>
        <div className={s.wrapper}>
          <div className={s.prevMth} onClick={onHandleMonthdown}>
            <svg className={s.svg}>
              <use xlinkHref={`${Icons}#icon-leftArrow`} />
            </svg>
          </div>
          <div className={s.curentMth}>
            <span style={{ marginRight: 5 }}>{year}</span>
            <span>{activeMonth}</span>
          </div>
          <div className={s.nextMth} onClick={onHandleMonthUp}>
            <svg className={s.svg}>
              <use xlinkHref={`${Icons}#icon-rightArrow`} />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default MonthPIcker;
