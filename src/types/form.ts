// Shared types for forms

export interface BaseForm {
  name?: string;
  email?: string;
  phone?: string;
  [key: string]: string | undefined;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  [key: string]: string | undefined;
}

export interface ContactFormData extends BaseForm {
  location?: string;
  reason?: string;
}

export interface TrialFormData extends BaseForm {
  countryCode?: string;
  projectRequirement?: string;
  projectDescription?: string;
}

export interface ServiceFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface CustomServiceFormData extends BaseForm {
  message?: string;
}

export interface UIUXFormData extends BaseForm {
  message?: string;
}

export interface DigitalMarketingFormData extends BaseForm {
  message?: string;
}

export interface ProductDevelopmentFormData extends BaseForm {
  message?: string;
}

export interface AiMlServiceFormData extends BaseForm {
  message?: string;
}

export interface WebDevelopmentFormData extends ServiceFormData {
  projectType?: string;
  budget?: string;
  timeline?: string;
}

export interface FormValidationRules {
  [key: string]: {
    required?: boolean;
    pattern?: RegExp;
    minLength?: number;
    maxLength?: number;
    custom?: (value: string) => boolean;
  };
}
