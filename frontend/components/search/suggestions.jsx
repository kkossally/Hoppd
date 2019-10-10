import React from 'react';
import { Link } from 'react-router-dom';
// import { debounce } from 'lodash';
// import { connect } from 'react-redux';
// import { fetchBeers } from '../../actions/beer_actions';

class Suggestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filtered: [] };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    let filteredBeers;
    if (event.target.value !== "") {
      filteredBeers = this.props.beers.filter(beer => {
        return beer.name.toLowerCase().includes(event.target.value.toLowerCase());
      })
    } else {
      filteredBeers = [];
    }
    this.setState({ filtered: filteredBeers });
  }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   this.props.submitForm(this.state).then(action => this.props.history.push(`/beers/${action.beer.id}`)).then(() => this.props.closeModal());
  // }
  

  render() {
    const beerSuggestions = this.state.filtered.map(beer => {
      return (
        // <div key={beer.id} className="beer-info-box">
        //   < Link to={`/beers/${beer.id}`}><img src={beer.logoURL} alt="Beer Logo" /></Link>
        //   <div className="name">
        //     <Link to={`/beers/${beer.id}`}>
        //       <h1>{beer.name}</h1>
        //       <h2>Brewery: {beer.brewery_id}</h2>  
        //     </Link>    
        //   </div>
        // </div>
        <li key={beer.id} >
          <Link to={`/beers/${beer.id}`}>{beer.name}</Link>
        </li>
      )
    });

    return (
      <form className="search-container">
        <input type="text" className="textbox" placeholder="Search for beers" onChange={this.handleChange} />
        <img src={window.searchIconURL} alt="Search Icon"/>
        {/* <div className="search-results">
          {beerSuggestions}
        </div> */}
        <ul className="search-results">
          {beerSuggestions}
        </ul>
      </form>
    )
  }

}

export default Suggestions;