import React from 'react';
import beerStyles from './beer_styles';

class BeerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.beer;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return event => this.setState({ [field]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submitForm(this.state);
  }

  beerStyleOptions() {
    return beerStyles.map((style, index) => {
      return <option key={index} value={style}></option>
    })
  }

  render() {
    return (
      <form className="beer-form" onSubmit={this.handleSubmit}>
        <label>
          Beer Name
          <input type="text" value={this.state.name} onChange={this.update('name')}/>
        </label>

        <label>
          Brewery Name
          <input type="text" value={this.state.brewery_id} onChange={this.update('brewery_id')}/>
        </label>

        <label>
          ABV
          <input type="text" value={this.state.abv} onChange={this.update('abv')}/>
        </label>

        <label>
          IBU
          <input type="text" value={this.state.ibu} onChange={this.update('ibu')}/>
        </label>

        <label>
          Style
          <select name="style" onChange={this.update('style')}>
            <option value="selected">Select a Style</option>
            {this.beerStyleOptions()}
          </select>
        </label>

        <label>
          Description
          <textarea name="description" cols="30" rows="10" onChange={this.update('description')}></textarea>
        </label>

        <input type="submit" value={this.props.formType}/>
      </form>
    )
  }
}

export default BeerForm;