import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CV from "../cv/IbrahimGaber.pdf";

const links = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "featured", label: "Case study" },
  { id: "portfolio", label: "Work" },
  { id: "contact", label: "Contact" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""} ${open ? "nav--open" : ""}`}>
      <div className="nav__inner">
        <a href="#home" className="nav__brand" onClick={close}>
          <span className="nav__logo">IG</span>
          <span className="nav__name">Ibrahim Gaber</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={close}
              className={active === l.id ? "is-active" : undefined}
            >
              {l.label}
            </a>
          ))}
          <a href={CV} download="IbrahimGaber-CV.pdf" className="btn btn--sm btn--primary nav__cta" onClick={close} data-umami-event="Download CV" data-umami-event-location="nav">
            Resume
          </a>
        </nav>

        <button
          type="button"
          className="nav__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
}

export default Header;
