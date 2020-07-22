import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createCheckin, clearCheckinErrors } from '../../actions/checkin_actions';
import { closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  const beerId = ownProps.beerId;
  return {
    errors: state.errors.checkins,
    checkin: { body: "", rating: 0, beer_id: beerId },
  }
}

const mdp = dispatch => {
  return {
    createCheckin: checkin => dispatch(createCheckin(checkin)),
    clearErrors: () => dispatch(clearCheckinErrors()),
    closeModal: () => dispatch(closeModal()),
  }
}

class Checkin extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.checkin;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return event => this.setState({ [field]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.clearErrors();
    this.props.createCheckin(this.state)
      .then(() => this.props.history.push('/checkins'))
      .then(() => this.props.closeModal());
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
      <form className="checkin-form" onSubmit={this.handleSubmit}>
        <div onClick={this.props.closeModal} className="close-x">X</div>

          {this.renderErrors()}

          {/* <div className="review"> */}
            <textarea className="textbox" placeholder="How was it? Leave a note" value={this.state.body} onChange={this.update('body')}></textarea>
            <br/>
            <input type="range" min="0" max="5" step=".25" value={this.state.rating} onChange={this.update('rating')} list="tickmarks"/>
            <datalist id="tickmarks">
              <option value="0"></option>
              {/* <option value=".25"></option> */}
              {/* <option value=".5" ></option> */}
              {/* <option value=".75"></option> */}
              <option value="1" ></option>
              {/* <option value="1.25"></option> */}
              {/* <option value="1.5"></option> */}
              {/* <option value="1.75"></option> */}
              <option value="2" ></option>
              {/* <option value="2.25"></option> */}
              {/* <option value="2.5"></option> */}
              {/* <option value="2.75"></option> */}
              <option value="3" ></option>
              {/* <option value="3.25"></option> */}
              {/* <option value="3.5"></option> */}
              {/* <option value="3.75"></option> */}
              <option value="4" ></option>
              {/* <option value="4.25"></option> */}
              {/* <option value="4.5"></option> */}
              {/* <option value="4.75"></option> */}
              <option value="5"></option>
            </datalist>
          {/* </div> */}

        <input className="submit" type="submit" value="Check in!"/>
      </form>
    )
  }

}

export default connect(msp, mdp)(withRouter(Checkin))