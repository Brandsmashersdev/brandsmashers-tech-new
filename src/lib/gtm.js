/**
 * Google Tag Manager (GTM) utility functions
 * Provides consistent GTM tracking across the application
 */

/**
 * Push a custom event to the dataLayer
 * @param {string} event - Event name
 * @param {Object} parameters - Event parameters
 */
export const pushGTMEvent = (event, parameters = {}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event,
      ...parameters
    });
  }
};

/**
 * Track page view with GTM
 * @param {string} pageTitle - Page title
 * @param {string} pagePath - Page path
 * @param {Object} additionalData - Additional data to send
 */
export const trackPageView = (pageTitle, pagePath, additionalData = {}) => {
  pushGTMEvent('page_view', {
    page_title: pageTitle,
    page_location: typeof window !== 'undefined' ? window.location.href : '',
    page_path: pagePath,
    ...additionalData
  });
};

/**
 * Track custom events (clicks, form submissions, etc.)
 * @param {string} eventName - Name of the event
 * @param {string} eventCategory - Category of the event
 * @param {string} eventAction - Action taken
 * @param {string} eventLabel - Label for the event
 * @param {Object} additionalData - Additional data to send
 */
export const trackCustomEvent = (eventName, eventCategory, eventAction, eventLabel, additionalData = {}) => {
  pushGTMEvent(eventName, {
    event_category: eventCategory,
    event_action: eventAction,
    event_label: eventLabel,
    ...additionalData
  });
};

/**
 * Track form submissions
 * @param {string} formName - Name of the form
 * @param {string} formLocation - Where the form is located
 * @param {Object} additionalData - Additional data to send
 */
export const trackFormSubmission = (formName, formLocation, additionalData = {}) => {
  trackCustomEvent('form_submit', 'Form', 'Submit', formName, {
    form_location: formLocation,
    ...additionalData
  });
};

/**
 * Track button clicks
 * @param {string} buttonName - Name of the button
 * @param {string} buttonLocation - Where the button is located
 * @param {Object} additionalData - Additional data to send
 */
export const trackButtonClick = (buttonName, buttonLocation, additionalData = {}) => {
  trackCustomEvent('button_click', 'Button', 'Click', buttonName, {
    button_location: buttonLocation,
    ...additionalData
  });
};

/**
 * Track technology page views with specific technology data
 * @param {string} technology - Technology name
 * @param {string} pageTitle - Page title
 * @param {Object} additionalData - Additional data to send
 */
export const trackTechnologyPageView = (technology, pageTitle, additionalData = {}) => {
  trackPageView(pageTitle, `/tech/${technology}`, {
    technology,
    page_type: 'technology',
    ...additionalData
  });
};

/**
 * Track service page views
 * @param {string} serviceName - Name of the service
 * @param {string} pageTitle - Page title
 * @param {Object} additionalData - Additional data to send
 */
export const trackServicePageView = (serviceName, pageTitle, additionalData = {}) => {
  trackPageView(pageTitle, `/services/${serviceName}`, {
    service: serviceName,
    page_type: 'service',
    ...additionalData
  });
};

/**
 * Track blog page views
 * @param {string} blogSection - Blog section name
 * @param {string} pageTitle - Page title
 * @param {Object} additionalData - Additional data to send
 */
export const trackBlogPageView = (blogSection, pageTitle, additionalData = {}) => {
  trackPageView(pageTitle, `/blog${blogSection}`, {
    blog_section: blogSection,
    page_type: 'blog',
    ...additionalData
  });
};

/**
 * Initialize GTM tracking for a page
 * This should be called in useEffect for each page
 * @param {string} pageTitle - Page title
 * @param {string} pagePath - Page path
 * @param {Object} additionalData - Additional data to send
 */
export const initializePageTracking = (pageTitle, pagePath, additionalData = {}) => {
  trackPageView(pageTitle, pagePath, additionalData);
};

