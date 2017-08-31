const Auth = {

  /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} token
   * @param {object} user
   */
  authenticateUser: (token, user) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  },

  /**
   * Deauthenticate a user. Remove a token from Local Storage.
   */
  deauthenticateUser: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
  isAuthenticated: () => {
    return localStorage.getItem('token') !== null;
  },

  /**
   * Get a token value.
   * @returns {string}
   */
  getToken: () => {
    return localStorage.getItem('token');
  },

  /**
   * Get user object
   * @returns {object}
   */
  getUser: () => {
    return JSON.parse(localStorage.getItem('user'));
  }

};

export default Auth;
