import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util'; 
import Header from './header';
import CreateBeerFormContainer from '../beers/create_beer_form_container';
import EditBeerFormContainer from '../beers/edit_beer_form_container';
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
            <ProtectedRoute exact path="/beers/new" component={CreateBeerFormContainer} />
            {/* <ProtectedRoute exact path="/beers/:beerId/edit" component={EditBeerFormContainer} /> */}
            <Route path="/beers" component={Content} />
          </Switch>

        </div>
        {/* <Footer></Footer> */}
      </div>
    )

}

export default MainComponent;