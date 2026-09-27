import React, { useEffect, useRef, useState } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ScheduleIcon from "@mui/icons-material/Schedule";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SectionHeading from "../components/SectionHeading";
import profile from "../constants/profile";

const channels = [
  { icon: EmailOutlinedIcon, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: WhatsAppIcon, label: "WhatsApp", value: profile.phone, href: profile.whatsapp },
  { icon: LinkedInIcon, label: "LinkedIn", value: "in/ibrahim-gaber-seda", href: profile.socials.linkedin },
  { icon: GitHubIcon, label: "GitHub", value: "IbrahimGaber322", href: profile.socials.github },
];

function LocalTime() {
  const fmt = () =>
    new Date().toLocaleTimeString("en-GB", { timeZone: "Africa/Cairo", hour: "2-digit", minute: "2-digit" });
  const [time, setTime] = useState(fmt);
  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 15000);
    return () => clearInterval(id);
  }, []);
  return (
    <p className="local-time">
      <ScheduleIcon fontSize="inherit" /> It's <strong>{time}</strong> in Cairo (GMT+3). I usually reply within a day.
    </p>
  );
}

function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      toast.success("Email copied to clipboard");
    } catch {
      toast.info(profile.email);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    setSending(true);
    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_EJS_SERVICE_ID,
        process.env.REACT_APP_EJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EJS_PUBLIC_KEY
      );
      if (result.status === 200) {
        toast.success(`Thanks ${formData.get("name")}, I'll get back to you soon.`);
        form.current.reset();
      }
    } catch (error) {
      toast.error(`Sorry ${formData.get("name")}, something went wrong. Please email me directly.`);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading index="08" eyebrow="Contact" title="Let's build something together.">
          Open to interesting roles, collaborations and freelance work. The fastest way to reach
          me is email.
        </SectionHeading>

        <div className="contact">
          <div className="contact__side reveal">
            <ul className="contact__channels">
              {channels.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="card channel"
                    data-umami-event={`Contact ${label}`}
                  >
                    <span className="channel__icon">
                      <Icon fontSize="small" />
                    </span>
                    <span>
                      <small>{label}</small>
                      <strong>{value}</strong>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="btn btn--ghost btn--sm copy-email"
              onClick={copyEmail}
              data-umami-event="Copy email"
            >
              <ContentCopyIcon fontSize="inherit" /> Copy email address
            </button>
            <LocalTime />
          </div>

          <form ref={form} onSubmit={handleSubmit} className="card contact__form reveal">
            <div className="field-row">
              <label className="field">
                <span>Name</span>
                <input required name="name" type="text" autoComplete="name" placeholder="Jane Doe" />
              </label>
              <label className="field">
                <span>Email</span>
                <input required name="email" type="email" autoComplete="email" placeholder="jane@company.com" />
              </label>
            </div>
            <label className="field">
              <span>Message</span>
              <textarea required name="message" rows={5} placeholder="Tell me about your project or role…" />
            </label>
            <button type="submit" className="btn btn--primary" disabled={sending} data-umami-event="Contact form submit">
              {sending ? "Sending…" : "Send message"} <SendIcon fontSize="small" />
            </button>
          </form>
        </div>
      </div>
      <ToastContainer position="bottom-right" theme="dark" autoClose={5000} />
    </section>
  );
}

export default Contact;
