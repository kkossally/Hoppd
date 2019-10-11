import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import { debounce } from 'lodash';
// import { connect } from 'react-redux';
// import { fetchBeers } from '../../actions/beer_actions';

class Suggestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filtered: [], query: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.searchContainer = React.createRef();
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
    this.setState({ filtered: filteredBeers, query: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();


    this.searchContainer.current.blur();
    
    this.setState({ query: "" });
  
    this.props.receiveFilteredBeers(Object.values(this.state.filtered).map(beer => beer.id));

    this.props.history.push('/beers');

    // this.props.history.push({ pathname: `/search?query=${this.state.query}`, state: { beers: this.state.filtered } });
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
      <form className="search-container" onSubmit={this.handleSubmit}>
        <input type="text" className="textbox" ref={this.searchContainer} placeholder="Search for beers" value={this.state.query} onChange={this.handleChange} />
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

export default withRouter(Suggestions);