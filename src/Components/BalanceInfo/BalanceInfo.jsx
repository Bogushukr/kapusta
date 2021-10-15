import React, { useState } from 'react';
import './BalanceInfo.scss';
import ModalBalance from '../ModalBalance/ModalBalance';
import { authSelectors, authOperations } from '../../Redux/auth';
import { useSelector, useDispatch, useEffect } from 'react-redux';

const BalanceInfo = () => {
  const balance = 0;
  // const balance = useSelector(getTotalBalance);

  // const dispatch = useDispatch();
  // const [sum, setSum] = useState('');

  // const onHandleChange = event => setSum(event.currentTarget.value);
  // useEffect(() => {
  //   setSum(balance);
  // });

  // const onhandleSubmit = event => {
  //   event.preventDefault();
  //   console.log(balance);
  // };
  return (
    <div className="balanceInfo">
      {/* <form className="setBalanceForm" onSubmit={onSubmit}> */}
      <form className="setBalanceForm" onSubmit>
        <p className="balanceSetting">Баланс:</p>
        <label htmlFor="balance" className="balanceLabel">
          {balance === 0 ? (
            <>
              <input
                type="number"
                name="name"
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
              <p className="balanceState">{`${balance}`} UAH</p>
              <button className="setBalanceButton" disabled>
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
