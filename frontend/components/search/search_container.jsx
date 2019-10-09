import React from 'react';
import { connect } from 'react-redux';
import { fetchBeers } from '../../actions/beer_actions';
import Suggestions from './suggestions';

const msp = state => {
  return {
    beers: Object.values(state.entities.beers),
  }
}

const mdp = dispatch => {
  return {
    fetchBeers: () => dispatch(fetchBeers()),
  }
}

class SearchContainer extends React.Component {
  componentDidMount() {
    this.props.fetchBeers();
  }

  render() {
    // const beers = this.props.beers.map(beer => {
    //   return <li key={beer.id} >{beer}</li>
    // })

    return (

        <Suggestions beers={this.props.beers} />
    )
  }
}
export default connect(msp, mdp)(SearchContainer);