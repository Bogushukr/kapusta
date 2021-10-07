import React from 'react';

import './CurrentDate.scss';
// import DatePicker from 'react-datepicker';
export default function CurrentDate() {
  const current = new Date();
  const date = `${current.getDate()}.${
    current.getMonth() + 1
  }.${current.getFullYear()}`;
  return (
    <div className="App">
      <p className="currentDate">{date}</p>
    </div>
  );
}
