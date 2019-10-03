import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: "",
      email: "", 
      password: "",
      passwordConfirmation: "",
      f_name: "",
      l_name: "",
      year: "",
      month: "",
      day: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return event => this.setState({ [field]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.clearErrors();
    const {year, month, day} = this.state;
    const birthday = year + month + day;
    const user = Object.assign({}, this.state, { birthday });
    this.props.submitForm(user);
    // if (this.state.password !== this.state.passwordConfirmation) {
    //   this.props.dispatchErrors(['Please confirm your password.']);
    // }
  }


  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, index) => {
          return (
            <li key={`error-${index}`}>
              {error}
            </li>
          )
        })}
      </ul>
    )
  }

  renderSignUpLink() {
    return this.props.formType === 'Sign In' ? (<h3>New around here? {this.props.signUpLink}</h3>) : null;
  }

  render() {
    const {username, email, password, passwordConfirmation, f_name, l_name, month, day, year} = this.state;
    return (
      <div className="masthead-inner">
        <form onSubmit={this.handleSubmit}>
          <Link to='/'>
            <h1>Hoppd</h1>
            <h4>Drink Like There's No Tomorrow</h4>
          </Link>
          {this.renderErrors()}
          <input type="text" value={username} placeholder='Username' onChange={this.update('username')} />
          <input type="text" value={email} placeholder='Email Address' onChange={this.update('email')} />

          <input type="password" value={password} placeholder='Password' onChange={this.update('password')} />
          <input type="password" value={passwordConfirmation} placeholder='Repeat Password' onChange={this.update('passwordConfirmation')} />

          <input type="text" value={f_name} placeholder='First Name' onChange={this.update('f_name')} />
          <input type="text" value={l_name} placeholder='Last Name' onChange={this.update('l_name')} />

          <label>
            Birthday:
            <input type="text" value={month} placeholder='MM' onChange={this.update('month')} />
            <input type="text" value={day} placeholder='DD' onChange={this.update('day')} />
            <input type="text" value={year} placeholder='YYYY' onChange={this.update('year')} />
          </label>

          <input type="submit" value={this.props.formType} />

          {this.renderSignUpLink()}
        </form>
      </div>
    )
  }
}

export default SignupForm;