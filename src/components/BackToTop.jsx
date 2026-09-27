import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#home"
      className={`back-to-top ${visible ? "is-visible" : ""}`}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUpwardIcon fontSize="small" />
    </a>
  );
}

export default BackToTop;
