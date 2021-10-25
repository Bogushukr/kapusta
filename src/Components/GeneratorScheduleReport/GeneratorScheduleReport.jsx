import { Component } from 'react';
import { connect } from 'react-redux';
import Media from 'react-media';

import s from './GeneratorScheduleReport.module.scss';
import './s.scss';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  ComposedChart,
  LabelList,
  Cell,
} from 'recharts';

class GeneratorScheduleReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedArrCashOut: props.sortedArrCashOut,
      cashIncome: props.cashIncome,
      sortedArrCashIn: props.sortedArrCashIn,
      activeIndex: 0,
      data: [],
    };
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    const {
      activeOfArrCashOut,
      activeOfArrCashIn,
      cashIncome,
      sortedArrCashOut,
      sortedArrCashIn,
    } = this.props;
    if (cashIncome !== prevProps.cashIncome) {
      if (!cashIncome) {
        this.setState({
          data: sortedArrCashOut[activeOfArrCashOut].desc,
        });
      }
      if (cashIncome) {
        this.setState({
          data: sortedArrCashIn[activeOfArrCashIn].desc,
        });
      }
    }
    if (
      (cashIncome && sortedArrCashIn !== prevProps.sortedArrCashIn) ||
      (cashIncome && activeOfArrCashIn !== prevProps.activeOfArrCashIn)
    ) {
      this.setState({
        data: sortedArrCashIn[activeOfArrCashIn].desc,
      });
    }
    if (
      (!cashIncome && sortedArrCashOut !== prevProps.sortedArrCashOut) ||
      (!cashIncome && activeOfArrCashOut !== prevProps.activeOfArrCashOut)
    ) {
      this.setState({
        data: sortedArrCashOut[activeOfArrCashOut].desc,
      });
    }
  }
  handleClick = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    const { activeIndex, data } = this.state;
    const tabletimeHeight = data.length * 70;
    let tabletimeWidth = '100%';
    if (data.length < 4) {
      tabletimeWidth = data.length * 150;
    }

    return (
      <Media
        queries={{
          small: '(max-width: 767px)',
          medium: '(min-width: 768px)',
        }}
      >
        {matches => (
          <>
            {matches.small && (
              <div style={{ height: tabletimeHeight }}>
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart
                    layout="vertical"
                    width="100%"
                    data={data}
                    margin={{
                      top: 20,
                      right: 20,
                      bottom: 20,
                      left: 20,
                    }}
                  >
                    <XAxis type="number" axisLine={false} hide={true} />
                    <YAxis
                      dataKey="desc"
                      type="category"
                      axisLine={false}
                      hide={true}
                      padding={{ top: 20 }}
                    />
                    <Bar
                      dataKey="total"
                      fill="#FFDAC0"
                      barSize={15}
                      radius={[0, 10, 10, 0]}
                      onClick={this.handleClick}
                    >
                      <LabelList dataKey="total" position="insideTopRight" />
                      <LabelList dataKey="desc" position="insideLeft" />
                      {data.map((entry, index) => (
                        <Cell
                          cursor="pointer"
                          fill={index === activeIndex ? '#ff751d' : '#ffdac0'}
                          key={`cell-${index}`}
                        />
                      ))}
                    </Bar>
                    <Bar></Bar>
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            )}
            {matches.medium && (
              <div className={s.timeTable}>
                <div
                  style={{
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    width: tabletimeWidth,
                  }}
                >
                  <ResponsiveContainer width="100%" height={422}>
                    <BarChart
                      data={data}
                      margin={{
                        top: 20,
                        bottom: 20,
                      }}
                    >
                      <Bar
                        dataKey="total"
                        fill="red"
                        barSize={38}
                        radius={[10, 10, 0, 0]}
                        onClick={this.handleClick}
                      >
                        <LabelList dataKey="total" position="insideTop" />
                        {data.map((entry, index) => (
                          <Cell
                            cursor="pointer"
                            fill={index === activeIndex ? '#ff751d' : '#ffdac0'}
                            key={`cell-${index}`}
                          />
                        ))}
                      </Bar>
                      <CartesianGrid strokeDasharray=" " vertical={false} />
                      <YAxis
                        type="number"
                        tickCount={30}
                        axisLine={false}
                        hide={true}
                        domain={[0, 'dataMax +600']}
                      />
                      <XAxis
                        dataKey="desc"
                        angle={0}
                        tickSize={0}
                        padding={{ left: 20, right: 20 }}
                        // margin={{ top: 20 }}
                        axisLine={false}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </>
        )}
      </Media>
    );
  }
}

const mapStateToProps = state => {
  return {
    cashIncome: state.report.cashIncomeReducer,
    sortedArrCashOut: state.report.sortedArrCashOutReducer,
    sortedArrCashIn: state.report.sortedArrCashInReducer,
    activeOfArrCashOut: state.report.activeOfArrCashOutReducer,
    activeOfArrCashIn: state.report.activeOfArrCashInReducer,
  };
};

export default connect(mapStateToProps)(GeneratorScheduleReport);
