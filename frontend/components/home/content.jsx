import React from 'react';
import { Route } from 'react-router-dom';
import BeerIndexContainer from '../beers/beer_index_container';
import BeerShow from '../beers/beer_show';
import CheckinIndexContainer from '../checkins/checkin_index_container';

const Content = () => {
  return (
    <div className="content">

      <div className="main-content">
        <Route exact path="/checkins" component={CheckinIndexContainer} />
        <Route exact path="/beers" component={BeerIndexContainer} />
        <Route exact path="/beers/:beerId" component={BeerShow} />
      </div>

      <div className="sidebar"></div>

    </div>
  )
}

export default Content;