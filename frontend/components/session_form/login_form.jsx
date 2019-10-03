import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" }
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
    const user = Object.assign({}, this.state)
    this.props.clearErrors();
    this.props.submitForm(user);
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

  render() {
    return (
      <div className="login-box" >
        <form onSubmit={this.handleSubmit}>
          <Link to='/'>
            <h1>Hoppd</h1>
            <h4>Drink Like There's No Tomorrow</h4>
          </Link>
          {this.renderErrors()}

          <input type="text" value={this.state.username} placeholder='Username' onChange={this.update('username')}/>
          <input type="password" value={this.state.password} placeholder='Password' onChange={this.update('password')}/>
          <input type="submit" value={this.props.formType}/>

          <h3>New around here? {this.props.signUpLink}</h3>
        </form>
      </div>
      
    )
  }
}

export default LoginForm;