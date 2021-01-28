import React from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  DiscreteColorLegend
} from 'react-vis';

export default class StackedBar extends React.Component {
  state = {
    useCanvas: false
  };
  render() {
    const {useCanvas} = this.state;
    const BarSeries = VerticalBarSeries;
    const content = useCanvas ? 'TOGGLE TO SVG' : 'TOGGLE TO CANVAS';

    return (
      <div>
        
        <XYPlot
          className="clustered-stacked-bar-chart-example"
          xType="ordinal"
          stackBy="y"
          width={500}
          height={300}
        >
          <DiscreteColorLegend
            style={{position: 'absolute', left: '50px', top: '10px'}}
            orientation="horizontal"
            items={[
              {
                title: 'Apples',
                color: '#12939A'
              },
              {
                title: 'Oranges',
                color: '#79C7E3'
              }
            ]}
          />
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <BarSeries
            cluster="Yes"
            color="#12939A"
            data={[
              {x: 'Republican', y: 10},
              {x:'Democrat', y: 18}

            ]}
          />
          <BarSeries
            cluster="Yes"
            color="#79C7E3"
            data={[
              {x: 'Republican', y: 3},
              {x: 'Democrat', y: 15}
            ]}
          />


        </XYPlot>
        <link rel="stylesheet" href="https://unpkg.com/react-vis/dist/style.css"></link>
      </div>
    );
  }
}