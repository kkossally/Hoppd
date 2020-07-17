import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
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

  demoLogin() {
    this.props.submitForm({ username: "jbarnes", password: "hiphop" });
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
      return (
        <div className="errors">
          <ul>
            {this.props.errors.map((error, index) => {
              return (
                <li key={`error-${index}`}>
                  {error}
                </li>
              )
            })}
          </ul>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="session masthead">
        <div className="masthead-inner login-box" >
          <Link className="logo-box" to='/'>
            <h1>Hoppd</h1>
            <h3>Be hoppy</h3>
          </Link>
          
          <button className="button demo-login" onClick={this.demoLogin}>Demo Login</button>

          <form onSubmit={this.handleSubmit}>
            
            {this.renderErrors()}

            <input className="textbox" type="text" value={this.state.username} placeholder='Username' onChange={this.update('username')}/>
            <input className="textbox" type="password" value={this.state.password} placeholder='Password' onChange={this.update('password')}/>
            <input className="button submit" type="submit" value={this.props.formType}/>
          </form>

          <section className="bottom">
            <h3>New around here? {this.props.signUpLink}</h3>
          </section>
        </div>
      </div>
    )
  }
}

export default LoginForm;