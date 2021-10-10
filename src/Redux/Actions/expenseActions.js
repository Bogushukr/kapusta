import { createAction } from '@reduxjs/toolkit'

const addExpenseRequest = createAction('expenses/addRequest')
const addExpenseSuccess = createAction('expenses/addSuccess')
const addExpenseError = createAction('expenses/addError')

// const fetchTasksRequest = createAction('tasks/fetchRequest')
// const fetchTasksSuccess = createAction('tasks/fetchSuccess')
// const fetchTasksError = createAction('tasks/fetchError')

const removeExpenseRequest = createAction('expenses/removeRequest')
const removeExpenseSuccess = createAction('expenses/removeSuccess')
const removeExpenseError = createAction('expenses/removeError')

// const toggleCompletedRequest = createAction('tasks/toggleCompletedRequest')
// const toggleCompletedSuccess = createAction('tasks/toggleCompletedSuccess')
// const toggleCompletedError = createAction('tasks/toggleCompletedError')

// const changeFilter = createAction('tasks/changeFilter')
// eslint-disable-next-line
export default {
    addExpenseRequest,
    addExpenseSuccess,
    addExpenseError,
//   fetchTasksRequest,
//   fetchTasksSuccess,
//   fetchTasksError,
    removeExpenseRequest,
    removeExpenseSuccess,
    removeExpenseError,
//   toggleCompletedRequest,
//   toggleCompletedSuccess,
//   toggleCompletedError,
//   changeFilter,
}
