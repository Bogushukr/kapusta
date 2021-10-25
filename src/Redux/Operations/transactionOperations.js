import axios from 'axios'

import transactionActions from '../Actions/transactionActions'

const addTransaction = (transaction, token) => async (dispatch) => {
  console.log('token: ', token)
    dispatch(transactionActions.addTransactionRequest())
    await axios
      .post('/transactions',  transaction, {headers: {'Authorization': `Bearer ${token}`},})
      .then(({ data }) => {
        dispatch(transactionActions.addTransactionSuccess(data))})
      .catch(error => dispatch(transactionActions.addTransactionError(error)))
  }

const deleteTransaction = id => async (dispatch) => {
  dispatch(transactionActions.removeTransactionRequest())
  console.log('transaction id: ', id)
  await axios
    .delete(`/transactions/${id}`)
    .then(({data}) => dispatch(transactionActions.removeTransactionSuccess(data)))
    .catch(error => {
      console.log('error: ', error)
      dispatch(transactionActions.removeTransactionError(error))})
    .finally(() => dispatch(transactionActions.getAllTransactionsSuccess()))
}

const getAllTransactions = () => async(dispatch) => {
  dispatch(transactionActions.getAllTransactionsRequest())
  await axios.get('/transactions')
  .then(({data}) => dispatch(transactionActions.getAllTransactionsSuccess(data)))
  .catch(error => {
    console.log('error: ', error)
    dispatch(transactionActions.getAllTransactionsError(error))})
}

// eslint-disable-next-line
export default {
  addTransaction,
  deleteTransaction,
  getAllTransactions
}
