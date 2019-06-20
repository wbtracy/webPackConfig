import React from 'react';
import Home from './container';
import { Provider } from 'mobx-react';
import Clock from './stores/Clock';

export default class HomeContainer extends React.Component{

  render() {

    return (
      <Provider store={Clock}>
        <Home/>
      </Provider>
    )
  }
}