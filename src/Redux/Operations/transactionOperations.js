import axios from 'axios'

import transactionActions from '../Actions/transactionActions'

// axios.defaults.baseURL = 'https://kapusta-organizer.herokuapp.com/'

const addTransaction = transaction => async (dispatch) => {
    dispatch(transactionActions.addTransactionRequest())
    await axios
      .post('/transactions',  transaction)
      // .post('/transactions',  transaction, {headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjk2MTEwNTAwMjBlMDAxZGRmZWFhMiIsImlhdCI6MTYzNDUyMTk4MH0.7tX6XPx3aJD1bG3NWcXHHc3-CD0scs3Z4r5YfW1ij0g'},})
      .then(({ data }) => dispatch(transactionActions.addTransactionSuccess(data)))
      .catch(error => dispatch(transactionActions.addTransactionError(error)))
  }

// const addTransaction = transaction => async (dispatch) => {
//   dispatch(transactionActions.addTransactionRequest())
//   console.log('transaction: ', transaction)
//   await fetch('https://kapusta-organizer.herokuapp.com/api/transactions', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjk2MTEwNTAwMjBlMDAxZGRmZWFhMiIsImlhdCI6MTYzNDUyMTk4MH0.7tX6XPx3aJD1bG3NWcXHHc3-CD0scs3Z4r5YfW1ij0g'
//     },
//     body: JSON.stringify(transaction) // body data type must match "Content-Type" header
//   })
//   .then((response) => {
//     return response.json()
//   })
//   .then((data) => {
//     console.log(data);
//   })}

const deleteTransaction = id => async (dispatch) => {
  dispatch(transactionActions.removeTransactionRequest())
  console.log('transaction id: ', id)
  await axios
    .delete(`/transactions/${id}`, {
      // headers: {
      //   'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjk2MTEwNTAwMjBlMDAxZGRmZWFhMiIsImlhdCI6MTYzNDUyMTk4MH0.7tX6XPx3aJD1bG3NWcXHHc3-CD0scs3Z4r5YfW1ij0g',
      //   'Content-Type': 'application/json'
      // }
    })
    .then(({data}) => dispatch(transactionActions.removeTransactionSuccess(data)))
    .catch(error => {
      console.log('error: ', error)
      dispatch(transactionActions.removeTransactionError(error))})
}

// const deleteTransaction = id => async (dispatch) => {
//   dispatch(transactionActions.removeTransactionRequest())
//   console.log('transaction: ', id)
//   // const data = JSON.stringify(transaction)
//   // console.log('data in trOperations: ', data)
//   // const dataParse = JSON.parse(data)
//   await fetch(`https://kapusta-organizer.herokuapp.com/api/transactions/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjk2MTEwNTAwMjBlMDAxZGRmZWFhMiIsImlhdCI6MTYzNDUyMTk4MH0.7tX6XPx3aJD1bG3NWcXHHc3-CD0scs3Z4r5YfW1ij0g'
//     },
//     body: JSON.stringify(id) // body data type must match "Content-Type" header
//   })
//     // .delete(`/transactions/${id}`, {headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjk2MTEwNTAwMjBlMDAxZGRmZWFhMiIsImlhdCI6MTYzNDUyMTk4MH0.7tX6XPx3aJD1bG3NWcXHHc3-CD0scs3Z4r5YfW1ij0g'}})
//     // .post('/transactions',  transaction, {headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjk2MTEwNTAwMjBlMDAxZGRmZWFhMiIsImlhdCI6MTYzNDUyMTk4MH0.7tX6XPx3aJD1bG3NWcXHHc3-CD0scs3Z4r5YfW1ij0g'},})
//     // .then(({ data }) => console.log('data from BE: ', data))
//     .then(( response ) => {
//       console.log('data from BE: ', response)
//       return dispatch(transactionActions.removeTransactionSuccess(response.json()))
//     })
//     .catch(error => dispatch(transactionActions.removeTransactionError(error)))
// }

// eslint-disable-next-line
export default {
  addTransaction,
  deleteTransaction
}
