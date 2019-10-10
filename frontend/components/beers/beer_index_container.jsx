import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchBeers } from '../../actions/beer_actions';
import { openModal } from '../../actions/modal_actions';
import BeerIndexItem from './beer_index_item';

const msp = state => {
  const filteredBeers = state.ui.filteredBeers.map(id => parseInt(id));
  const allBeers = Object.values(state.entities.beers);
  return {
    beers: allBeers,
    filteredBeers: allBeers.filter(beer => filteredBeers.includes(beer.id)),
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
    this.state = { query: "", filtered: this.props.filteredBeers };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchBeers();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.filteredBeers !== this.props.filteredBeers) {
      this.setState({ filtered: this.props.filteredBeers })
    }
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
    let beers;
    if (this.state.filtered) {

      beers = this.state.filtered.map(beer => {
        return (
          <BeerIndexItem key={beer.id} beer={beer} />
          )
        });
    } else {
      beers = [];
    }
        
    return (
      <div>
        <div className="big-searchbar">
          <form onSubmit={this.handleChange} > 
            <div className="search-container">
              <img src={window.searchIconURL} alt="Search Icon" />
              <input type="text" className="textbox" placeholder="Search for beers" onChange={this.update('query')}  />
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

export default withRouter(connect(msp, mdp)(BeerIndex));