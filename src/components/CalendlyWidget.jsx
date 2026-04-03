import { useEffect } from 'react';

/**
 * CalendlyWidget Component
 * A reusable Calendly inline booking widget for scheduling consultations
 * 
 * Usage:
 * <CalendlyWidget />
 * 
 * Embeds the Calendly inline widget at https://calendly.com/brandsmashers/30min
 */

const CalendlyWidget = () => {
  useEffect(() => {
    // Add Calendly script
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="calendly-inline-widget w-full min-h-[650px]" 
         data-url="https://calendly.com/productsaas0/30min"
         style={{ minWidth: '320px', height: '650px' }}>
    </div>
  );
};

export default CalendlyWidget;