import React from 'react';
import Media from 'react-media';

// import ModalBalance from '../ModalBalance/ModalBalance';
const BalanceInfo = () => {
  const balance = 0;
  return (
    <div className="balanceInfo">
      <form className="setBalanceForm">
        <p className="balanceSetting">Баланс:</p>
        <label htmlFor="balance" className="balanceLabel">
          {balance === 0 ? (
            <>
              <input
                type="text"
                name="name"
                placeholder="00.00 UAH"
                // onChange={onHandleChange}
                className="balanceState"
              />
              <button className="setBalanceButton">Подтвердить</button>
            </>
          ) : (
            <>
              <p className="balanceState">{balance.toFixed(2)} UAH</p>
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
