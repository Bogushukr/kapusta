import { Component } from 'react';
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
  state = {
    data: [
      {
        name: 'Page E',
        uv: 200,
      },
      {
        name: 'Page E',
        uv: 800,
      },
      {
        name: 'Page E',
        uv: 900,
      },
      {
        name: 'Page E',
        uv: 1890,
      },
      {
        name: 'Page E',
        uv: 180,
      },
      {
        name: 'Page E',
        uv: 890,
      },
      {
        name: 'Page E',
        uv: 180,
      },
      {
        name: 'Page E',
        uv: 1900,
      },
      {
        name: 'Page E',
        uv: 800,
      },
      {
        name: 'Page E',
        uv: 1800,
      },
    ],
    activeIndex: 0,
  };

  handleClick = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    const { activeIndex, data } = this.state;

    const tabletimeHeight = this.state.data.length * 60;
    let tabletimeWidth = '100%';
    if (this.state.data.length < 8) {
      tabletimeWidth = this.state.data.length * 90;
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
                      dataKey="name"
                      type="category"
                      axisLine={false}
                      hide={true}
                      padding={{ top: 20 }}
                    />
                    <Bar
                      dataKey="uv"
                      fill="#FFDAC0"
                      barSize={15}
                      radius={[0, 10, 10, 0]}
                      onClick={this.handleClick}
                    >
                      <LabelList dataKey="name" position="insideLeft" />
                      {data.map((entry, index) => (
                        <Cell
                          cursor="pointer"
                          fill={index === activeIndex ? '#ff751d' : '#ffdac0'}
                          key={`cell-${index}`}
                        />
                      ))}
                    </Bar>
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
                      data={this.state.data}
                      margin={{
                        top: 20,
                        bottom: 20,
                      }}
                    >
                      <Bar
                        dataKey="uv"
                        fill="red"
                        barSize={38}
                        radius={[10, 10, 0, 0]}
                        onClick={this.handleClick}
                      >
                        <LabelList dataKey="uv" position="insideTop" />
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
                        dataKey="name"
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

export default GeneratorScheduleReport;
