import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactCardFlip from "react-card-flip";
import WebWeave from "../images/WebWeave gif.gif";
import { Button } from "react-bootstrap";

function Portfolio() {
  const [flipped, setFlipped] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setFlipped(!flipped);
  };
  return (
    <section
      id="portfolio"
      className="my-portfolio-page section-padding container-fluid"
    >
      <Row>
        <Col className="title-div">
          <p className="title">My Work</p>
          <p className="back-title">PORTFOLIO</p>
        </Col>
      </Row>
      <Row>
        <Col style={{ display: "flex", justifyContent: "center" }}>
          <ReactCardFlip
            infinite
            isFlipped={flipped}
            flipDirection="horizontal"
          >
            <div
              style={{ borderRadius: 20, overflow: "hidden", maxWidth:1000 }}
              onClick={handleClick}
            >
              <img width={'100%'} height={'auto'} style={{maxHeight:500}} src={WebWeave} alt="webweave" />
            </div>

            <div style={{ maxWidth: 1000, height: 'fit-content', borderRadius:20, padding:20,color:'white', backgroundColor:'#111418' }}>
              <div onClick={handleClick}>
                <h3><span style={{color:'#20C997'}}>Key</span> Features:</h3>
                <ul>
                  <li>Simple and <span style={{color:'#20C997'}}>User-Friendly</span> Interface</li>
                  <li>Post <span style={{color:'#20C997'}}>Creation</span> and Interaction</li>
                  <li>Profile <span style={{color:'#20C997'}}>Customization</span></li>
                  <li><span style={{color:'#20C997'}}>Edit</span> Your Posts</li>
                  <li>Complete <span style={{color:'#20C997'}}>Account</span> Features</li>
                  <li>Expand Your <span style={{color:'#20C997'}}>Network</span></li>
                  <li><span style={{color:'#20C997'}}>Real-time</span> Friend Request Notifications</li>
                </ul>
                <p className="text-center">
                  Join <span style={{color:'#20C997'}}>WebWeave</span> today and explore the possibilities of
                  meaningful online connections.
                </p>
              </div>
              <div className="d-grid gap-2">
      <Button href="https://webweave.onrender.com/" style={{color:'#20C997'}} variant="outline-dark" size="lg">
        Visit WebWeave
      </Button>
    </div>
            </div>
          </ReactCardFlip>
        </Col>
      </Row>
    </section>
  );
}

export default Portfolio;
