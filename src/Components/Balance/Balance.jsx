import React, { useState, useEffect } from 'react';

import Media from 'react-media';
import { useSelector, useDispatch } from 'react-redux';

// import { getTotalBalance } from '../../Redux/auth';
// import expenseActions from '../../Redux/Actions';
import CurrentDate from '../CurrentDate/CurrentDate';
import ModalBalance from '../ModalBalance/ModalBalance';
import ReportsNav from '../ReportsNav/ReportsNav';
import BalanceInfo from '../BalanceInfo/BalanceInfo';

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
            <div classname="balanceWrapper">
              <ReportsNav />
              <BalanceInfo />
            </div>
          )}

          {matches.medium && (
            <div classname="balanceWrapper">
              <BalanceInfo />
              <ReportsNav />
            </div>
          )}
          {matches.large && (
            <div classname="balanceWrapper">
              <BalanceInfo />
              <ReportsNav />
            </div>
          )}

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
