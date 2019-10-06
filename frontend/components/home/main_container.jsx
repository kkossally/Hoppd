import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './header';
import BeerIndexContainer from '../beers/beer_index_container';
import BeerShow from '../beers/beer_show';


const MainComponent = (props) => {

    return (
      <div>
        <Header logout={props.logout}></Header>
        <div className="page">
          <Switch>
            <Route path="/beers/:beerId" component={BeerShow} />
            <Route path="/beers" component={BeerIndexContainer} />
          </Switch>
        </div>
        {/* Sidebar */}
        {/* <Footer></Footer> */}
      </div>
    )

}

export default MainComponent;