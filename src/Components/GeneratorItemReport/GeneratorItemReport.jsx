import { Component } from 'react';
import { connect } from 'react-redux';
import ItemReport from '../ItemReport';
import {
  fetchReportCashInOneMonth,
  fetchReportCashOutOneMonth,
} from '../../Redux/report/report-operations';

import {
  sortedArrCashIn,
  sortedArrCashOut,
} from '../../Redux/report/report-actions';
import { sortedArrCashFetch } from '../../Utils/CategoriesMap';
import { arrCashInIdx, arrCashOutIdx } from '../../Utils/category.js';

import s from './GeneratorItemReport.module.scss';
class GeneratorItemReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: props.year,
      month: props.month,
      onFetchReportCashIn: props.fetchReportCashIn,
      onFetchReportCashOut: props.fetchReportCashOut,
      onSortedArrCashIn: props.onSortedArrCashIn,
      onSortedArrCashOut: props.onSortedArrCashOut,
    };
  }
  static defaultProps = {
    arrCashIn: null,
    arrCashOut: null,
  };

  componentDidMount() {
    const { year, month, onFetchReportCashIn, onFetchReportCashOut } =
      this.state;

    onFetchReportCashIn({ year, month });
    onFetchReportCashOut({ year, month });
  }

  componentDidUpdate(prevProps, prevState) {
    const { year, month, arrCashIn, arrCashOut } = this.props;
    const {
      onFetchReportCashIn,
      onFetchReportCashOut,
      onSortedArrCashIn,
      onSortedArrCashOut,
    } = this.state;
    if (month !== prevProps.month) {
      onFetchReportCashIn({ year, month });
      onFetchReportCashOut({ year, month });
    }
    if (arrCashIn !== prevProps.arrCashIn) {
      onSortedArrCashIn(sortedArrCashFetch(arrCashInIdx, arrCashIn.arrCategories));
    }
    if (arrCashOut !== prevProps.arrCashOut) {
      onSortedArrCashOut(sortedArrCashFetch(arrCashOutIdx, arrCashOut.arrCategories));
    }
  }

  setActiveIdx = index => {
    this.setState({ activeChaterIdx: index });
  };

  render() {
    const {sortedArrCashOut, sortedArrCashIn, activeOfArrCashOut, activeOfArrCashIn, cashIncome} = this.props; 
    return (
      <>
        {sortedArrCashIn && cashIncome && (
          <ul className={s.list}>
            {sortedArrCashIn.map(
              ({ desc, _id, totalByCategory }, index) => (
                <li key={_id} className={s.item}>
                  <ItemReport
                    chapter={_id}
                    value={totalByCategory}
                    desc={desc}
                    text={_id}
                    idx={index}
                    idxA={activeOfArrCashIn}
                    CashIn={true}
                  />
                </li>
              ),
            )}
          </ul>
        )}
        {sortedArrCashOut && !cashIncome && (
          <ul className={s.list}>
            {sortedArrCashOut.map(
              ({ desc, _id, totalByCategory }, index) => (
                <li key={_id} className={s.item}>
                  <ItemReport
                    // chapter={chapter}
                    value={totalByCategory}
                    desc={desc}
                    text={_id}
                    idx={index}
                    idxA={activeOfArrCashOut}
                    CashIn={false}
                  />
                </li>
              ),
            )}
          </ul>
        )}
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
    sortedArrCashOut: state.report.sortedArrCashOutReducer,
    sortedArrCashIn: state.report.sortedArrCashInReducer,
    activeOfArrCashOut: state.report.activeOfArrCashOutReducer,
    activeOfArrCashIn: state.report.activeOfArrCashInReducer,
  };
};
const mapDispatchProps = dispatch => {
  return {
    fetchReportCashIn: props => dispatch(fetchReportCashInOneMonth(props)),
    fetchReportCashOut: props => dispatch(fetchReportCashOutOneMonth(props)),
    onSortedArrCashIn: props => dispatch(sortedArrCashIn(props)),
    onSortedArrCashOut: props => dispatch(sortedArrCashOut(props)), 
  };
};

export default connect(mapStateToProps, mapDispatchProps)(GeneratorItemReport);
