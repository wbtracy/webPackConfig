import React from 'react';
import Styles from './DownLoadCharts.less';
import echarts from 'echarts';
import { observer, inject } from "mobx-react";
import data from '../Data/DownLoadSpeed';
import 'echarts/map/js/world';

@inject("DownLoadChartsStore")
@observer
export default class DownLoadCharts extends React.Component {

  constructor(props) {
    super(props);
    this.chartsRef = this.textInput = React.createRef();;
  }

  componentDidMount() {
    const dom = this.chartsRef.current;
    if (dom) {
      const charts = echarts.init(dom);
      const array = [[], [], [], [], []];
      data.map(item => {
        array[parseInt(item.split(",")[2])].push([item.split(",")[1], item.split(",")[0]]);
      });
      console.log(array);
      const option = {
        geo: {
          map: 'world',
          show: true,
          roam: true,
          scaleLimit: {
            min: 1,
            max: 6
          },
          label: {
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: '#363f51',
              borderColor: '#252d3c'
            },
            emphasis: {
              areaColor: '#363f51'
            }
          }
        },
        series: [{
          name: '弱',
          type: 'scatter',
          coordinateSystem: 'geo',
          symbolSize: 1,
          large: true,
          z: 1,
          itemStyle: {
            // color: 'rgba(0,36,255,.55)'
            color: '#9FFF19'
          },
          progressive: 0,
          silent: true,
          data: array[0]
        }, {
          name: '弱',
          type: 'scatter',
          coordinateSystem: 'geo',
          symbolSize: 1,
          large: true,
          z: 1,
          itemStyle: {
            // color: 'rgba(0,51,255,.6)'
            color: '#D9FF19'
          },
          progressive: 0,
          silent: true,
          data: array[1]
        }, {
          name: '弱',
          type: 'scatter',
          coordinateSystem: 'geo',
          symbolSize: 1,
          large: true,
          z: 1,
          itemStyle: {
            // color: 'rgba(0,72,255,.65)'
            color: '#FFEC19'
          },
          progressive: 0,
          silent: true,
          data: array[2]
        }, {
          name: '弱',
          type: 'scatter',
          coordinateSystem: 'geo',
          symbolSize: 1,
          large: true,
          z: 1,
          itemStyle: {
            color: '#FFB319'
          },
          progressive: 0,
          silent: true,
          data: array[3]
        }, {
          name: '弱',
          type: 'scatter',
          coordinateSystem: 'geo',
          symbolSize: 1,
          large: true,
          z: 1,
          itemStyle: {
            color: '#FF1919'
          },
          progressive: 0,
          silent: true,
          data: array[4]
        }]
      }
      charts.setOption(option);
      console.log(charts.getOption());
      charts.on('dblclick', (params) => {
        console.log(params);
        const option = charts.getOption();
        const zoom = option.geo[0].zoom;
        if (zoom < 6) {
          option.geo[0].zoom = 6;
          option.geo[0].center = charts.convertFromPixel('geo', [params.event.offsetX, params.event.offsetY]);
        } else {
          option.geo[0].zoom = 1;
          option.geo[0].center = null;
        }
        charts.setOption(option);
      });
    }
  }

  render() {

    return (
      <div ref={this.chartsRef} className={Styles.container} />
    )
  }
}