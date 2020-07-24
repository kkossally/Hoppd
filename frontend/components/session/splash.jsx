import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

const mdp = dispatch => {
  return {
    login: () => dispatch(openModal('login')),
    signup: () => dispatch(openModal('signup'))
  }
}

const Splash = (props) => {
  return (
    <>
    <div className="splash masthead">

      <header className="splash">
        <div className="button" onClick={props.signup}>Create An Account</div>
        <div className="button" onClick={props.login}>Sign In</div>
      </header>

      <div className="masthead-content">
        <section className="left">
          <img src={window.uncaskdLogoURL} alt="Logo"/>
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

export default connect(null, mdp)(Splash);