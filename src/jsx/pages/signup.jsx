import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormValidationErrors from '../components/form-validation-errors';
import FormSubmitErrors from '../components/form-submit-errors';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: [],
      user: {
        name: '',
        email: '',
        password: ''
      },
      validation: {
        name: {
          valid: false,
          touched: false,
          message: 'Name is required'
        },
        email: {
          valid: false,
          touched: false,
          message: 'Email is invalid'
        },
        password: {
          valid: false,
          touched: false,
          message: 'Password must be a mininum of 8 characters'
        },
        passwordConfirm: {
          valid: false,
          touched: false,
          message: 'Password confirm does not match.'
        },
        formValid: false
      }
    };

    this.submit = this.submit.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }

  submit(evt) {
    evt.preventDefault();

    // create a string for an HTTP body message
    const name = encodeURIComponent(this.state.user.name);
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `name=${name}&email=${email}&password=${password}`;

    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/signup');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {

        this.setState({ errors: [] });

        // Redirect to login
        this.props.history.push('/signin');
      } else {

        const errors = [];
        if (xhr.response && xhr.response.message) {
          errors.push(xhr.response.message); // Summary
          const errObj = xhr.response.errors ? xhr.response.errors : {};
          Object.keys(errObj).forEach((key) => {
            errors.push(errObj[key]);
          });
        } else {
          errors.push(`${xhr.status} ${xhr.statusText}`);
        }

        this.setState({ errors: errors }); // eslint-disable-line object-shorthand
      }
    });
    xhr.send(formData);
  }

  changeInput(evt) {
    const field = evt.target.name;
    const value = evt.target.value;
    const user = this.state.user;
    user[field] = value;

    this.setState({
      errors: [],
      user: user // eslint-disable-line object-shorthand
    });
    this.validate(field, value);
  }

  validate(field, value) {
    const validation = this.state.validation;
    if (validation[field]) validation[field].touched = true;

    switch (field) {
      case 'name':
        validation.name.valid = value.length > 0;
        break;
      case 'email':
        validation.email.valid = (/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i).test(value);
        break;
      case 'password':
        validation.password.valid = value.length >= 8;
        break;
      case 'passwordConfirm':
        validation.passwordConfirm.valid = value === this.state.user.password;
        break;
    }

    validation.formValid = true;
    Object.keys(validation).forEach((key) => {
      if (typeof validation[key].valid === 'boolean' && !validation[key].valid) {
        validation.formValid = false;
      }
    });

    this.setState({ validation: validation }); // eslint-disable-line object-shorthand
  }

  render() {
    const validation = this.state.validation;
    return (
      <div>
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4 form-header">
            <h4>Sign Up</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <form className="form-horizontal" action="/" onSubmit={this.submit}>
              <div className={'form-group '+ (!validation.name.valid && validation.name.touched ? 'has-error' : '')}>
                <label className="col-sm-2 control-label" htmlFor="name">Name</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="name" name="name" placeholder="Name" onChange={this.changeInput} />
                </div>
              </div>
              <div className={'form-group '+ (!validation.email.valid && validation.email.touched ? 'has-error' : '')}>
                <label className="col-sm-2 control-label" htmlFor="email">Email</label>
                <div className="col-sm-10">
                  <input type="email" className="form-control" id="email" name="email" placeholder="Email" onChange={this.changeInput} />
                </div>
              </div>
              <div className={'form-group '+ (!validation.password.valid && validation.password.touched ? 'has-error' : '')}>
                <label className="col-sm-2 control-label" htmlFor="password">Password</label>
                <div className="col-sm-10">
                  <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={this.changeInput} />
                </div>
              </div>
              <div className={'form-group '+ (!validation.passwordConfirm.valid && validation.passwordConfirm.touched ? 'has-error' : '')}>
                <label className="col-sm-2 control-label" htmlFor="passwordConfirm">Confirm</label>
                <div className="col-sm-10">
                  <input type="password" className="form-control" id="passwordConfirm" name="passwordConfirm" placeholder="Confirm Password" autoComplete="off" onChange={this.changeInput} />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button disabled={!validation.formValid} type="submit" className="btn btn-primary">Submit</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <FormValidationErrors validation={validation} />
            <FormSubmitErrors errors={this.state.errors} />
          </div>
        </div>
      </div>
    );
  }
}
SignUp.propTypes = {
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default SignUp;
