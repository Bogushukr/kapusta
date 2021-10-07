import React from 'react';

import CurrentDate from '../CurrentDate/CurrentDate';
import './Balance.scss';

// import { authSelectors } from '../../redux/Selectors';
// import { useSelector } from 'react-redux';

const Balance = () => {
  //   const balance = {};

  return (
    <div className="balance">
      <h2 className="toReport"> </h2>
      <a href="google.com" className="toReportsLink">
        Перейти к отчетам
      </a>
      <p className="balanceSetting">Баланс:</p>
      <div className="setBalanceForm">
        <input
          type="text"
          className="balanceState"
          placeholder=" 00.00 UAH"
        ></input>
        <button type="sumbit" className="setBalanceButton">
          Подтвердить
        </button>
      </div>
      <div className="modal">
        <span className="balanceModal"></span>
      </div>

      <CurrentDate />

      <section className="Summary">
        <a href="/" className="consumptionButton">
          расход
        </a>
        <a href="/" className="incomeButton">
          доход
        </a>
      </section>
    </div>
  );
};

export default Balance;
