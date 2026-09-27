// Loads Umami (https://umami.is): cookie-free, privacy-friendly analytics.
// Set REACT_APP_UMAMI_WEBSITE_ID in .env to enable it. Clicks on elements with
// a data-umami-event attribute are recorded as custom events automatically.
export function loadAnalytics() {
  const websiteId = process.env.REACT_APP_UMAMI_WEBSITE_ID;
  if (!websiteId || process.env.NODE_ENV !== "production") return;

  const script = document.createElement("script");
  script.defer = true;
  script.src = process.env.REACT_APP_UMAMI_SRC || "https://cloud.umami.is/script.js";
  script.dataset.websiteId = websiteId;
  script.dataset.doNotTrack = "true";
  document.head.appendChild(script);
}
