import React from 'react';

import Media from 'react-media';

import CurrentDate from '../CurrentDate/CurrentDate';
import ModalBalance from '../ModalBalance/ModalBalance';
import './Balance.scss';

// import { authSelectors } from '../../redux/Selectors';
// import { useSelector } from 'react-redux';

const Balance = () => {
  //   const balance = {};

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
          </div>

          {/* render if balance = 0 */}
          <ModalBalance />

          {matches.small && <CurrentDate />}
          <section className="summary">
            <a href="/" className="consumptionButton">
              расход
            </a>
            <a href="/" className="incomeButton">
              доход
            </a>
          </section>
        </div>
      )}
    </Media>
  );
};

export default Balance;
