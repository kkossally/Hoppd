import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteFavorite } from '../../actions/favorite_actions';

const msp = state => {
  const favoriteBeerIds = state.entities.users[state.session.id].favorite_beer_ids;
  return {
    favoriteBeers: Object.values(state.entities.beers).filter(beer => favoriteBeerIds.includes(beer.id)),
  }
}

// const FavoritesContainer = (props) => {
class Favorites extends React.Component {
  constructor (props) {
    super(props);
  }
  
  componentDidUpdate() {

  }

  render() {
    const beers = this.props.favoriteBeers.map(beer => {
      return (
        <div key={beer.id} className="beer-info-box">
          <div className="basic-info">
            <div className="basic-info-logo-box">
              <Link to={`/beers/${beer.id}`}><img className="logo" src={beer.logoURL} alt="Beer Logo" /></Link>
            </div>
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
}

export default connect(msp)(Favorites)