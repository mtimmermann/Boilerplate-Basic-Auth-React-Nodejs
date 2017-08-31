/* eslint-disable prefer-arrow-callback */

import Auth from '../modules/auth';

const MessageService =
  (function () {

    function setHeader(xhr) {
      xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    }

    return {

      /**
       * Get Message 1
       * @param {function} callback (err, data)
                           The function that is called after a service call
                           error {object}: null if no error
                           data {object}: The data set of a succesful call
       */
      getMessage1: (callback) => {
        if (!$.isFunction(callback)) throw new Error('callback function is required');

        $.ajax({
          url: '/api/message/message1',
          type: 'GET',
          dataType: 'json',
          beforeSend: setHeader
        }).done(function(data) {
          return callback(null, data);
        }).fail(function(jqxhr, textStatus, error) {
          return callback(error);
        });
      },

      /**
       * Get Message 2
       * @param {function} callback (err, data)
                           The function that is called after a service call
                           error {object}: null if no error
                           data {object}: The data set of a succesful call
       */
      getMessage2: (callback) => {
        if (!$.isFunction(callback)) throw new Error('callback function is required');

        $.ajax({
          url: '/api/message/message2',
          type: 'GET',
          dataType: 'json',
          beforeSend: setHeader
        }).done(function(data) {
          return callback(null, data);
        }).fail(function(jqxhr, textStatus, error) {
          return callback(error);
        });
      }
    };
  }());

export default MessageService;
