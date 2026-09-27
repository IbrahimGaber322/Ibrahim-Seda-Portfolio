import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import profile from "../constants/profile";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React.
        </p>
        <div className="footer__social">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon fontSize="small" />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon fontSize="small" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
