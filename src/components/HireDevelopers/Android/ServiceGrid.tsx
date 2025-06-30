import React from 'react';
import ServiceCard from '../ServiceCards';
import type { ServiceGridsProps } from '@/types/service';

const ServiceGrids: React.FC<ServiceGridsProps> = ({ serviceData }) => {
  // Fallback to default data if no props are provided
  const defaultData = {
    services: [
      {
        title: 'Custom App Development',
        description: 'Build custom apps from scratch using cutting-edge technologies.',
        iconSrc: '/default-icon.svg',
      },
    ],
  };

  const finalData = serviceData || defaultData;

  return <ServiceCard services={finalData.services} />;
};

export default ServiceGrids;
