import React from 'react'
// import { Link } from 'react-router-dom'

const SectionIncome = () => {
    return (
        // <div>
        //     <Link to='/expense' />
        //     <Link to='/income' />
        // </div>
        <>
            <Calendar />
            <form onSubmit={handleSubmit}>
                <input placeholder='Описание дохода' />
                <p>
                    <select size='1' name='Категория дохода'>
                        <option>ЗП</option>
                        <option>Доп. доход</option>
                    </select>
                </p>
                <input placeholder='0.00' onChange={handleChange} />
                <Calculator />
                <button type='submit'>Ввод</button>
                <button>Очистить</button>
            </form>
        </>
    )
}

export default SectionIncome