import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <>
    <div className="splash masthead">

      <div className="masthead-content">
        <section>
          <img className="ut-logo-bottles" src={window.utLogoBottlesURL} alt="Logo"/>
          <h1>Hoppd</h1>
          <h3>Be hoppy</h3>
          <div className="short-rule"/>
          <h2>Discover and share the best beer.</h2>
        </section>

        <section className="masthead-content-right">
          <img className="cellphone-image" src={window.cellphoneImageURL} alt="Cellphone Image"/>
        </section>
      </div>

    </div> 

    <div className="splash-search">
      
    </div>

    <section className="features primary">

    </section>

      <section className="features secondary">

    </section>

    <section className="features tertiary">

    </section>

    </>
  )
}