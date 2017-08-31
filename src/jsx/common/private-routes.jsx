import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import NotFound from '../pages/not-found';

const PrivateRoutes = ({ isAuthenticated, children }) => {

  let isFound = false;
  children.props.children.forEach(function(route) { // eslint-disable-line prefer-arrow-callback
    if (location.pathname.toLowerCase() === route.props.path.toLowerCase()) {
      isFound = true;
    }
  });

  return (
    // eslint-disable-next-line no-nested-ternary
    isAuthenticated && isFound ? (
      <div>
        <h2>*** Private ***</h2>
        {children}
      </div>
    ) : (
      !isFound ? (
        <NotFound />
      ) : (
        <Redirect to={{ pathname: '/signin' }} />
      )
    )
  );
};
PrivateRoutes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
  // children: PropTypes.instanceOf(Route).isRequired
};

export default PrivateRoutes;
