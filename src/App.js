import React, { Component } from 'react';
import Chooser from './components/Navigation/Chooser/Chooser';
import WebDev from './components/WebDev/WebDev/WebDev';
import Audio from './components/Audio/Audio/Audio';


import { Route, Switch } from 'react-router-dom';

class App extends Component {

  render () {
    return (
      <div>
          <Switch>
              <Route path="/" exact component={Chooser}/>
              <Route path="/webdev" component={WebDev} />
              <Route path="/audio" component={Audio} />
          </Switch>
      </div>
    );
  }
  
}

export default App;
