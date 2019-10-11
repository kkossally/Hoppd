import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteFavorite } from '../../actions/favorite_actions';

const msp = state => {
  const favorite_beer_ids = state.entities.users[state.session.id].favorite_beer_ids;
  return {
    favoriteBeers: Object.values(state.entities.beers).filter(beer => favorite_beer_ids.includes(beer.id)),
  }
}

const mdp = dispatch => {
  return {
    deleteFavorite: id => dispatch(deleteFavorite(id)),
  }
}

const FavoritesContainer = (props) => {
  const beers = props.favoriteBeers.map(beer => {
    return (
      <div key={beer.id} className="beer-info-box">
        <div className="basic-info">
          <Link to={`/beers/${beer.id}`}><img className="logo" src={beer.logoURL} alt="Beer Logo" /></Link>
          <div className="name">
            <Link to={`/beers/${beer.id}`}><h1>{beer.name}</h1></Link>
            <h2>{beer.brewery}</h2>
          </div>
        </div>
      </div>
    )
  });
  return (
    <div>
      {beers}
    </div>
  )
}

export default connect(msp, mdp)(FavoritesContainer)