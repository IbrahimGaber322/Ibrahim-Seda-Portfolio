import React, { useRef } from "react";
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {
  const form = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    try {
      const result = await emailjs.sendForm(process.env.REACT_APP_EJS_SERVICE_ID, process.env.REACT_APP_EJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EJS_PUBLIC_KEY);
      if (result.status === 200) {
        toast.success(`Thanks ${formData.get('name')}, I'll get back to you`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      toast.error(`Sorry ${formData.get('name')}, something went wrong`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    form.current.reset();
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
                    autoComplete="off"
                    style={{ color: "white" }}
                    className="my-form-control"
                    required={true}
                    name="name"
                    type="text"
                    placeholder="Name"
                  />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className="mb-3">
                  <Form.Control
                    autoComplete="off"
                    style={{ color: "white" }}
                    className="my-form-control"
                    required={true}
                    name="email"
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    autoComplete="off"
                    style={{ color: "white" }}
                    className="my-form-control"
                    required={true}
                    name="message"
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
      <ToastContainer />
    </section>
  );
}

export default Contact;
