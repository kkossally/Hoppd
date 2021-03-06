import React from 'react';

const Footer = () => {
  return (
    <footer>
      <nav>
        <a href="">Beers</a>
        <a href="">Breweries</a>
      </nav>

      <div className="social" >
        <a href="http://www.linkedin.com/in/kkossally">
          <img src={window.linkedInURL} alt="LinkedIn"/>
        </a>
        <a href="https://github.com/kkossally">
          <img src={window.gitHubURL} alt="GitHub"/>
        </a>
        <a href="https://angel.co/u/kkossally">
          <img src={window.angelListURL} alt="AngelList"/>
        </a>
      </div>
    </footer>
  )
}

export default Footer;