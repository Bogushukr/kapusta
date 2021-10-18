import { createAction } from '@reduxjs/toolkit'

const addExpenseRequest = createAction('expenses/addRequest')
const addExpenseSuccess = createAction('expenses/addSuccess')
const addExpenseError = createAction('expenses/addError')

const removeExpenseRequest = createAction('expenses/removeRequest')
const removeExpenseSuccess = createAction('expenses/removeSuccess')
const removeExpenseError = createAction('expenses/removeError')

const selectedDateRequest = createAction('date/selectRequest')
const selectedDateSuccess = createAction('date/selectSuccess')
const selectedDateError = createAction('date/selectError')

const selectedDate = createAction('date/select')

// const fetchTasksRequest = createAction('tasks/fetchRequest')
// const fetchTasksSuccess = createAction('tasks/fetchSuccess')
// const fetchTasksError = createAction('tasks/fetchError')

// const toggleCompletedRequest = createAction('tasks/toggleCompletedRequest')
// const toggleCompletedSuccess = createAction('tasks/toggleCompletedSuccess')
// const toggleCompletedError = createAction('tasks/toggleCompletedError')

// const changeFilter = createAction('tasks/changeFilter')

// eslint-disable-next-line
export default {
    addExpenseRequest,
    addExpenseSuccess,
    addExpenseError,

    removeExpenseRequest,
    removeExpenseSuccess,
    removeExpenseError,

    selectedDateRequest,
    selectedDateSuccess,
    selectedDateError,

    selectedDate,

//   toggleCompletedRequest,
//   toggleCompletedSuccess,
//   toggleCompletedError,
//   changeFilter,
}
