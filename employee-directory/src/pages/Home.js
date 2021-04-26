import React, { Component } from "react";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import API from "../utils/API";
import Search from "../components/Search/Search";

class Home extends Component {
  state = {
    results: [],
    employees: [],
    names: [],
    dob: [],
    search: "",
    error: ""
  };

  componentDidMount() {
    API.getEmployees()
      .then(res => this.setState({ employees: res.data.message }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    return (
        <Container>
            <Search />
            <Row>
                <Col size="md-2">
                    <div>
                        Testing
                    </div>
                </Col>
                <Col size="md-2">
                    <div>
                        Testing2
                    </div>
                </Col>
                <Col size="md-2">
                    <div>
                        Testing3
                    </div>
                </Col>
                <Col size="md-2">
                    <div>
                        Testing4
                    </div>
                </Col>
                <Col size="md-2">
                    <div>
                        Testing5
                    </div>
                </Col>
            </Row>
        </Container>
    );
  }
}

export default Home;