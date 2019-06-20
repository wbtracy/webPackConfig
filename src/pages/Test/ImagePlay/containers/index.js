import { Provider } from 'mobx-react';
import React from 'react';
import ImagePlay from '../components/ImagePlay';

export default class Container extends React.Component {

  render() {

    return (
      <Provider>
        <ImagePlay/>
      </Provider>
    )
  }
}