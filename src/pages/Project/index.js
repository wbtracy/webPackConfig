import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Echarts from './Echarts';
import Table from './Table';
import Map from './Map';

export default class Project extends React.Component {

  render() {

    return (
      <Switch>
        <Route path="/project/echarts" component={Echarts}/>
        <Route path="/project/map" component={Map}/>
        <Route path="/project/table" component={Table}/>
      </Switch>
    )
  }
}