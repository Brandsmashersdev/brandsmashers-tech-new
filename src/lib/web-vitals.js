import { onCLS, onFCP, onINP, onLCP, onTTFB } from 'web-vitals';

// Function to send metrics to analytics
function sendToAnalytics(metric) {
  // Send to Vercel Analytics if available
  if (typeof window !== 'undefined' && window.va) {
    window.va('event', {
      name: metric.name,
      value: metric.value,
      id: metric.id,
    });
  }

  // Send to Google Analytics if available
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vitals:', {
      name: metric.name,
      value: metric.value,
      id: metric.id,
    });
  }

  // Send to custom analytics endpoint
  if (process.env.NEXT_PUBLIC_ANALYTICS_URL) {
    fetch(process.env.NEXT_PUBLIC_ANALYTICS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: metric.name,
        value: metric.value,
        id: metric.id,
        timestamp: Date.now(),
        url: typeof window !== 'undefined' ? window.location.href : '',
      }),
    }).catch(console.error);
  }
}

// Initialize web vitals monitoring
export function initWebVitals() {
  if (typeof window === 'undefined') return;

  // Monitor Core Web Vitals
  onCLS(sendToAnalytics);
  onFCP(sendToAnalytics);
  onINP(sendToAnalytics);
  onLCP(sendToAnalytics);
  onTTFB(sendToAnalytics);

  // Monitor additional metrics
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    // Monitor First Input Delay (FID)
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'first-input') {
            sendToAnalytics({
              name: 'FID',
              value: entry.processingStart - entry.startTime,
              id: entry.name,
            });
          }
        }
      });
      observer.observe({ entryTypes: ['first-input'] });
    } catch (error) {
      console.warn('PerformanceObserver not supported:', error);
    }

    // Monitor Largest Contentful Paint (LCP)
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            sendToAnalytics({
              name: 'LCP',
              value: entry.startTime,
              id: entry.name,
            });
          }
        }
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (error) {
      console.warn('PerformanceObserver not supported:', error);
    }
  }
}

// Export individual metric functions for manual tracking
export { onCLS, onFCP, onINP, onLCP, onTTFB };
