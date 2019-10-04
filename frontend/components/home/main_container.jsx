import React from 'react';
import Header from './header';


const MainComponent = (props) => {

    return (
      <div>
        <Header logout={props.logout}></Header>
        <div className="page">
          {/* <MainComponent></MainComponent> */}
        </div>
        {/* Sidebar */}
        {/* <Footer></Footer> */}
      </div>
    )

}

export default MainComponent;