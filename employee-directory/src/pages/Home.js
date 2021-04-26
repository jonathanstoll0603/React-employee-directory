import React, { Component } from "react";
import Header from "../components/Header/Header";
import Wrapper from "../components/Wrapper/Wrapper";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import Footer from "../components/Footer/Footer";
import API from "../utils/API";
import Search from "../components/Search/Search";

class EmployeeSearch extends Component {
  state = {
    result: {},
    search: ""
  };

  render() {
    return (
      <Header />
      <Wrapper>
        <Container>
            <Row>
            <Col size="md-8">
                <Card
                heading={this.state.result.Title || "Search for a Movie to Begin"}
                >
                {!this.state.result.Title ? <span>No movie found, sorry!</span> : <MovieDetail
                    title={this.state.result.Title}
                    src={this.state.result.Poster}
                    director={this.state.result.Director}
                    genre={this.state.result.Genre}
                    released={this.state.result.Released}
                />}
                
                </Card>
            </Col>
            <Col size="md-4">
                <Card heading="Search">
                <SearchForm
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                </Card>
            </Col>
            </Row>
        </Container>
      </Wrapper>
      <Footer />
    );
  }
}

export default OmdbContainer;