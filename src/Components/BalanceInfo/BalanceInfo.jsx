import React, { useState, useEffect } from 'react';
import './BalanceInfo.scss';
import ModalBalance from '../ModalBalance/ModalBalance';
import { balanceOperations } from '../../Redux/balance';
import { authSelectors, authOperations } from '../../Redux/auth';
import { useSelector, useDispatch } from 'react-redux';

const BalanceInfo = () => {
  const currentBalance = useSelector(authSelectors.getUserBalance) || 0;

  const dispatch = useDispatch();
  const [sum, setSum] = useState('');

  useEffect(() => {
    setSum(currentBalance);
  }, [currentBalance]);

  const onSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.setUserBalance(sum));
  };

  const onHandleChange = e => setSum(e.currentTarget.value);

  return (
    <div className="balanceInfo">
      <form className="setBalanceForm" onSubmit={onSubmit}>
        <p className="balanceSetting">Баланс:</p>
        <label htmlFor="balance" className="balanceLabel">
          {sum === 0 ? (
            <>
              <input
                type="number"
                name="name"
                pattern="\d+(\.\d{2})?"
                placeholder="00.00 UAH"
                onChange={onHandleChange}
                className="balanceState"
                value={sum}
                required
              />
              {sum <= 0 && <ModalBalance />}
              <button className="setBalanceButton" type="submit">
                Подтвердить
              </button>
            </>
          ) : (
            <>
              {/* <p className="balanceState">{balance.toFixed(2)} UAH</p> */}
              <p className="balanceState balanceStateDisabled">{`${sum.toLocaleString(
                'ru',
              )}.00 UAH`}</p>
              <button className="setBalanceButtonDisabled" disabled>
                Подтвердить
              </button>
            </>
          )}
        </label>
      </form>
    </div>
  );
};
export default BalanceInfo;
