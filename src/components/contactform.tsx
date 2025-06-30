'use client';
import { useState } from 'react';
import { useWeb3Form } from '@/lib/useWeb3Form';
import { BaseForm, FormErrors } from '@/types/form';

interface ContactFormData extends BaseForm {
  location?: string;
  reason?: string;
}

// Toast notification component (inline replacement for react-toastify)
const Toast = ({ message, type, onClose }) => {
  return (
    <div
      className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
      } text-white`}
    >
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 text-white hover:text-gray-200">
          ×
        </button>
      </div>
    </div>
  );
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: string } | null>(null);
  const toastConfig = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    style: { background: '#ff5010', color: 'white' },
  };

  const {
    form: serviceForm,
    errors,
    loading,
    handleChange: handleServiceFormChange,
    handleSubmit: handleServiceFormSubmit,
  } = useWeb3Form<ContactFormData, FormErrors>(
    { name: '', email: '', phone: '', location: '', reason: '' },
    {
      success: (msg) => setToast({ message: msg, type: 'success' }),
      error: (msg) => setToast({ message: msg, type: 'error' }),
    },
    toastConfig
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-orange-50 py-16 px-4 sm:px-6 lg:px-8">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Let&apos;s Start a{' '}
            <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Conversation
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into reality? Our team of experts is here to discuss your
            vision and provide tailored solutions that drive success.
          </p>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quick Response</h3>
              <p className="text-gray-600 text-sm">Our team will contact you soon</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Consultation</h3>
              <p className="text-gray-600 text-sm">
                Free initial consultation with our specialists
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fast Solutions</h3>
              <p className="text-gray-600 text-sm">Rapid deployment and implementation</p>
            </div>
          </div>
        </div>

        {submitted ? (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
              <p className="text-gray-600 text-lg mb-8">
                Thank you for reaching out. Our team will review your message and get back to you
                within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold rounded-2xl hover:from-orange-700 hover:to-orange-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Send Another Message
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-600 to-orange-500 p-8">
                <h2 className="text-3xl font-bold text-white text-center">Get In Touch</h2>
                <p className="text-orange-100 text-center mt-2">
                  We&apos;d love to hear about your Query
                </p>
              </div>
              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={serviceForm.name}
                      onChange={handleServiceFormChange}
                      required
                      className={`w-full bg-gray-50 border-2 ${
                        errors.name ? 'border-red-300' : 'border-gray-200'
                      } rounded-xl py-4 px-6 text-gray-900 focus:outline-none focus:border-orange-500 focus:bg-white transition-all duration-200`}
                      placeholder=""
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={serviceForm.email}
                      onChange={handleServiceFormChange}
                      required
                      className={`w-full bg-gray-50 border-2 ${
                        errors.email ? 'border-red-300' : 'border-gray-200'
                      } rounded-xl py-4 px-6 text-gray-900 focus:outline-none focus:border-orange-500 focus:bg-white transition-all duration-200`}
                      placeholder=""
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={serviceForm.phone}
                      onChange={handleServiceFormChange}
                      className={`w-full bg-gray-50 border-2 ${
                        errors.phone ? 'border-red-300' : 'border-gray-200'
                      } rounded-xl py-4 px-6 text-gray-900 focus:outline-none focus:border-orange-500 focus:bg-white transition-all duration-200`}
                      placeholder=""
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="location" className="block text-sm font-semibold text-gray-900">
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={serviceForm.location}
                      onChange={handleServiceFormChange}
                      className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl py-4 px-6 text-gray-900 focus:outline-none focus:border-orange-500 focus:bg-white transition-all duration-200"
                      placeholder=""
                    />
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <label htmlFor="reason" className="block text-sm font-semibold text-gray-900">
                      Reason for Contact
                    </label>
                    <textarea
                      id="reason"
                      name="reason"
                      value={serviceForm.reason}
                      onChange={handleServiceFormChange}
                      required
                      rows={6}
                      className={`w-full bg-gray-50 border-2 ${
                        errors.reason ? 'border-red-300' : 'border-gray-200'
                      } rounded-xl py-4 px-6 text-gray-900 focus:outline-none focus:border-orange-500 focus:bg-white transition-all duration-200 resize-none`}
                      placeholder="Tell us a reason for your contact..."
                    />
                    {errors.reason && <p className="text-red-500 text-sm mt-1">{errors.reason}</p>}
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <button
                    onClick={(e) => handleServiceFormSubmit(e, helpType, () => setSubmitted(true))}
                    disabled={loading}
                    className={`inline-flex items-center px-12 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white text-lg font-semibold rounded-2xl hover:from-orange-700 hover:to-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-200 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl ${
                      loading ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
