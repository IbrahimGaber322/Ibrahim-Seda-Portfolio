import React from "react";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack';

function Summary(){
    return <Container id="summary" className="my-summary-page section-padding" fluid>
    <Row className="title-div mb-3 pb-3">
      <p className="title">Resume</p>
      <p className="back-title">SUMMARY</p>
    </Row>
    <Row className="gx-5 gy-5">
        <Col md={6}>
    <p className="summary-title">My Education</p>
    <Stack gap={3}>
        <div className="summary-card p-4 rounded">
           <p className="summary-date rounded">2000 - 2004</p>
           <p className="summary-title">Computer Science</p>
           <p className="summary-title-2">International University</p>
           <p className="summary-desc">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
        </div>
        <div className="summary-card p-4 rounded">
           <p className="summary-date rounded">2000 - 2004</p>
           <p className="summary-title">Computer Science</p>
           <p className="summary-title-2">International University</p>
           <p className="summary-desc">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
        </div>
        <div className="summary-card p-4 rounded">
           <p className="summary-date rounded">2000 - 2004</p>
           <p className="summary-title">Computer Science</p>
           <p className="summary-title-2">International University</p>
           <p className="summary-desc">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
        </div>
    </Stack>
        </Col>
        <Col md={6}>
    <p className="summary-title">My Experience</p>
    <Stack gap={3}>
    <div className="summary-card p-4 rounded">
           <p className="summary-date rounded">2000 - 2004</p>
           <p className="summary-title">Computer Science</p>
           <p className="summary-title-2">International University</p>
           <p className="summary-desc">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
        </div>
        <div className="summary-card p-4 rounded">
           <p className="summary-date rounded">2000 - 2004</p>
           <p className="summary-title">Computer Science</p>
           <p className="summary-title-2">International University</p>
           <p className="summary-desc">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
        </div>
        <div className="summary-card p-4 rounded">
           <p className="summary-date rounded">2000 - 2004</p>
           <p className="summary-title">Computer Science</p>
           <p className="summary-title-2">International University</p>
           <p className="summary-desc">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
        </div>
    </Stack>
        </Col>
    </Row>
    </Container>
 }


 export default Summary;