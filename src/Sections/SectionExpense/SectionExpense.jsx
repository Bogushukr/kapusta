import React, { Component } from 'react'
import { connect } from 'react-redux'

import TableSectionExpense from '../../Components/TableSection/TableSectionExpense'
import transactionOperations from '../../Redux/Operations/transactionOperations'
import Calendar from '../../Components/Calendar/Calendar'

import styles from './SectionExpense.module.css'

const INITIAL_STATE = {
    desc: '',
    value: '',
    cashIncome: false,
    expenseCategories: '',
    incomeCategories: 'null',
    year: '',
    month: '',
    day: ''
}

class SectionExpense extends Component {

    static defaultProps = {}

    state = {
        ...INITIAL_STATE,
        day: new Date().getDate().toString(),
        month: (new Date().getMonth()+1).toString(),
        year: new Date().getFullYear().toString()
    }

    handleChangeDesc = e => {
        this.setState({desc: e.target.value})
        // console.log('state in handleChange: ', this.state)
    }

    handleChangeSelect = e => {
        this.setState({expenseCategories: e.target.value})
        // console.log('state in handleChange: ', this.state)
    }

    handleChangeValue = e => {
        this.setState({value: Number(e.target.value)})
        // console.log('state in handleChange: ', this.state)
    }

    handleSubmit = e => {
        e.preventDefault()
        const token = this.props.token
        const [day, month, year] = this.props.dateFromCalendar.split('.')
        if (!day) {
            this.props.onAddTransaction( {...this.state}, token )
            this.setState({desc: '', value: '', expenseCategories: ''})
            return
        }
        this.props.onAddTransaction( {...this.state, day, month, year}, token )
        this.reset()
    }

    reset = () => this.setState( {...INITIAL_STATE} )

    render() {
        const { desc, expenseCategories, value } = this.state
        return (
            <div className={styles.formContainer}>
                <div className={styles.datePickerWrp}><Calendar /></div> 
                    <form onSubmit={this.handleSubmit} className={styles.formBody}>                    
                        <div className={styles.formFieldsWrp}>                            
                            <div className={styles.formFields}>
                                <input type='text' placeholder='Описание товара' name='desc' 
                                    value={desc} onChange={this.handleChangeDesc} className={styles.formDescription} required/>
                                <select size='1' name='expenseCategories' value={expenseCategories} onChange={this.handleChangeSelect} className={styles.formCategory} required>
                                    <option value='' defaultValue>Категория товара</option>
                                    <option>Транспорт</option>
                                    <option>Продукты</option>
                                    <option>Здоровье</option>
                                    <option>Алкоголь</option>
                                    <option>Развлечения</option>
                                    <option>Все для дома</option>
                                    <option>Техника</option>
                                    <option>Комуналка, связь</option>
                                    <option>Спорт, хобби</option>
                                    <option>Образование</option>
                                    <option>Прочее</option>
                                </select>
                                <input placeholder='0.00' name='value' type='number' value={value} onChange={this.handleChangeValue} className={styles.formSum} required/>
                                {/* <Calculator /> */}
                            </div>
                        </div>
                        <div className={styles.buttonsWrp}>
                            <button type='submit' className={styles.enterBTN}>Ввод</button>
                            <button type='button' className={styles.clearBTN}
                                onClick={()=>this.setState({...INITIAL_STATE})}>Очистить</button>
                        </div>
                    </form>
                <TableSectionExpense />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({    
    dateFromCalendar:  state.transactions.date,
    token: state.auth.token
})

const mapDispatchToProps = {
    onAddTransaction: transactionOperations.addTransaction,
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionExpense)
