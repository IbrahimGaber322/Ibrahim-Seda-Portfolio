import React from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
function Contact(){
    return <section id="contact" className="container-fluid my-contact-page section-padding">
    <Row>
     <Col className="title-div mb-3 pb-3">
      <p className="title">Get in Touch</p>
      <p className="back-title">CONTACT</p>
    </Col>
    </Row>
    <Row className="gy-4">
        <Col md={{span:8, order:2}}>
        <Form>
        <Row>
        <Col xxl={12}><p className="title-2">Send Me an E-mail</p></Col>
        <Col lg={6}>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Control className="my-form-control" required={true} type="name" placeholder="Name" />
      </Form.Group>
      </Col>
        <Col lg={6}>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Control className="my-form-control" required={true} type="email" placeholder="Enter email" />
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="ControlTextarea">
        <Form.Control className="my-form-control" required={true} placeholder="Your message ..." as="textarea" rows={5} />
      </Form.Group>
      </Col>
      <Col className="text-center" xxl={12}><Button type="submit" className="rounded-pill">Send Message</Button></Col>
      </Row>
    </Form>
        </Col>
        <Col className="contacts" md={{span:4, order:1}}>
        <p className="title-2">My Contacts</p>
        <div className="contacts-div"><LocalPhoneIcon className="green-icon"/><p className="contacts-desc">(+20) 1099782953</p></div>
        <div className="contacts-div"><WhatsAppIcon className="green-icon"/><p className="contacts-desc">(+20) 1099782953</p></div>
        <div className="contacts-div"><EmailIcon className="green-icon"/><p className="contacts-desc">ibrahimseda322<br/><span>@gmail.com</span></p></div>
        <p className="title-2">Follow Me</p>
        <FacebookIcon fontSize="large" className="facebook-icon" />
        <InstagramIcon fontSize="large" className="instagram-icon" />
        <GitHubIcon fontSize="large" className="github-icon"/>
        <LinkedInIcon fontSize="large" className="linkedin-icon"/>
        </Col>
    </Row>
    </section>
}

export default Contact;