import React from 'react';
import { Link } from 'react-router-dom';

const BeerIndexItem = ({ beer }) => {
  const { name, brewery, style, abv, ibu, logoURL } = beer;
  return (
    <div className="beer-info-box">
      <div className="basic-info">
        <div className="basic-info-logo-box">
          <Link to={`/beers/${beer.id}`}>
            <img className="logo" src={logoURL} alt="Beer Logo" />
          </Link>
        </div>
        <div className="name">
          <Link to={`/beers/${beer.id}`}><h1>{name}</h1></Link>
          <h2>{brewery}</h2>
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