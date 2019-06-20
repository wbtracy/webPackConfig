import React from 'react';
import {Route, Switch} from 'react-router-dom';
import CssModules from './CssModules';
import ImagePlay from './ImagePlay';
import DownLoadCharts from './DownLoadCharts';

export default class Test extends React.Component{

  render() {

    return (
      <Switch>
        <Route path="/test/cssModules" component={CssModules}/>
        <Route path="/test/imagePlay" component={ImagePlay}/>
        <Route path="/test/downloadCharts" component={DownLoadCharts}/>
      </Switch>
    )
  }
}