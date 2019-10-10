import React from 'react';
import { connect } from 'react-redux';
import { createCheckin, clearCheckinErrors } from '../../actions/checkin_actions';
import { closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  const splitPath = ownProps.location.pathname.split('/');
  const beerId = splitPath[splitPath.length - 1];
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
      // .then(() => this.props.history.push('/'))
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

          <textarea className="textbox" placeholder="How was it? Leave a note" value={this.state.body} onChange={this.update('body')}></textarea>

          <input type="range" min="0" max="5" step=".25" value={this.state.rating} onChange={this.update('rating')} />

        <input className="submit" type="submit" value="Check in!"/>
      </form>
    )
  }

}

export default connect(msp, mdp)(Checkin)
