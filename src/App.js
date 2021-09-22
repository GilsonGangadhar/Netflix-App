import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" component={HomeScreen} exact={true} />
          <Route path="/login" component={LoginScreen} exact={true} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
