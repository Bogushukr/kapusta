import { createAction } from '@reduxjs/toolkit'

const addTransactionRequest = createAction('transactions/addRequest')
const addTransactionSuccess = createAction('transactions/addSuccess')
const addTransactionError = createAction('transactions/addError')

const removeTransactionRequest = createAction('transaction/removeRequest')
const removeTransactionSuccess = createAction('transaction/removeSuccess')
const removeTransactionError = createAction('transaction/removeError')

const selectedDate = createAction('date/select')

const filteredExpenses = createAction('transactions/filtered')

const getAllTransactionsRequest = createAction('transaction/getAllRequest')
const getAllTransactionsSuccess = createAction('transaction/getAllSuccess')
const getAllTransactionsError = createAction('transaction/getAllError')


// eslint-disable-next-line
export default {
    addTransactionRequest,
    addTransactionSuccess,
    addTransactionError,

    removeTransactionRequest,
    removeTransactionSuccess,
    removeTransactionError,

    getAllTransactionsRequest,
    getAllTransactionsSuccess,
    getAllTransactionsError,

    selectedDate,

    filteredExpenses,
}
