import React, { Component } from 'react'
import { connect } from 'react-redux'

import TableSectionIncome from '../../Components/TableSection/TableSectionIncome'
import transactionOperations from '../../Redux/Operations/transactionOperations'
import Calendar from '../../Components/Calendar/Calendar'

import styles from './SectionIncome.module.css'

const INITIAL_STATE = {
    desc: '',
    value: '',
    cashIncome: true,
    expenseCategories: 'null',
    incomeCategories: '',
    year: '',
    month: '',
    day: ''
}

class SectionIncome extends Component {

    static defaultProps = {}

    state = {...INITIAL_STATE}

    // handleChange = e => {
    //     const {name, value} = e.target
    //     this.setState({[name]: value})
    // }

    handleChangeDesc = e => {
        this.setState({desc: e.target.value})
        console.log('state in handleChange: ', this.state);
    }

    handleChangeSelect = e => {
        this.setState({incomeCategories: e.target.value})
        console.log('state in handleChange: ', this.state);
    }

    handleChangeValue = e => {
        this.setState({value: Number(e.target.value)})
        console.log('state in handleChange: ', this.state);
    }

    handleSubmit = e => {
        e.preventDefault()
        const [day, month, year] = this.props.dateFromCalendar.split('.')
        this.props.onAddTransaction( {...this.state, day, month, year} )
        // console.log('this.state income: ', this.state);
        this.reset()
    }

    reset = () => this.setState( {...INITIAL_STATE} )

    render() {
        const { desc, incomeCategories, value } = this.state
        return (
            <div className={styles.formContainer}>
                <div className={styles.datePickerWrp}><Calendar /></div> 
                <form onSubmit={this.handleSubmit} className={styles.formBody}>
                    <div className={styles.formFields}>
                        <input type='text' placeholder='Описание дохода' name='desc' 
                            value={desc} onChange={this.handleChangeDesc} className={styles.formDescription} required/>
                        <select size='1' name='incomeCategories' value={incomeCategories} onChange={this.handleChangeSelect} className={styles.formCategory} required>
                            <option value='' defaultValue>Категория дохода</option>
                            <option>ЗП</option>
                            <option>Доп. доход</option>
                        </select>
                        <input placeholder='0.00' name='value' value={value} onChange={this.handleChangeValue} className={styles.formSum} required/>
                        {/* <Calculator /> */}
                    </div>
                    <div className={styles.buttonsWrp}>
                        <button type='submit' className={styles.enterBTN}>Ввод</button>
                        <button className={styles.clearBTN}>Очистить</button>
                    </div>
                </form>
                <TableSectionIncome items={this.state.items}/>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({    
    dateFromCalendar:  state.transactions.date
})

const mapDispatchToProps = {
    onAddTransaction: transactionOperations.addTransaction,
}


export default connect(mapStateToProps, mapDispatchToProps)(SectionIncome)