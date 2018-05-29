import React from 'react';
import { Router, Route, Switch, IndexRedirect } from 'dva/router';
import IndexPage from './routes/IndexPage';
import LoginPage from './routes/login';
import App from './routes/App';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <App>
          <Route path="/indexPage"  component={IndexPage}/>
          <Route path="/login"  component={LoginPage}/>
        </App>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
