import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import SkeletonLoader from '../shared/SkeletonLoader';

// Dynamic imports for service components
const MobileApp = dynamic(() => import('./mobileApp'), {
  loading: () => <SkeletonLoader type="card" />,
  ssr: true,
});

const WebDevelopment = dynamic(() => import('./webDevelopment'), {
  loading: () => <SkeletonLoader type="card" />,
  ssr: true,
});

const CustomService = dynamic(() => import('./Customservice/CustomService'), {
  loading: () => <SkeletonLoader type="card" />,
  ssr: true,
});

const UiuxDevelopment = dynamic(() => import('./uiux'), {
  loading: () => <SkeletonLoader type="card" />,
  ssr: true,
});

const DigitalMarketing = dynamic(() => import('./digitalMarketing'), {
  loading: () => <SkeletonLoader type="card" />,
  ssr: true,
});

const ProductDevelopment = dynamic(() => import('./productDevelopment'), {
  loading: () => <SkeletonLoader type="card" />,
  ssr: true,
});

const AiMl = dynamic(() => import('./aiMl'), {
  loading: () => <SkeletonLoader type="card" />,
  ssr: true,
});

const Browser = dynamic(() => import('./browser'), {
  loading: () => <SkeletonLoader type="card" />,
  ssr: true,
});

const DataDive = dynamic(() => import('./dataDive'), {
  loading: () => <SkeletonLoader type="card" />,
  ssr: true,
});

const DesktopAppDevelopment = dynamic(() => import('./desktopAppDevelopment'), {
  loading: () => <SkeletonLoader type="card" />,
  ssr: true,
});

const WebDesign = dynamic(() => import('./webDesign'), {
  loading: () => <SkeletonLoader type="card" />,
  ssr: true,
});

// Service component mapping
const serviceComponents = {
  'mobile-apps': MobileApp,
  'web-development': WebDevelopment,
  'custom-software': CustomService,
  'uiux-development': UiuxDevelopment,
  'digital-marketing': DigitalMarketing,
  'product-development': ProductDevelopment,
  'ai-ml': AiMl,
  'browser': Browser,
  'data-dive': DataDive,
  'desktop-app-development': DesktopAppDevelopment,
  'web-design': WebDesign,
};

const ServiceWrapper = ({ serviceType }) => {
  const ServiceComponent = serviceComponents[serviceType];

  if (!ServiceComponent) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Service Not Found</h2>
          <p className="text-gray-600">The requested service is not available.</p>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={<SkeletonLoader type="card" />}>
      <ServiceComponent />
    </Suspense>
  );
};

export default ServiceWrapper;
