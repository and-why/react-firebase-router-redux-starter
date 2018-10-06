import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import PageLogin from '../components/PageLogin';
import PageSignup from '../components/PageSignup';
import PageDashboard from '../components/PageDashboard';
import PageFileUpoad from '../components/PageFileUpload';
import PageNotFound from '../components/PageNotFound';

import PublicRoute from '../routers/PublicRouter';
import PrivateRoute from '../routers/PrivateRouter';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={PageLogin} exact />
        <PublicRoute path="/signup" component={PageSignup} />
        <PrivateRoute path="/dashboard" component={PageDashboard} />
        <PrivateRoute path="/upload" component={PageFileUpoad} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
