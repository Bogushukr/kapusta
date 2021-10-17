import s from './CurrentCashSpan.module.scss'
import { numberWithSpace } from '../../Utils/numberWithSpace'

const ValueCash = ({ value, CashIn}) =>  (
    <>
      {value >= 0 && CashIn && <span className={s.plus }>+ {numberWithSpace(value)} грн</span>}
      {value >= 0 && !CashIn && <span className={s.minus}>- {numberWithSpace(value)} грн</span>}
      {value === 0 && <span className={s.default}>{numberWithSpace(value)} грн</span>}
      {value <= 0 && CashIn && <span className={s.minus}>+ {numberWithSpace(value)} грн</span>}
      {value <= 0 && CashIn && <span className={s.plus}>- {numberWithSpace(value)} грн</span>}
    </>
  );

export default ValueCash
