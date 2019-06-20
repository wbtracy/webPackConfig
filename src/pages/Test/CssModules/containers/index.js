import React from 'react';
import CssModules from '../components/CssModules';
import { Provider } from 'mobx-react';
import CssModulesStore from '../stores/CssModulesStore';

export default class Test extends React.Component {

  render() {
    return (
      <Provider store={CssModulesStore}>
        <CssModules />
      </Provider>
    )
  }
}