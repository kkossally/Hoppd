import React from 'react';
import { connect } from 'react-redux';
import { fetchBeer, deleteBeer } from '../../actions/beer_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  const beer = state.entities.beers[ownProps.match.params.beerId] || {};
  return {
    beer,
  }
}

const mdp = dispatch => {
  return {
    fetchBeer: id => dispatch(fetchBeer(id)),
    deleteBeer: id => dispatch(deleteBeer(id)),
    editBeer: () => dispatch(openModal('editBeer')),
  }
}

class BeerShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchBeer(this.props.match.params.beerId);
  }

  componentDidUpdate(prevProps) {
    const currentBeerId = this.props.match.params.beerId;
    if (currentBeerId !== prevProps.match.params.beerId) {
      this.props.fetchBeer(currentBeerId);
    }
  }

  handleDelete() {
    // debugger
   this.props.deleteBeer(this.props.beer.id).then(() => this.props.history.push('/'));
  }

  render() {
    const { id, name, style, abv, ibu, description, brewery_id, logoURL } = this.props.beer;
    return (
      <div className="beer-info-box">
        <div className="top">
          <div className="info">
            <div className="basic-info">
              <img className="logo" src={logoURL} alt="Beer Logo"/>
              <div className="name">
                <h1>{name}</h1>
                <h2>Brewery: {brewery_id}</h2>
                <h3>{style}</h3>
              </div>
            </div>
            <div className="stat-box">
              <div>
                <span>Total</span>
                <span>461,346</span>
              </div>
              <div>
                <span>Unique</span>
                <span>343,021</span>
              </div>
              <div>
                <span>Monthly</span>
                <span>3,425</span>
              </div>
              <div>
                <span>You</span>
                <span>1</span>
              </div>
            </div>
          </div>
        </div>

        <div className="details">
          <span>{abv}% ABV</span>
          <span>{ibu} IBU</span>
          <span>Rating</span>
          <span>307,929 Ratings</span>
        </div>

        <div className="bottom">
          <div>{description}</div>
          <div className="actions">
            <div className="check-icon"> 
              <img src={window.checkIconURL} alt="Check Icon"/>
            </div>
            <div className="bookmark-icon">
              <img src={window.plusIconURL} alt="Plus Icon"/>
            </div>
            <div className="edit-icon" onClick={() => this.props.editBeer()}>
              <img src={window.pencilIconURL} alt="Edit Icon" />
            </div>
            <div className="delete-icon" onClick={this.handleDelete}>
              <img src={window.deleteIconURL} alt="Delete Icon" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(msp, mdp)(BeerShow);