import React from "react";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import PaletteIcon from '@mui/icons-material/Palette';
import LaptopIcon from '@mui/icons-material/Laptop';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BrushIcon from '@mui/icons-material/Brush';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CampaignIcon from '@mui/icons-material/Campaign';

function Services(){
    return <Container id="services" className="my-services-page section-padding" fluid>
    <Row className="title-div mb-3 pb-3">
      <p className="title">What I Do?</p>
      <p className="back-title">SERVICES</p>
      </Row>
      <Row>
      <Col className="p-4 service" md={6}>
      <PaletteIcon className="services-icon" />
      <p className="service-title">Graphic Design</p>
      <p className="service-desc">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
      </Col>
      <Col className="p-4 service" md={6}>
       <LaptopIcon className="services-icon" />
       <p className="service-title">Web Design</p>
      <p className="service-desc">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
      </Col>
      <Col className="p-4 service" md={6}>
      <DesignServicesIcon className="services-icon" />
      <p className="service-title">UI/UX Design</p>
      <p className="service-desc">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
      </Col>
      <Col className="p-4 service" md={6}>
      <BrushIcon className="services-icon" />
      <p className="service-title">App Design & Develop</p>
      <p className="service-desc">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
      </Col>
      <Col className="p-4 service" md={6}>
      <AnalyticsIcon className="services-icon" />
      <p className="service-title">Business Analysis</p>
      <p className="service-desc">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
      </Col>
      <Col className="p-4 service" md={6}>
      <CampaignIcon className="services-icon" />
      <p className="service-title">SEO Marketing</p>
      <p className="service-desc">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
      </Col>
    </Row>
  </Container> ;
}

export default Services;