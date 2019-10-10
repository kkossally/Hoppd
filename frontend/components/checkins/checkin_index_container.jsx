import React from 'react';
import { connect } from 'react-redux';
import { fetchCheckins, deleteCheckin } from '../../actions/checkin_actions';
import { openModal } from '../../actions/modal_actions'; // for opening the checkin show and delete
import CheckinIndexItem from './checkin_index_item';

const msp = state => {
  return {
    checkins: Object.values(state.entities.checkins),
  }
}

const mdp = dispatch => {
  return {
    fetchCheckins: () => dispatch(fetchCheckins()),
    deleteCheckin: id => dispatch(deleteCheckin(id)),
  }
}

class CheckinIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCheckins();
  }

  render() {
    const checkins = this.props.checkins.reverse().map(checkin => {
      return (
        <CheckinIndexItem key={checkin.id} checkin={checkin} />
      )
    });
    return (
      <div className="checkin-list">
        <h3>Global Check-ins</h3>
        {checkins}
      </div>
    )
  }
}

export default connect(msp, mdp)(CheckinIndex)