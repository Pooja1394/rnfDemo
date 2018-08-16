/**
 * Manin file
 */
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './component/Home';
import { Provider } from 'react-redux';
import store from './store/ConfigureStore';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route to='/' component={Home} />
        </Router>
      </Provider>

    )
  }
}

export default App;
