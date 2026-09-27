import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import CloseIcon from "@mui/icons-material/Close";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import BrowserFrame from "./BrowserFrame";
import { lenis } from "../hooks/useSmoothScroll";

function Lightbox({ project, onClose }) {
  const closeBtn = useRef(null);

  useEffect(() => {
    const prevFocus = document.activeElement;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    lenis?.stop();
    closeBtn.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      lenis?.start();
      prevFocus?.focus?.();
    };
  }, [onClose]);

  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${project.name} preview`} onClick={onClose}>
      <div className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox__head">
          <div>
            <p className="eyebrow eyebrow--sm">{project.kind}</p>
            <h3>{project.name}</h3>
          </div>
          <div className="lightbox__actions">
            <a href={project.visitLink} target="_blank" rel="noreferrer" className="btn btn--sm btn--primary">
              Open live <ArrowOutwardIcon fontSize="inherit" />
            </a>
            <button ref={closeBtn} type="button" className="icon-btn" onClick={onClose} aria-label="Close preview">
              <CloseIcon fontSize="small" />
            </button>
          </div>
        </div>
        <BrowserFrame url={project.visitLink}>
          <img src={project.imgSrc} alt={`${project.name} demo`} />
        </BrowserFrame>
      </div>
    </div>,
    document.body
  );
}

export default Lightbox;
