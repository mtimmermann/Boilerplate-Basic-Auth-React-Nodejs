import React, { Component } from 'react';

import MessageService from '../../services/message-service';

class Private2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      error: ''
    };

    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
    MessageService.getMessage2((err, data) => {
      if (err) {
        this.setState({ message: '', error: err });
      } else {
        this.setState({ message: data.message, error: '' });
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Private 2 Page</h1>
        <div>{this.state.message}</div>
        <div>{this.state.error}</div>
      </div>
    );
  }
}

export default Private2;
