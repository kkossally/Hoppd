import React from 'react';
import beerStyles from './beer_styles';

class BeerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.beer;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.formType === 'Edit Beer') {
      this.setState(this.props.beer);
    }
    this.props.fetchBreweries();
  }
  
  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return event => this.setState({ [field]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.clearErrors();
    this.props.submitForm(this.state).then(action => this.props.history.push(`/beers/${action.beer.id}`)).then(() =>  this.props.closeModal());
  }

  beerStyleOptions() {
    return beerStyles.map((style, index) => {
      const selected = style === this.props.beer.style ? "selected" : "";
      return <option key={index} defaultValue={selected} value={style}>{style}</option>
    })
  }

  breweryOptions() {
    return this.props.breweries.map((brewery, index) => {
      const selected = brewery.name === this.props.beer.brewery ? "selected" : "";
      return <option key={index} defaultValue={selected} value={brewery.id}>{brewery.name}</option>
    })
  }

  // deleteBeer() {
  //   if (this.props.formType === 'Edit Beer') {
  //     return (
  //       <button onClick={() => this.props.deleteBeer(this.state.id)}>
  //         <img src={window.deleteIconURL} alt="Delete Icon" />
  //       </button>
  //     )
  //   } else {
  //     return null;
  //   }
  // }

  renderErrors() {
    if (this.props.errors.length > 0) {
      return (
        <div className="errors">
          <ul>
            {this.props.errors.map((error, index) => {
              return (
                <li key={`error-${index}`}>
                  {error}
                </li>
              )
            })}
          </ul>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <form className="beer-form" onSubmit={this.handleSubmit}>
          <div onClick={this.props.closeModal} className="close-x">X</div>

          {this.renderErrors()}

          <div className="name">
            <label>Beer Name</label>
              <input className="textbox" type="text" value={this.state.name} onChange={this.update('name')}/>          

            {/* <label>Brewery Name</label>
              <input className="textbox" type="text" value={this.state.brewery_id} onChange={this.update('brewery_id')}/> */}
          <label>
              Brewery Name
              <select className="textbox" name="brewery" onChange={this.update('brewery_id')}>
                <option value="selected">Select a Brewery</option>
                {this.breweryOptions()}
              </select>
            </label>
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
        {/* {this.deleteBeer()} */}
      </div>
    )
  }
}

export default BeerForm;

// <div>
{/* <button onClick={() => this.props.deleteBeer(this.props.beer.id)}>Delete Beer</button> */}
{/* </div> */}