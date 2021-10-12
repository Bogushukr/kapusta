import { Component } from 'react';
import ItemReport from '../ItemReport';

import s from './GeneratorItemReport.module.scss';
class GeneratorItemReport extends Component {
  state = {
    activeChaterIdx: 0,
    data: [
      {
        chapter: 'product',
        text: 'Продукты',
        value: '5 000.00',
      },
      {
        chapter: 'alcohol',
        text: 'Алкоголь',
        value: '200.00',
      },
      {
        chapter: 'entertainment',
        text: 'Развлечение',
        value: '800.00',
      },
      {
        chapter: 'healthier',
        text: 'Здоровье',
        value: '900.00',
      },
      {
        chapter: 'transport',
        text: 'Транспорт',
        value: '2 000.00',
      },
      {
        chapter: 'housing',
        text: 'все для дома',
        value: '1 500.00',
      },
      {
        chapter: 'technique',
        text: 'техника',
        value: '800.00',
      },
      {
        chapter: 'communal-communication',
        text: 'коммуналка, связь',
        value: '2 200.00',
      },
      {
        chapter: 'sport-hobby',
        text: 'спорт,              хобби',
        value: '1 800.00',
      },
      {
        chapter: 'education',
        text: 'образование',
        value: '2 400.00',
      },
      {
        chapter: 'other',
        text: 'прочее',
        value: '3 000.00',
      },
    ],
  };

  setActiveIdx = index => {
    this.setState({ activeChaterIdx: index });
  };

  render() {
    const { activeChaterIdx, data } = this.state;
    return (
      <ul className={s.list}>
        {data.map(({ chapter, value, text }, index) => (
          <li key={chapter} className={s.item}>
            <ItemReport
              chapter={chapter}
              value={value}
              text={text}
              idx={index}
              idxA={activeChaterIdx}
              setActiveIdx={this.setActiveIdx}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default GeneratorItemReport;
