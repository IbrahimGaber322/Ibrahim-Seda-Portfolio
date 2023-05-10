import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import StorageIcon from '@mui/icons-material/Storage';
import LaptopIcon from '@mui/icons-material/Laptop';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import HandymanIcon from '@mui/icons-material/Handyman';


function Services(){
    return <section className="container-fluid my-services-page section-padding" id="services">
    <Row>
      <Col className="title-div mb-3 pb-3">
      <p className="title">What I Do?</p>
      <p className="back-title">SERVICES</p>
      </Col>
      </Row>
      <Row>
      <Col className="p-4 service" md={6}>
       <LaptopIcon className="services-icon" />
       <p className="service-title">Web Developing</p>
      <p className="service-desc">I can help you develope any website idea you want. Wether it's a static page or a fullstack website.</p>
      </Col>
      <Col className="p-4 service" md={6}>
      <DesignServicesIcon className="services-icon" />
      <p className="service-title">UI/UX Design</p>
      <p className="service-desc">I can work on the UI/UX design of your page although it won't be the best I can make it as professional as I can.</p>
      </Col>
      <Col className="p-4 service" md={6}>
      <StorageIcon className="services-icon" />
      <p className="service-title">Hosting</p>
      <p className="service-desc">I can help you with the hosting of your website and follow up on it. As well as showing you all the availabe options and picking the best price range for your website needs.</p>
      </Col>
      <Col className="p-4 service" md={6}>
      <HandymanIcon className="services-icon" />
      <p className="service-title">Fixing Problems</p>
      <p className="service-desc">I can help you fix problems in your existing MERN stack website.</p>
      </Col>
    </Row>
  </section> 
}

export default Services;