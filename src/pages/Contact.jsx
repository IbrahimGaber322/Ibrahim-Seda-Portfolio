import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) =>{
    e.preventDefault();

    emailjs.sendForm('service_j3hkp8f', 'template_fb32c1c', form.current, 'NzBf6yb2AcqJw_go1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    setFormData({ name: "",email: "",message: ""});
  }

  return (
    <section
      id="contact"
      className="container-fluid my-contact-page section-padding"
    >
      <Row>
        <Col className="title-div mb-3 pb-3">
          <p className="title">Get in Touch</p>
          <p className="back-title">CONTACT</p>
        </Col>
      </Row>
      <Row className="gy-4">
        <Col md={{ span: 8, order: 2 }}>
          <Form ref={form} onSubmit={handleSubmit}>
            <Row>
              <Col xxl={12}>
                <p className="title-2">Send Me an E-mail</p>
              </Col>
              <Col lg={6}>
                <Form.Group className="mb-3">
                  <Form.Control
                    style={{ color: "white" }}
                    className="my-form-control"
                    required={true}
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                    type="text"
                    placeholder="Name"
                  />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className="mb-3">
                  <Form.Control
                    style={{ color: "white" }}
                    className="my-form-control"
                    required={true}
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    style={{ color: "white" }}
                    className="my-form-control"
                    required={true}
                    name="message"
                    onChange={handleChange}
                    value={formData.message}
                    placeholder="Your message ..."
                    as="textarea"
                    rows={5}
                  />
                </Form.Group>
              </Col>
              <Col className="text-center" xxl={12}>
                <Button type="submit" className="rounded-pill">
                  Send Message
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col className="contacts" md={{ span: 4, order: 1 }}>
          <p className="title-2">My Contacts</p>
          <div className="contacts-div">
            <LocalPhoneIcon className="green-icon" />
            <p className="contacts-desc">(+20) 1099782953</p>
          </div>
          <div className="contacts-div">
            <WhatsAppIcon className="green-icon" />
            <p className="contacts-desc">(+20) 1099782953</p>
          </div>
          <div className="contacts-div">
            <EmailIcon className="green-icon" />
            <p className="contacts-desc">
              ibrahimseda322
              <br />
              <span>@gmail.com</span>
            </p>
          </div>
          <p className="title-2">Follow Me</p>
          <a href="https://www.facebook.com/IbrahimGaber33">
            <FacebookIcon fontSize="large" className="facebook-icon" />
          </a>
          <a href="https://www.instagram.com/ibrahim_gaber_seda/">
            <InstagramIcon fontSize="large" className="instagram-icon" />
          </a>
          <a href="https://github.com/IbrahimGaber322">
            <GitHubIcon fontSize="large" className="github-icon" />
          </a>
          <a href="https://www.linkedin.com/in/ibrahim-gaber-seda/">
            <LinkedInIcon fontSize="large" className="linkedin-icon" />
          </a>
        </Col>
      </Row>
    </section>
  );
}

export default Contact;
