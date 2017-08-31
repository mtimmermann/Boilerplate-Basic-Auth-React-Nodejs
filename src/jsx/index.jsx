import './common/imports';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Auth from './modules/auth';

import MainRoutes from './common/main-routes';
import NavBar from './common/navbar';

class App extends React.Component {
  render() {
    const user = Auth.getUser() || { user: { name: null, role: null } };
    return (
      <div>
        <NavBar isAuthenticated={Auth.isAuthenticated()} user={user} />
        <div className="container-fluid">
          <MainRoutes />
        </div>
      </div>
    );
  }
}

window.app = window.app || {};
window.app = $.extend({}, window.app,
  (function () {

    /**
     * Public methods
     */
    return {

      init: () => {
        ReactDOM.render(
          <Router>
            <App />
          </Router>,
          document.querySelector('#container-main')
        );
      }

    };
  }())
);

$(() => {
  window.app.init();
});
