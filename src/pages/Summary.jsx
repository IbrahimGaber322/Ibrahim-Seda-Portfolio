import React from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Summary(){
    return <section className="container-fluid my-summary-page section-padding" id="summary">
    <Row >
    <Col className="title-div mb-3 pb-3">
      <p className="title">Resume</p>
      <p className="back-title">SUMMARY</p>
      </Col>
    </Row>
    <Row className="gx-5 gy-5">
        <Col md={6}>
    <p className="title-2">My Education</p>
    <Stack gap={3}>
        <div className="summary-card p-4 rounded">
           <p className="summary-date rounded">2000 - 2004</p>
           <p className="title-2">Computer Science</p>
           <p className="title-3">International University</p>
           <p className="summary-desc">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
        </div>
        <div className="summary-card p-4 rounded">
           <p className="summary-date rounded">2000 - 2004</p>
           <p className="title-2">Computer Science</p>
           <p className="title-3">International University</p>
           <p className="summary-desc">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
        </div>
        <div className="summary-card p-4 rounded">
           <p className="summary-date rounded">2000 - 2004</p>
           <p className="title-2">Computer Science</p>
           <p className="title-3">International University</p>
           <p className="summary-desc">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
        </div>
    </Stack>
        </Col>
        <Col md={6}>
    <p className="title-2">My Experience</p>
    <Stack gap={3}>
    <div className="summary-card p-4 rounded">
           <p className="summary-date rounded">2000 - 2004</p>
           <p className="title-2">Computer Science</p>
           <p className="title-3">International University</p>
           <p className="summary-desc">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
        </div>
        <div className="summary-card p-4 rounded">
           <p className="summary-date rounded">2000 - 2004</p>
           <p className="title-2">Computer Science</p>
           <p className="title-3">International University</p>
           <p className="summary-desc">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
        </div>
        <div className="summary-card p-4 rounded">
           <p className="summary-date rounded">2000 - 2004</p>
           <p className="title-2">Computer Science</p>
           <p className="title-3">International University</p>
           <p className="summary-desc">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
        </div>
    </Stack>
        </Col>
    </Row>
    <Row className="mt-3 gx-5 ">
    <Col xxl={12}><p className="title-2">My Skills</p></Col>
      <Col className="pb-3" md={6}>
           <Stack gap={3}>
            <div className="skill-div">
            <p className="title-2">Web Design<span>65%</span></p>
            <ProgressBar className="my-progess-bar" now={65} />
            </div>
            <div className="skill-div">
            <p className="title-2">Web Design<span>65%</span></p>
            <ProgressBar className="my-progess-bar" now={65} />
            </div>
            <div className="skill-div">
            <p className="title-2">Web Design<span>65%</span></p>
            <ProgressBar className="my-progess-bar" now={65} />
            </div>
           </Stack>
      </Col>
      <Col md={6}>
      <Stack gap={3}>
            <div className="skill-div">
            <p className="title-2">Web Design<span>65%</span></p>
            <ProgressBar className="my-progess-bar" now={65} />
            </div>
            <div className="skill-div">
            <p className="title-2">Web Design<span>65%</span></p>
            <ProgressBar className="my-progess-bar" now={65} />
            </div>
            <div className="skill-div">
            <p className="title-2">Web Design<span>65%</span></p>
            <ProgressBar className="my-progess-bar" now={65} />
            </div> 
      </Stack>
      </Col>
      <Col className="text-center mt-5 mb-5" xxl={12}><Button className="rounded-pill">Download CV</Button></Col>
    </Row>
    </section>
 }


 export default Summary;