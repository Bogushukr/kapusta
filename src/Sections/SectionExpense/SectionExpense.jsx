import React, { Component } from 'react'
import { connect } from 'react-redux'

import TableSection from '../../Components/TableSection/TableSection'
import expenseOperations from '../../Redux/Operations/'

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
            <>
                {/* <Calendar /> */}
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Описание товара' name='description' value={description} onChange={this.handleChange} required/>
                    <p>
                        <select size='1' name='Категория товара' value={category} onChange={this.handleChange} required>
                            <option>Транспорт</option>
                            <option>Продукты</option>
                            <option>Здоровье</option>
                        </select>
                    </p>
                    <input placeholder='0.00' value={sum} onChange={this.handleChange} onChange={this.handleChange} required/>
                    {/* <Calculator /> */}
                    <button type='submit'>Ввод</button>
                    <button>Очистить</button>
                    <TableSection description={description} category={category} sum={sum}/>
                    {/* <Summary /> */}
                </form>
            </>
        )
    }
}

const mapDispatchToProps = {
    onAddExpense: expenseOperations.addExpense,
}

export default connect(null, mapDispatchToProps)(SectionExpense)