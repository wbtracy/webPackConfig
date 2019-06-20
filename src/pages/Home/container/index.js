import React from 'react';
import Clock from '../components/Clock';
import { inject, observer } from 'mobx-react';

@inject("store")
@observer
export default class Home extends React.Component {

  render() {
    return (
      <Clock store={this.props.store}/>
    )
  }
}
