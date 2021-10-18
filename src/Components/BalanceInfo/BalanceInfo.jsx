import React, { useState, useEffect } from 'react';
import './BalanceInfo.scss';
import ModalBalance from '../ModalBalance/ModalBalance';
import { balanceSelectors, balanceOperations } from '../../Redux/balance';
import { useSelector, useDispatch } from 'react-redux';

const BalanceInfo = () => {
  const balance = useSelector(balanceSelectors.getUserBalance);
  const dispatch = useDispatch();
  const [sum, setBalance] = useState('');

  useEffect(() => {
    setBalance(balance);
  }, [balance]);

  const onSubmit = e => {
    e.preventDefault();
    dispatch(balanceOperations.setUserBalance(sum));
  };

  const onHandleChange = e => setBalance(e.currentTarget.value);

  return (
    <div className="balanceInfo">
      <form className="setBalanceForm" onSubmit={onSubmit}>
        <p className="balanceSetting">Баланс:</p>
        <label htmlFor="balance" className="balanceLabel">
          {!balance ? (
            <>
              <input
                type="number"
                name="name"
                pattern="\d+(\.\d{2})?"
                placeholder="00.00 UAH"
                onChange={onHandleChange}
                className="balanceState"
                value={balance}
                required
              />
              {balance <= 0 && <ModalBalance />}
              <button className="setBalanceButton">Подтвердить</button>
            </>
          ) : (
            <>
              {/* <p className="balanceState">{balance.toFixed(2)} UAH</p> */}
              <p className="balanceState balanceStateDisabled">{`${balance.toLocaleString(
                'ru',
              )}.00`}</p>
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
