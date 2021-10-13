import React, { useState, useEffect } from 'react';

import Media from 'react-media';
import { useSelector, useDispatch } from 'react-redux';

// import { getTotalBalance } from '../../Redux/auth';
// import expenseActions from '../../Redux/Actions';
import CurrentDate from '../CurrentDate/CurrentDate';
import ModalBalance from '../ModalBalance/ModalBalance';
import './Balance.scss';

const Balance = () => {
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
    <Media
      queries={{
        small: { maxWidth: 767 },
        medium: { minWidth: 768, maxWidth: 1279 },
        large: { minWidth: 1280 },
      }}
    >
      {matches => (
        <div className="balance wrapper">
          {matches.small && (
            <h2 className="toReport">
              <a href="/" className="toReportsLink">
                Перейти к отчетам
              </a>
            </h2>
          )}

          <div className="balanceInfo">
            <div>
              {/* <form onSubmit={onhandleSubmit} className="setBalanceForm"></form> */}
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
            {matches.medium && (
              <h2 className="toReport">
                <a href="/" className="toReportsLink">
                  Перейти к отчетам
                </a>
              </h2>
            )}
            {matches.large && (
              <h2 className="toReport">
                <a href="/" className="toReportsLink">
                  Перейти к отчетам
                </a>
              </h2>
            )}
          </div>

          {balance <= 0 && <ModalBalance />}

          {matches.small && <CurrentDate />}
          {/* <section className="summary">
            <a href="/" className="consumptionButton">
              расход
            </a>
            <a href="/" className="incomeButton">
              доход
            </a>
          </section> */}
          {matches.medium && <CurrentDate />}
          {matches.large && <CurrentDate />}
        </div>
      )}
    </Media>
  );
};

export default Balance;
