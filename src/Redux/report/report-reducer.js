import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { incrementMonthPicker, dectementMonthPicker } from "./report-actions";
import { incrementData, dectementData } from './report-operations'

const currentYear = new Date().getFullYear()
const currentMonth = new Date().getMonth()


const reportData = { currentReportYear: currentYear, currentReportMonth: currentMonth };

const date = createReducer(reportData, {
    [incrementMonthPicker]: incrementData,
    [dectementMonthPicker]: dectementData

});

export default combineReducers({
  date: date,
});
