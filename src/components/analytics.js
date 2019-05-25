import React from 'react';

const Analytics = () => {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('set', {
    'anonymize_ip': true,
    'transport_type': 'beacon',
  });
  gtag('config', 'UA-108069665-3');

  function getLoadTime() {
      // This "should" get dom content loaded time (interactive) because if dom content is not loaded by the time
      // this script is called we add a listener for DOMContentLoaded and recall (all subsequent page view events
      // on the same page should have the same timing.
      if (!window.performance)
        return null;

      // Navigation 2 API
      var perfEntries = performance.getEntriesByType('navigation');
      if (perfEntries.length > 0)
        return Math.round(perfEntries[0].domInteractive);

      // Navigation 1 API
      var perfData = window.performance.timing;
      return Math.round(perfData.domInteractive - perfData.navigationStart);
  }

  function collectLoadtime() {
      if(document.readyState !== 'complete'
         && document.readyState !== 'loaded'
         && document.readyState !== 'interactive') {
          window.addEventListener('load', function() {
              collectLoadtime();
          });
          return;
      }
      var loadTime = getLoadTime();
      gtag('event', 'timing_complete', {
        'name': 'load',
        'value': loadTime,
        'event_category': 'page load'
      });
  }

  collectLoadtime();
  return (
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-108069665-3"
    />
  );
};

export default Analytics;
