import React from 'react';
import { Router, Route, Switch, IndexRoute } from 'dva/router';
import IndexPage from './routes/IndexPage';
import LoginPage from './routes/login';
import App from './routes/App';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <App>
          <Route path="/" exact={true}  component={IndexPage}></Route>
          <Route path="/indexPage" exact={true}  component={IndexPage}></Route>
          <Route path="/login" exact={true} component={LoginPage}></Route>
        </App>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
