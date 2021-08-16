import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <div className="border-bottom border-3 border-danger">
        <Container>
          <Row className="align-items-center h4">
            <Col lg={4}>
              <a href="#" className="text-danger text-decoration-none">
                The University of Atah
              </a>
            </Col>
            <Col lg={8}>
              <nav className="py-3">
                <ul className="d-flex w-100 justify-content-end  list-unstyled">
                  <li className="ms-3">
                    <a href="#" className="btn btn-danger">
                      Teacher
                    </a>
                  </li>
                  <li className="ms-3">
                    <a href="#" className="btn btn-outline-danger">
                      About Us
                    </a>
                  </li>
                  <li className="ms-3">
                    <a href="#" className="btn btn-outline-danger">
                      Contact Us
                    </a>
                  </li>
                  <li className="ms-3">
                    <a href="#" className="btn btn-outline-danger">
                      Login
                    </a>
                  </li>
                  <li className="ms-3">
                    <a href="#" className="btn btn-outline-danger">
                      Register
                    </a>
                  </li>
                </ul>
              </nav>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
