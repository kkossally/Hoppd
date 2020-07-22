import React from 'react';
import { Link } from 'react-router-dom';

const CheckinIndexItem = ({ checkin }) => {
  const { author, beer: { id, name, brewery, logoURL } , body, rating } = checkin;
  const beerNameLink = <Link to={`/beers/${id}`}>{name}</Link>;
  return (
    <div className="checkin-detail">

      {/* profile image icon goes here! */}

      <div className="top">
        <span>
          <p>{author} had a {beerNameLink} by {brewery}.</p>
          <Link to={`/beers/${id}`}><img className="logo" src={logoURL} alt="Beer Logo" /></Link>
        </span>
        <div className="rating-comment">
          <span>
            <p>{body}</p>
          </span>
          <span>
           {rating}
          </span>
        </div>
      </div>


    </div>
  )
}

export default CheckinIndexItem;