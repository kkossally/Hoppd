import React from 'react';
import { Route } from 'react-router-dom';
import BeerIndexContainer from '../beers/beer_index_container';
import BeerShow from '../beers/beer_show';

const Content = () => {
  return (
    <div className="content">

      <div className="main-content">
        <Route exact path="/beers" component={BeerIndexContainer} />
        <Route exact path="/beers/:beerId" component={BeerShow} />
      </div>

      <div className="sidebar"></div>

    </div>
  )
}

export default Content;