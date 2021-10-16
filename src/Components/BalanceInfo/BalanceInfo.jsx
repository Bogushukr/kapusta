import React, { useState, useEffect } from 'react';
import './BalanceInfo.scss';
import ModalBalance from '../ModalBalance/ModalBalance';
import { authSelectors, authOperations } from '../../Redux/auth';
import { useSelector, useDispatch } from 'react-redux';

const BalanceInfo = () => {
  const balance = 10000;
  // const balance = useSelector(authSelectors.getUserBalance);

  // const dispatch = useDispatch();
  // const [sum, setBalance] = useState('');
  // const onHandleChange = e => setBalance(e.currentTarget.value);

  // useEffect(() => {
  //   setBalance(balance);
  // }, [balance]);
  // const onSubmit = event => {
  //   event.preventDefault();
  //   dispatch(authOperations.setBalance(sum));
  // };

  return (
    <div className="balanceInfo">
      <form className="setBalanceForm">
        {/* <form className="setBalanceForm" onSubmit={onSubmit}> */}

        <p className="balanceSetting">Баланс:</p>
        <label htmlFor="balance" className="balanceLabel">
          {balance === 0 ? (
            <>
              <input
                type="number"
                name="name"
                pattern="\d+(\.\d{2})?"
                placeholder="00.00 UAH"
                // onChange={onHandleChange}
                className="balanceState"
              />
              {balance <= 0 && <ModalBalance />}
              <button className="setBalanceButton">Подтвердить</button>
            </>
          ) : (
            <>
              {/* <p className="balanceState">{balance.toFixed(2)} UAH</p> */}
              <p className="balanceState balanceStateDisabled">
                {balance}.00 UAH
              </p>
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
