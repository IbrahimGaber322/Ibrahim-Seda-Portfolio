import React from "react";

// Wraps a screenshot in a minimal browser-window frame.
function BrowserFrame({ url, children }) {
  const host = url ? url.replace(/^https?:\/\//, "").replace(/\/$/, "") : "";
  return (
    <div className="browser">
      <div className="browser__bar" aria-hidden="true">
        <span className="browser__dots">
          <i />
          <i />
          <i />
        </span>
        {host && <span className="browser__url">{host}</span>}
      </div>
      <div className="browser__view">{children}</div>
    </div>
  );
}

export default BrowserFrame;
