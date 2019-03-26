import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Education from './Education';
import Introduction from './Introduction';
import Hobbies from './Hobbies';

export default class Personal extends React.Component {

  render() {

    return (
      <Switch>
        <Route path="/personal/introduction" component={Education}/>
        <Route path="/personal/education" component={Introduction}/>
        <Route path="/personal/hobbies" component={Hobbies}/>
      </Switch>
    )
  }
}