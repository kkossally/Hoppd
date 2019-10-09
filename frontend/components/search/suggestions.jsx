import React from 'react';
// import { connect } from 'react-redux';
// import { fetchBeers } from '../../actions/beer_actions';

class Suggestions extends React.Component {
  constructor(props) {
    super(props);
    this.filteredBeers = [];
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.value !== "") {
      this.filteredBeers = this.props.beers.filter(beer => {
        return beer.name.toLowerCase().includes(event.target.value.toLowerCase());
      })
    } else {
      this.filteredBeers = [];
    }
    this.setState({ filtered: this.filteredBeers })
  }

  render() {
    const beerSuggestions = this.filteredBeers.map(beer => {
      return <li key={beer.id} >{beer.name}</li>
    })
    return (
      <div className="search-container">
        <input type="text" className="textbox" placeholder="Search for beers" onChange={this.handleChange}/>
        <ul className="search-results">
          {beerSuggestions}
        </ul>
      </div>
    )
  }

}

export default Suggestions;