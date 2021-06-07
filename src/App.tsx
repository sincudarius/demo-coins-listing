import React, { FC } from 'react';
import {
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import CoinDetail from './components/coniDetail/CoinDetail';
import CoinsList from './components/conisList/CoinsList';

const App: FC = () => (
  <Router>
    <Switch>
      <Route exact path="/coins/markets" component={CoinsList} />
      <Route path="/coins/:coinId" component={CoinDetail} />
      <Redirect to="/coins/markets" />
    </Switch>
  </Router>
);

export default App;
