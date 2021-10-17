import { Component } from 'react';
import { connect } from 'react-redux';
import ItemReport from '../ItemReport';
import {
  fetchReportCashInOneMonth,
  fetchReportCashOutOneMonth,
} from '../../Redux/report/report-operations';

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
    };
  }
  static defaultProps = {
    arrCashIn: null,
    arrCashOut: null
  };

  componentDidMount() {
    const {
      year,
      month,
      onFetchReportCashIn,
      onFetchReportCashOut,
    } = this.state;

      onFetchReportCashIn({ year, month });
      onFetchReportCashOut({ year, month });
  }

  componentDidUpdate(prevProps, prevState) {
    const { year, month, cashIncome } = this.props;
    const { onFetchReportCashIn, onFetchReportCashOut } = this.state;
    if (cashIncome !== prevProps.cashIncome || month !== prevProps.month) {
        onFetchReportCashIn({ year, month });
        onFetchReportCashOut({ year, month });
    }
  }

  setActiveIdx = index => {
    this.setState({ activeChaterIdx: index });
  };

  render() {
    const { activeChaterIdx, data} = this.state;
    const {arrCashIn, arrCashOut } = this.props;
    return (
      <>
      {arrCashIn.arrCategories && 
        <ul className={s.list}>
             {arrCashIn.arrCategories.map(({ desc, _id, totalByCategory}, index) => (
            <li key={_id} className={s.item}>
              <ItemReport
                chapter={_id}
                value={totalByCategory}
                desc={desc}
                text={_id}
                idx={index}
                idxA={activeChaterIdx}
                setActiveIdx={this.setActiveIdx}
              />
            </li>
          ))}
        </ul>
      }
      {arrCashOut.arrCategories && 
        <ul className={s.list}>
             {arrCashOut.arrCategories.map(({ desc, _id, totalByCategory}, index) => (
            <li key={_id} className={s.item}>
              <ItemReport
                // chapter={chapter}
                value={totalByCategory}
                desc={desc}
                text={_id}
                idx={index}
                idxA={activeChaterIdx}
                setActiveIdx={this.setActiveIdx}
              />
            </li>
          ))}
        </ul>
      }
        {/* <ul className={s.list}>
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
        </ul> */}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    year: state.report.date.currentReportYear,
    month: state.report.date.currentReportMonth,
    cashIncome: state.report.cashIncomeReducer,
    arrCashOut: state.report.cashOutOneMonth,
    arrCashIn: state.report.cashInOneMonth,
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
