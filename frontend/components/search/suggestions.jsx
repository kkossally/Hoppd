import React from 'react';

class Suggestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filtered: [] }
  }

  componentDidMount() {
    this.setState({ filtered: this.props.beerNames });
  }

  handleChange(event) {
    let suggestions;

    suggestions = this.state.filtered.filter(beer => {

    })
  }

  render() {
    return (
      <div>
        <input type="text" className="textbox" placeholder="Search for beers"/>
        <ul>
          {this.state.filtered}
        </ul>
      </div>
    )
  }
}

export default Suggestions;