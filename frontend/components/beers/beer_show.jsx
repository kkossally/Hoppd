import React from 'react';
import { connect } from 'react-redux';
import { round } from 'lodash';
import { fetchBeer, deleteBeer } from '../../actions/beer_actions';
import { createFavorite } from '../../actions/favorite_actions';
import { openModal } from '../../actions/modal_actions';
import CheckinIndexContainer from '../checkins/checkin_index_container';

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
    createFavorite: favorite => dispatch(createFavorite(favorite)),
    editBeer: () => dispatch(openModal('editBeer')),
    checkin: () => dispatch(openModal('checkin')),
  }
}

class BeerShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.calculateRating = this.calculateRating.bind(this);
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
   this.props.deleteBeer(this.props.beer.id).then(() => this.props.history.push('/'));
  }

  // calculateStats(checkins) {
  //   if (checkins !== undefined && checkins.length > 0) {
  //     const summer = (acc, curr) => acc + curr;
  //     let avg = checkins.map(checkin => checkin.rating).reduce(summer, 0) / checkins.length;
  //     return [checkins.length, Math.round(checkins.length * .74), checkins.length, round(avg, 2)];
  //   } else {
  //     return ["N/A", "N/A", "N/A", "N/A"];
  //   }
  // }

  calculateRating(checkins) {
    if (checkins !== undefined && checkins.length > 0) {
      const summer = (acc, curr) => acc + curr;
      let avg = checkins.map(checkin => checkin.rating).reduce(summer, 0) / checkins.length;
      return [checkins.length, round(avg, 2)];
    } else {
      return ["N/A", "N/A"];
    }
  }

  render() {
    const { id, name, style, abv, ibu, description, brewery, logoURL, checkins } = this.props.beer;
    const checkin_ids = checkins ? checkins.map(checkin => checkin.id) : [];
    const [total, rating] = this.calculateRating(checkins);
    return (
      <>
      <div className="beer-info-box">
        <div className="top">
          <div className="info">
            <div className="basic-info">
              <img className="logo" src={logoURL} alt="Beer Logo"/>
              <div className="name">
                <h1>{name}</h1>
                <h2>Brewery: {brewery}</h2>
                <h3>{style}</h3>
              </div>
            </div>
            {/* <div className="stat-box">
              <div>
                <span>Total</span>
                <span>{total}</span>
                <span>461,346</span>
              </div>
              <div>
                <span>Unique</span>
                <span>{unique}</span>
                <span>343,021</span>
              </div>
              <div>
                <span>Monthly</span>
                <span>{monthly}</span>
                <span>3,425</span>
              </div>
              <div>
                <span>You</span>
                <span>1</span>
              </div>
    </div> */}
          </div>
        </div>

        <div className="details">
          <span>{abv}% ABV</span>
          <span>{ibu} IBU</span>
          <span className="caps">
            <div className="caps-outer">
              <img src={window.capIconURL} alt="Cap Icon" />
              <img src={window.capIconURL} alt="Cap Icon" />
              <img src={window.capIconURL} alt="Cap Icon" />
              <img src={window.capIconURL} alt="Cap Icon" />
              <img src={window.capIconURL} alt="Cap Icon" />
              <div className="caps-inner">
                <img src={window.capIconURL} alt="Cap Icon"/>
                <img src={window.capIconURL} alt="Cap Icon"/>
                <img src={window.capIconURL} alt="Cap Icon"/>
                <img src={window.capIconURL} alt="Cap Icon"/>
                <img src={window.capIconURL} alt="Cap Icon"/>
              </div>
            </div>
            ({rating})
          </span>
          <span>{total} Ratings</span>
          {/* <span>307,929 Ratings</span> */}
        </div>

        <div className="bottom">
          <div className= "bottom-description">{description}</div>
          <div className="actions">
            <div className="check-icon" onClick={() => this.props.checkin()}> 
              <img src={window.checkIconURL} alt="Check Icon"/>
            </div>
            <div className="bookmark-icon" onClick={() => this.props.createFavorite({beer_id: id})}>
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
      <CheckinIndexContainer checkin_ids={checkin_ids} />
      </>
    )
  }
}

export default connect(msp, mdp)(BeerShow);