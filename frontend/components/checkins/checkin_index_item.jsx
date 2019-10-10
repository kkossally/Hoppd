import React from 'react';

const CheckinIndexItem = ({ checkin }) => {
  const { author, beer: { name, brewery } , body, rating } = checkin;
  return (
    <div className="checkin-detail">
      <span>
        <p>{author} had a {name} by {brewery}.</p>
      </span>
      <span>
        <p>{body}</p>
      </span>
      <span>
        {rating}
      </span>
    </div>
  )
}

export default CheckinIndexItem;