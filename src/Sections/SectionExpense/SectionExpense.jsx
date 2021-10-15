import React, { Component } from 'react'
import { connect } from 'react-redux'

import TableSection from '../../Components/TableSection/TableSection'
import expenseOperations from '../../Redux/Operations/expenseOperations'
import Calendar from '../../Components/Calendar/Calendar'

import styles from './SectionExpense.module.css'

const INITIAL_STATE = {
    description: '',
    category: '',
    sum: ''
}

class SectionExpense extends Component {

    static defaultProps = {}

    state = {...INITIAL_STATE}

    handleChange = e => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.onAddExpense( {...this.state} )
        this.reset()
    }

    reset = () => this.setState( {...INITIAL_STATE} )

    render() {
        const { description, category, sum } = this.state
        return (
            <div className={styles.formContainer}>
                <div className={styles.datePickerWrp}><Calendar /></div> 
                <div className={styles.calendarFormWrp}>                                   
                    <form onSubmit={this.handleSubmit} className={styles.formBody}>                    
                        <div className={styles.formFieldsWrp}>
                            <div className={styles.formFields}>
                                <input type='text' placeholder='Описание товара' name='description' 
                                    value={description} onChange={this.handleChange} className={styles.formDescription} required/>
                                <select size='1' name='category' value={category} onChange={this.handleChange} className={styles.formCategory} required>
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
                                <input placeholder='0.00' name='sum' value={sum} onChange={this.handleChange} className={styles.formSum} required/>
                                {/* <Calculator /> */}
                            </div>
                        </div>
                        <div className={styles.buttonsWrp}>
                            <button type='submit' className={styles.enterBTN}>Ввод</button>
                            <button className={styles.clearBTN}>Очистить</button>
                        </div>
                    </form>
                </div>
                <TableSection description={description} category={category} sum={sum}/>
                {/* <Summary /> */}
            </div>
        )
    }
}

const mapDispatchToProps = {
    onAddExpense: expenseOperations.addExpense,
}

export default connect(null, mapDispatchToProps)(SectionExpense)