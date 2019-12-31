import React, { Component } from "react";
export class DataSearch extends Component {
  handleChange = event => {
    this.props.setQuery(event.target.value);
  };

  render() {
    return (
      <div style={{padding: "40px"}}>
        <label>Search user by name: </label>
        <input
          type="text"
          name="query"
          value={this.props.query}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default DataSearch;
