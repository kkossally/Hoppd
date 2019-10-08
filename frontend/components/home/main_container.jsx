import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util'; 
import Header from './header';
import Content from './content';

const MainComponent = () => {

    return (
      /* Eventually, this page is going to have to be switch between auth and 
      protected versions of the header. Visitors will be able to visit the beer
      search results, show page and top rated components without logging in */
      <div>
        <Header />
        <div className="page">
          <Switch>
            <Route path="/beers" component={Content} /> {/*This will become the search results page*/}
            {/* This will contain more routes to other pages besides beer show */}
          </Switch>

        </div>
        {/* <Footer></Footer> */}
      </div>
    )

}

export default MainComponent;