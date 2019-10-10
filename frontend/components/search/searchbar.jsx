import React from 'react';
import { connect } from 'react-redux';
import { fetchBeers, receiveFilteredBeers } from '../../actions/beer_actions';
import Suggestions from './suggestions';

const msp = state => {
  return {
    beers: Object.values(state.entities.beers),
  }
}

const mdp = dispatch => {
  return {
    fetchBeers: () => dispatch(fetchBeers()),
    receiveFilteredBeers: filteredBeers => dispatch(receiveFilteredBeers(filteredBeers)),
  }
}

class SearchBar extends React.Component {
  componentDidMount() {
    this.props.fetchBeers();
  }

  render() {
    return (
      <Suggestions beers={this.props.beers} receiveFilteredBeers={this.props.receiveFilteredBeers} />
    )
  }
}
export default connect(msp, mdp)(SearchBar);