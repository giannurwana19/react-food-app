import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavbarComp } from './components';
import Home from './pages/Home';
import OrderComplete from './pages/OrderComplete';

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavbarComp />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/order-complete" component={OrderComplete} />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
