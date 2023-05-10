import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
/* import Nav from 'react-bootstrap/Nav'; */

function Footer(){
    return(
      <Container className="footer section-padding" fluid>
      <Row>
        <Col md={6}>
            <p className="footer-text">Copyright © 2023 <span>Ibrahim</span>. All Rights Reserved.</p>
        </Col>
       {/*  <Col md={6}>
        <Nav className="footer-nav" activeKey="/home">
        <Nav.Item >
          <Nav.Link className="footer-link-1" href="">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="footer-link-2" eventKey="">Link</Nav.Link>
        </Nav.Item>
      </Nav>
        </Col> */}
      </Row>
      </Container>
    )
}

export default Footer;