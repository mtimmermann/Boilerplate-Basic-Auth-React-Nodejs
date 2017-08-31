import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../modules/auth';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {

  // eslint-disable-next-line class-methods-use-this
  signOut() {
    Auth.deauthenticateUser();
  }

  render() {
    const isAuthenticated = this.props.isAuthenticated;
    const user = this.props.user;
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <NavLink to="/" className="navbar-brand">Passport React Node.js</NavLink>
          </div>

          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              {isAuthenticated && <li><NavLink to="/private1" activeClassName="active">Private 1</NavLink></li> }
              {isAuthenticated && <li><NavLink to="/private2" activeClassName="active">Private 2</NavLink></li> }
              <li><NavLink to="/public1" activeClassName="active">Public 1</NavLink></li>
              <li><NavLink to="/public2" activeClassName="active">Public 2</NavLink></li>
              <li className="dropdown">
                <a className="dropdown-toggle" href="#" data-toggle="dropdown">
                  About
                  <b className="caret" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="" data-toggle="modal" data-target="#modal-about">About: Passport React Node.js</a>
                  </li>
                  <li>
                    <a href="https://github.com/mtimmermann/Boilerplate-Basic-Auth-React-Nodejs" target="_blank" rel="noopener noreferrer">Source Code on GitHub</a>
                  </li>
                </ul>
              </li>
            </ul>
            {isAuthenticated ? (
              <ul className="nav navbar-nav pull-right">
                <li className="dropdown">
                  <a className="dropdown-toggle" href="#" data-toggle="dropdown">
                    {user.name}
                    <b className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li><NavLink to="#" activeClassName="active" onClick={this.signOut}>Sign Out</NavLink></li>
                  </ul>
                </li>
              </ul>
            ) : (
              <ul className="nav navbar-nav pull-right">
                <li><NavLink to="/signin" activeClassName="active">Sign In</NavLink></li>
              </ul>
            )}
          </div>{/* /.navbar-collapse */}
        </div>{/* /.container-fluid */}
      </nav>
    );
  }
}
NavBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default NavBar;
