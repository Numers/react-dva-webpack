import React from 'react';
import { Router, Route, Switch, IndexRoute } from 'dva/router';
import IndexPage from './routes/IndexPage';
import LoginPage from './routes/login';
import App from './routes/App';

function RouterConfig({ history }) {
  const IndexPage1 = ({ match }) => (
    <div>
      <Route path={`${match.url}/:userId`} component={IndexPage}/>
      <Route path={`${match.url}/login`} component={LoginPage}/>
    </div>
  )
  return (
    <Router history={history}>
      <Switch>
        <App>
          <Route path="/" exact={true}  component={IndexPage}></Route>
          <Route path="/indexPage"   component={IndexPage1}></Route>
          <Route path="/login" exact={true} component={LoginPage}></Route>
        </App>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
