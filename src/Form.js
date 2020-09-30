import React, { Component } from 'react';

class Form extends Component {
  
  constructor() {
    super();
    this.state = {
      yearChoice: "",
      sortChoice: 'popularity.desc',
    };
  }

  handleChange = (event) => {
    this.setState({
      yearChoice: event.target.value,
    });
  };

  handleSortChoice = (event) => {
    console.log(event.target.value);
    this.setState({
      sortChoice: event.target.value,
    })
  }
  

  render() {
    return (
      <div className="form">
        <form action="">
          <label htmlFor="yearChoice">
            Choose your year!
          </label>
          <input
            type="number"
            name="yearChoice"
            id="yearChoice"
            onChange={this.handleChange}
            value={this.state.yearChoice}
          />
          <label htmlFor="searchField">Sort your stuff!</label>
          <select name="searchField" id="searchField"
            value={this.state.sortChoice} onChange={(event) => {
              this.handleSortChoice(event)}}>
            <option value="popularity.desc">Popularity</option>
            <option value='primary_release_date.desc'>Release Date</option>
            <option value="vote_count.desc">Amount of Votes</option>
            <option value="revenue.desc">Revenue</option>
          </select>
          <input
            type="submit"
            onClick={ (event) => {
              this.props.handleClick(event, this.state.yearChoice, this.state.sortChoice);
            }}
            value="Show me those movies!"
          />
        </form>
      </div>
    );
  }
}

export default Form;