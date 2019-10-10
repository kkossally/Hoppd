import React from 'react';
import { connect } from 'react-redux';
import { fetchBeers } from '../../actions/beer_actions';
import { openModal } from '../../actions/modal_actions';
import BeerIndexItem from './beer_index_item';

const msp = state => {
  return {
    beers: Object.values(state.entities.beers),
  }
}

const mdp = dispatch => {
  return {
    fetchBeers: () => dispatch(fetchBeers()),
    createBeer: (
      <button onClick={() => dispatch(openModal('createBeer'))}>
        Add it here!
      </button>
    ),
  }
}

class BeerIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "", filtered: [] };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchBeers();
  }

  update(field) {
    return event => this.setState({ [field]: event.target.value });
  }

  handleChange() {
    let filteredBeers;
    if (this.state.query !== "") {
      filteredBeers = this.props.beers.filter(beer => {
        return beer.name.toLowerCase().includes(this.state.query.toLowerCase());
      })
    } else {
      filteredBeers = [];
    }
    this.setState({ filtered: filteredBeers });
  }

  render() {
    const beers = this.state.filtered.map(beer => {
      return (
        <BeerIndexItem key={beer.id} beer={beer} />
      )
    });
    
    return (
      <div>
        <div className="big-searchbar">
          <form onSubmit={this.handleChange} > 
            <div className="search-container">
              <img src={window.searchIconURL} alt="Search Icon" />
              <input type="text" className="textbox" placeholder="Search for beers" onChange={this.update('query')} />
            </div>

            <input className="submit" type="submit" value="Search"/>
          </form>
        </div>

        <div className="beer-list">
          {beers}
          <div className="add-beer">
            <p>Don't see the beer you're looking for?</p>
            {this.props.createBeer}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(msp, mdp)(BeerIndex);