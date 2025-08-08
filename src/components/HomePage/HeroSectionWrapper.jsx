import dynamic from 'next/dynamic';
import SkeletonLoader from '@/components/shared/SkeletonLoader';

// Dynamic import for the heavy hero section
const HeroSection = dynamic(() => import('./herosection'), {
  loading: () => (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <SkeletonLoader type="text" lines={4} className="mb-8" />
        <div className="flex justify-center space-x-4">
          <SkeletonLoader type="image" height="h-12" width="w-32" />
          <SkeletonLoader type="image" height="h-12" width="w-32" />
        </div>
      </div>
    </div>
  ),
  ssr: true, // Keep SSR for SEO
});

export default HeroSection;
