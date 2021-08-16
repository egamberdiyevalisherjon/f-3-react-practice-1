import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default class Footer extends Component {
  render() {
    return (
      <div className="bg-dark text-white py-3">
        <Container>
          <a
            className="h4 d-block text-center text-decoration-none text-danger"
            href="#"
          >
            The University of Utah
          </a>
          <Row>
            <Col lg={6} className="d-flex flex-column justify-content-between">
              <h2 className="w-50 mx-auto text-center">
                We tought over <span className="text-danger">100M+</span>{" "}
                students Follow our newsletter
              </h2>
              <form>
                <input
                  type="email"
                  placeholder="Email"
                  className="d-block w-100 form-control"
                />
                <button className="btn text-center mt-3 btn-danger d-block w-100">
                  Submit
                </button>
              </form>
            </Col>
            <Col lg={6}>
              <h3 className="text-danger text-center">Usefull Links</h3>
              <ul className="list-group">
                <li className="list-group-item bg-secondary my-2">
                  <a href="#" className="text-white text-decoration-none ">Teachers</a>
                </li>
                <li className="list-group-item bg-secondary my-2">
                  <a href="#" className="text-white text-decoration-none ">Teachers</a>
                </li>
                <li className="list-group-item bg-secondary my-2">
                  <a href="#" className="text-white text-decoration-none ">Teachers</a>
                </li>
                <li className="list-group-item bg-secondary my-2">
                  <a href="#" className="text-white text-decoration-none ">Teachers</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
