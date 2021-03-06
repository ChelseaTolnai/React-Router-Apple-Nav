import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavWrapper from './components/Navigation/NavWrapper'

class App extends Component {
  render() {
    return (
      <Route
        path={'/'}
        render={props => 
        <NavWrapper {...props}
      />}
  />
    );
  }
}

export default App;
