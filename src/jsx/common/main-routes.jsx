import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Auth from '../modules/auth';
import PrivateRoutes from './private-routes';

import Home from '../pages/home';
import SignIn from '../pages/signin';
import SignUp from '../pages/signup';
import Public1 from '../pages/public1';
import Public2 from '../pages/public2';
import Private1 from '../pages/private/private1';
import Private2 from '../pages/private/private2';

class MainRoutes extends React.Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/public1" component={Public1} />
        <Route exact path="/public2" component={Public2} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <PrivateRoutes isAuthenticated={Auth.isAuthenticated()}>
          <Switch>
            <Route path="/private1" component={Private1} />
            <Route path="/private2" component={Private2} />
          </Switch>
        </PrivateRoutes>
        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
    );
  }
}

export default MainRoutes;
