// Centralized types for service-related components
import type { ElementType } from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon?: ElementType; // For lucide-react or similar icon components
  iconSrc?: string; // For image-based icons
}

export interface ServiceCardProps {
  services?: ServiceItem[];
}

export interface ServiceGridsProps {
  serviceData?: {
    services: ServiceItem[];
  };
}
