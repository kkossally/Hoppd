import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return event => this.setState({ [field]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.submitForm(user).then(this.props.history.push('/'));
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
    return (
      <form onSubmit={this.handleSubmit}>
        <Link to='/'>
          <h1>Hoppd</h1>
          <h4>Drink Like There's No Tomorrow</h4>
        </Link>
        {this.renderErrors()}
        <label>
          Username
          <input type="text" value={this.state.username} onChange={this.update('username')}/>
        </label>

        <label>
          Password
          <input type="password" value={this.state.password} onChange={this.update('password')}/>
        </label>

        <input type="submit" value={this.props.formType}/>

        {this.renderSignUpLink()}
      </form>
    )
  }
}

export default SessionForm;