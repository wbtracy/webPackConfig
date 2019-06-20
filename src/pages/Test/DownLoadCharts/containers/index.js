import React from 'react';
import DownLoadCharts from '../components/DownLoadCharts';
import { Provider } from 'mobx-react';
import DownLoadChartsStore from '../stores/DownLoadChartsStore';

export default class Test extends React.Component {

  render() {
    return (
      <Provider DownLoadChartsStore={DownLoadChartsStore}>
        <DownLoadCharts />
      </Provider>
    )
  }
}