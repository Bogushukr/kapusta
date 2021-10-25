import React, { useEffect } from 'react';
import './BalanceInfo.scss';
import ModalBalance from '../ModalBalance/ModalBalance';
import { balanceOperations } from '../../Redux/balance';
import { authSelectors, authOperations } from '../../Redux/auth';
import { useSelector, useDispatch } from 'react-redux';

const BalanceInfo = () => {
  const currentBalance = useSelector(authSelectors.getUserBalance) || 0;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser);
  }, [dispatch]);

  const onSubmit = e => {
    e.preventDefault();
    const newBalance = e.target.balance.value.split(' ')[0];
    dispatch(balanceOperations.setUserBalance(newBalance));
  };

  return (
    <div className="balanceInfo">
      <form className="setBalanceForm" onSubmit={onSubmit}>
        <p className="balanceSetting">Баланс:</p>
        <label htmlFor="balance" className="balanceLabel">
          {currentBalance === 0 ? (
            <>
              <input
                type="number"
                name="balance"
                className="balanceState"
                placeholder={`${currentBalance}.00 UAH`}
                required
              />
              {currentBalance <= 0 && <ModalBalance />}
              <button className="setBalanceButton" type="submit">
                Подтвердить
              </button>
            </>
          ) : (
            <>
              <p className="balanceState balanceStateDisabled">{`${currentBalance.toLocaleString(
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
