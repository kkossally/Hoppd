import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { fetchBeer } from '../../actions/beer_actions';

const BeerIndexItem = ({ beer }) => {
  const { name, brewery_id, style, abv, ibu } = beer;
  return(
    // <Link key={beer.id} to={{
    //   pathname: `/beers/${beer.id}`,
    //   state: beer,
    // }}>{beer.name}</Link>
    <div className="beer-info-box">
      <div className="basic-info">
        <Link to={`/beers/${beer.id}`}><img className="logo" src="#" alt="Beer Logo" /></Link>
        <div className="name">
          <Link to={`/beers/${beer.id}`}><h1>{name}</h1></Link>
          <h2>Brewery: {brewery_id}</h2>
          <h3>{style}</h3>
        </div>
      </div>

      <div className="details-small">
        <span>{abv}% ABV</span>
        <span>{ibu} IBU</span>
        <span>Rating</span>
      </div>
    </div>
  )
}

export default BeerIndexItem;