import React, { Component } from "react";
import Container from "../components/Container/Container";
import Table from "../components/Table/Table";
import TableBody from "../components/TableBody/TableBody";
import API from "../utils/API";
import Search from "../components/Search/Search";

class Home extends Component {
  state = {
    name: [],
    dob: [],
    phoneNumber: [],
    email: [],
    results: [],
    currentSort: "none",
    search: "",
    error: ""
  };

  componentDidMount() {
    API.getEmployees()
      .then(res => {
        this.setState({ results: res.data.results });
        console.log(this.state.results);
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };
  
  handleNameSort = () => {

    if (this.state.currentSort === "none" || this.state.currentSort === "down") {
      const nameSort = [].concat(this.state.results)
      .sort((a, b) => a.name.first > b.name.first ? 1 : -1)

      return this.setState({ results: nameSort, currentSort: "up" });

    } else if (this.state.currentSort ==="up") {
      const nameSort = [].concat(this.state.results)
      .sort((a, b) => b.name.first > a.name.first ? 1 : -1)

      return this.setState({ results: nameSort, currentSort: "down" });
    }
  }

  render() {
    return (
        <Container>
            <Search />
            <Table 
              results={this.state.results}
              handleNameSort={this.handleNameSort}
            >
              <TableBody />
            </Table>
        </Container>
    );
  }
}

export default Home;