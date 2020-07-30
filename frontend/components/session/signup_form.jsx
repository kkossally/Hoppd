import React from 'react';
import { Link } from 'react-router-dom';
import { range } from 'lodash';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: "",
      email: "", 
      password: "",
      password_confirmation: "",
      f_name: "",
      l_name: "",
      year: "",
      month: "",
      day: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dateNumeralList = this.dateNumeralList.bind(this);
  }

  dateNumeralList(min, max) {
    return range(min, max + 1).map(num => {
      return num < 10 ? '0' + num : num;
    }).map(num => {
      return <option key={num} value={num}>{num}</option>
    })
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field){
    return event => {
      event.target.classList.remove('empty');
      this.setState({ [field]: event.target.value })
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.clearErrors();
    const {year, month, day} = this.state;
    const birthday = year + month + day;
    const user = Object.assign({}, this.state, { birthday });
    if (this.state.password === this.state.password_confirmation) {
      this.props.submitForm(user).then(this.props.closeModal);
    } else {
      this.props.dispatchErrors(['Please confirm your password.']);
    }
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
    } else {
      return <p className="field-req" >All fields below are required.</p>
    }
  }

  render() {
    const {username, email, password, password_confirmation, f_name, l_name } = this.state;
    return (
      // <div className="session masthead">

        <div className="masthead-inner signup-box">
          <Link className="logo-box" to='/'>
            <h1>Hoppd</h1>
            <h3>Be hoppy</h3>
          </Link>

          {this.renderErrors()}

          <form onSubmit={this.handleSubmit}>

            <div className="info-section">
              <input className="textbox" type="text" value={username} placeholder='Username' onChange={this.update('username')} />   
              <input className="textbox" type="text" value={email} placeholder='Email Address' onChange={this.update('email')} />
              
              <p className="pass-req">Avoid using common phrases and include a mix of letter and numbers.</p>
            
              <input className="textbox" type="password" value={password} placeholder='Password' onChange={this.update('password')} />
              <input className="textbox" type="password" value={password_confirmation} placeholder='Repeat Password' onChange={this.update('password_confirmation')} />
            </div>
            
            
            <div className="info-section">
              <input className="textbox" type="text" value={f_name} placeholder='First Name' onChange={this.update('f_name')} />
              <input className="textbox" type="text" value={l_name} placeholder='Last Name' onChange={this.update('l_name')} />
            </div>

            <div className="select-date">
              <label>Birthday:</label>

              <span className="select-span">
                <select name="month" className="empty" onChange={this.update('month')}>
                  <option value="selected">MM</option>
                  {this.dateNumeralList(1, 12)}
                </select>
              </span>

              <span className="select-span">
                <select name="day" className="empty" onChange={this.update('day')}>
                  <option value="selected">DD</option>
                  {this.dateNumeralList(1, 31)}
                </select>
              </span>

              <span className="select-span">
                <select name="day" className="empty" onChange={this.update('year')}>
                  <option value="selected">YYYY</option>
                  {this.dateNumeralList(1900, 2010).reverse()}
                </select>
              </span>

            </div>

            <p className="terms">You must be of legal drinking age to join Hoppd.</p>

            <input className="button submit" type="submit" value={this.props.formType} />
            
          </form>
        </div>

      // </div>
    )
  }
}

export default SignupForm;