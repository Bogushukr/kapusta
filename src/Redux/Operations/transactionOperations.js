import axios from 'axios'
import transactionActions from '../Actions/transactionActions'

axios.defaults.baseURL = 'https://kapusta-organizer.herokuapp.com/api'

const addTransaction = transaction => async (dispatch) => {
    dispatch(transactionActions.addTransactionRequest())
    console.log('transaction: ', transaction)
    const data = JSON.stringify(transaction)
    console.log('data in trOperations: ', data)
    // const dataParse = JSON.parse(data)
    await axios
      .post('/transactions',  data)
      // .then(({ data }) => console.log('data from BE: ', data))
      .then(({ data }) => dispatch(transactionActions.addTransactionSuccess(data)))
      .catch(error => dispatch(transactionActions.addTransactionError(error)))
  }

// eslint-disable-next-line
export default {
  addTransaction,
}
