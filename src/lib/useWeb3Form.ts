import { useState } from 'react';
import { BaseForm, FormErrors } from '@/types/form';

export function useWeb3Form<T extends BaseForm, E extends FormErrors>(
  initialState: T,
  toast,
  toastConfig
) {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateName = (name: string) => /^[A-Za-z\s]+$/.test(name);
  const validateEmail = (email: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
  const validatePhone = (phone: string) => /^\d{10}$/.test(phone.replace(/\D/g, ''));

  const validateForm = (data: T): FormErrors => {
    const errors: FormErrors = {};

    if (!data.name?.trim()) {
      errors.name = 'Name is required';
    }

    if (!data.email?.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!data.phone?.trim()) {
      errors.phone = 'Phone number is required';
    }

    if (!data.message?.trim()) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent, helpType: string, onSuccess: () => void) => {
    e.preventDefault();
    if (!validateForm(form)) return;
    setLoading(true);
    try {
      const formDataToSend = new FormData();
      Object.keys(form).forEach((key) => {
        formDataToSend.append(key, form[key]);
      });
      formDataToSend.append('helpType', helpType);
      formDataToSend.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });
      const data = await response.json();
      if (data.success) {
        toast && toast.success('Form submitted successfully!', toastConfig);
        setForm(initialState);
        onSuccess && onSuccess();
      } else {
        toast && toast.error('Error submitting form. Please try again.', toastConfig);
      }
    } catch (error) {
      console.error('Submission Error:', error);
      toast && toast.error('Network error. Please try again later.', toastConfig);
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    setForm,
    errors,
    setErrors,
    loading,
    handleChange,
    handleSubmit,
  };
}
