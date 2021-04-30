import React, { Component } from "react";
import Container from "../components/Container/Container";
import Table from "../components/Table/Table";
import API from "../utils/API";
import Search from "../components/Search/Search";

class Home extends Component {
  state = {
    results: [],
    currentSort: "desc",
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
  
  // function that handles ordering names by ascending or descending order on button click
  handleNameSort = () => {
    const nameSortAsc = [].concat(this.state.results)
    .sort((a, b) => a.name.first > b.name.first ? 1 : -1);
    const nameSortDesc = [].concat(this.state.results)
    .sort((a, b) => b.name.first > a.name.first ? 1 : -1);

    switch(this.state.currentSort) {
      case "desc":
        this.setState({ results: nameSortAsc, currentSort: "asc" });
        break;
      case "asc":
        this.setState({ results: nameSortDesc, currentSort: "desc" });
        break;
    }
  }

  // function that handles ordering emails by ascending or descending order on button click
  handleEmailSort = () => {
    const emailSortAsc = [].concat(this.state.results)
    .sort((a, b) => a.email > b.email ? 1 : -1);
    const emailSortDesc = [].concat(this.state.results)
    .sort((a, b) => b.email > a.email ? 1 : -1);

    switch(this.state.currentSort) {
      case "desc":
        this.setState({ results: emailSortAsc, currentSort: "asc" });
        break;
      case "asc":
        this.setState({ results: emailSortDesc, currentSort: "desc" });
        break;
    }
  }

  // function that handles ordering birthdays by ascending or descending order on button click
  handleDOBSort = () => {
    const dobSortAsc = [].concat(this.state.results)
    .sort((a, b) => parseInt(a.dob.date) - parseInt(b.dob.date));
    const dobSortDesc = [].concat(this.state.results)
    .sort((a, b) => parseInt(b.dob.date) - parseInt(a.dob.date) );

    switch(this.state.currentSort) {
      case "desc":
        this.setState({ results: dobSortAsc, currentSort: "asc" });
        break;
      case "asc":
        this.setState({ results: dobSortDesc, currentSort: "desc" });
        break;
    }   
  }

  render() {
    return (
        <Container>
            <Search />
            <Table 
              results={this.state.results}
              handleNameSort={this.handleNameSort}
              handleDOBSort={this.handleDOBSort}
              handleEmailSort={this.handleEmailSort}
            >
            </Table>
        </Container>
    );
  }
}

export default Home;