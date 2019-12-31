import React, { Component } from "react";
import DataTable from "./DataTable";
import DataSearch from "./DataSearch";
import axios from "axios";

export class Data extends Component {
  state = {
    data: [],
    query: ""
  };

  componentDidMount = () => {
    this.getData();
  };

  getData = async () => {
    let res = await axios.get("/search");
    let { data } = await res;
    this.setState({ data: data });
  };

  setQuery = query => {
    this.setState({
      query: query
    });
  };

  render() {
    return (
      <div>
        <DataSearch setQuery={this.setQuery} query={this.state.query} />
        <DataTable data={this.state.data} query={this.state.query} />
      </div>
    );
  }
}

export default Data;
