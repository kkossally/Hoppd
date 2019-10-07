import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './header';
import BeerIndexContainer from '../beers/beer_index_container';
import BeerShow from '../beers/beer_show';
import CreateBeerFormContainer from '../beers/create_beer_form_container';


const MainComponent = (props) => {

    return (
      <div>
        <Header logout={props.logout}></Header>
        <div className="page">

          <Switch>
            <Route exact path="/beers/new" component={CreateBeerFormContainer} />
              
            <div className="content">
              
              <div className="main-content">
                <Route exact path="/beers" component={BeerIndexContainer} />
                <Route exact path="/beers/:beerId" component={BeerShow} />
              </div>

              <div className="sidebar"></div>
              
            </div>

          </Switch>

        </div>
        {/* Sidebar */}
        {/* <Footer></Footer> */}
      </div>
    )

}

export default MainComponent;