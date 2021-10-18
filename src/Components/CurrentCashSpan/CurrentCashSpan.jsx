import s from './CurrentCashSpan.module.scss';
import { numberWithSpace } from '../../Utils/numberWithSpace';

const ValueCash = ({ value, CashIn }) => (
  <>
    {CashIn && value > 0 && (
      <span className={s.plus}> + {numberWithSpace(value)} грн</span>
    )}
    {CashIn && value < 0 && (
      <span className={s.minus}> - {numberWithSpace(Math.abs(value))} грн</span>
    )}
    {value === 0 && (
      <span className={s.default}>{numberWithSpace(value)} грн</span>
    )}
    {!CashIn && value > 0 && (
      <span className={s.minus}> - {numberWithSpace(value)} грн</span>
    )}
    {!CashIn && value < 0 && (
      <span className={s.plus}> + {numberWithSpace(Math.abs(value))} грн</span>
    )}
  </>
);

export default ValueCash;
