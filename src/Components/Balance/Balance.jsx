import React, { useState, useEffect } from 'react';

import Media from 'react-media';
import { useSelector, useDispatch } from 'react-redux';

// import { getTotalBalance } from '../../Redux/auth';
// import expenseActions from '../../Redux/Actions';
import CurrentDate from '../CurrentDate/CurrentDate';
import ReportsNav from '../ReportsNav/ReportsNav';
import BalanceInfo from '../BalanceInfo/BalanceInfo';

import './Balance.scss';
const Balance = () => {
  return (
    <Media
      queries={{
        small: { maxWidth: 767 },
        medium: { minWidth: 768, maxWidth: 1279 },
        large: { minWidth: 1280 },
      }}
    >
      {matches => (
        <div className="balance">
          {matches.small && (
            <>
              <ReportsNav />
              <BalanceInfo />
              <CurrentDate />
            </>
          )}

          {matches.medium && (
            <div className="userBalance">
              <BalanceInfo />
              <ReportsNav />
            </div>
          )}
          {matches.large && (
            <div className="userBalance">
              <BalanceInfo />
              <ReportsNav />
            </div>
          )}
        </div>
      )}
    </Media>
  );
};

export default Balance;
