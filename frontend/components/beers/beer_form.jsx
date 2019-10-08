import React from 'react';
import { withRouter } from 'react-router-dom';
import beerStyles from './beer_styles';

class BeerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.beer;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.formType === 'Edit Beer') {
      // debugger
      this.setState(this.props.beer);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.beer.id != this.props.beer.id) {
      // debugger
      this.setState(this.props.beer);
    }
  }

  update(field) {
    return event => this.setState({ [field]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submitForm(this.state).then(action => this.props.history.push(`/beers/${action.beer.id}`));
  }

  beerStyleOptions() {
    return beerStyles.map((style, index) => {
      return <option key={index} value={style}>{style}</option>
    })
  }

  render() {
    return (
      // <div>
      <form className="beer-form" onSubmit={this.handleSubmit}>
        <div onClick={this.props.closeModal} className="close-x">X</div>
        <div className="name">
          <label>Beer Name</label>
            <input className="textbox" type="text" value={this.state.name} onChange={this.update('name')}/>          

          <label>Brewery Name</label>
            <input className="textbox" type="text" value={this.state.brewery_id} onChange={this.update('brewery_id')}/>
        </div>
        
        <div className="data">
          <label>
            ABV
            <input className="textbox" type="text" value={this.state.abv} onChange={this.update('abv')} />
          </label>

          <label>
            IBU
            <input  className="textbox" type="text" value={this.state.ibu} onChange={this.update('ibu')} />
          </label>

          <label>
            Style
            <select className="textbox" name="style" onChange={this.update('style')}>
              <option value="selected">Select a Style</option>
              {this.beerStyleOptions()}
            </select>
          </label>
        </div>
        
        <label>Description</label>
        <textarea className="textbox" value={this.state.description} onChange={this.update('description')}></textarea>

        <input className= "submit" type="submit" value={this.props.formType}/>
      </form>
    )
  }
}

export default BeerForm;


{/* <button onClick={() => this.props.deleteBeer(this.props.beer.id)}>Delete Beer</button> */}
{/* </div> */}