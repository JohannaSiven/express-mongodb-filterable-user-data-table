import React, { Component } from "react";

export class DataTable extends Component {
  render() {
    let { data, query } = this.props;

    if (data) {
      if (query !== "") {
        data = data.filter(person => {
          return person.name.toLowerCase().includes(query.toLowerCase())
        });
      }
      return (
        <table style={{margin:"0 auto", textAlign:"left"}}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Eye color</th>
              <th>Gender</th>
              <th>Company</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {data.map(person => {
              return (
                <tr key={person._id}>
                  <td>{person.name}</td>
                  <td>{person.age}</td>
                  <td>{person.eyeColor}</td>
                  <td>{person.gender}</td>
                  <td>{person.company}</td>
                  <td>{person.email}</td>
                  <td>{person.phone}</td>
                  <td>{person.address}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DataTable;
