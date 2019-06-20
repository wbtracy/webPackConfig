import React from 'react';
import { inject, observer } from 'mobx-react';
import { trace } from 'mobx';
import CssModules from 'react-css-modules'
import Styles from './CssModules.less';

@inject('store')
@observer
@CssModules(Styles)
export default class CssModulesContainer extends React.Component {

  componentDidMount() {
    this.props.store.selfPlus();
  }

  render() {
    trace();
    console.log(this.props);

    return (
      <div styleName="title">
        css! {this.props.store.count}
      </div>
    )
  }
}