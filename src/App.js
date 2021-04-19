import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavbarComp } from './components';
import Home from './pages/Home';
import OrderComplete from './pages/OrderComplete';
import CartDetail from './pages/CartDetail';
import './App.css';

function App() {
  return (
    <Router>
      <NavbarComp />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/order-complete" component={OrderComplete} />
          <Route path="/cart-detail/:id" component={CartDetail} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
