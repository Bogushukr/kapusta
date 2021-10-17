import { Component } from 'react';
import { connect } from 'react-redux';
import ItemReport from '../ItemReport';
import {
  fetchReportCashInOneMonth,
  fetchReportCashOutOneMonth,
} from '../../Redux/report/report-operations';
// cashIncome
import s from './GeneratorItemReport.module.scss';
class GeneratorItemReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: props.year,
      month: props.month,
      cashIncome: props.cashIncome,
      onFetchReportCashIn: props.fetchReportCashIn,
      onFetchReportCashOut: props.fetchReportCashOut,
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
  }

  componentDidMount() {
    const {
      year,
      month,
      cashIncome,
      onFetchReportCashIn,
      onFetchReportCashOut,
    } = this.state;
    if (cashIncome) {
      onFetchReportCashIn({ year, month });
    } else {
      onFetchReportCashOut({ year, month });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { year, month, cashIncome } = this.props;
    const { onFetchReportCashIn, onFetchReportCashOut } = this.state;
    if (cashIncome !== prevProps.cashIncome || month !== prevProps.month) {
      if (cashIncome) {
        onFetchReportCashIn({ year, month });
      } else {
        onFetchReportCashOut({ year, month });
      }
    }
  }

  setActiveIdx = index => {
    this.setState({ activeChaterIdx: index });
  };

  render() {
    const { activeChaterIdx, data, cashIncome } = this.state;
    return (
      <>
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
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    year: state.report.date.currentReportYear,
    month: state.report.date.currentReportMonth,
    cashIncome: state.report.cashIncomeReducer,
  };
};
const mapDispatchProps = dispatch => {
  return {
    // HandleMonthUp: () => dispatch(reportActions.incrementMonthPicker(1)),
    // HandleMonthdown: () => dispatch(reportActions.dectementMonthPicker(1)),
    fetchReportCashIn: props => dispatch(fetchReportCashInOneMonth(props)),
    fetchReportCashOut: props => dispatch(fetchReportCashOutOneMonth(props)),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(GeneratorItemReport);
