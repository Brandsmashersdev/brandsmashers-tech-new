"use client";
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    reason: ''
  });
  

   const toastConfig = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  
     const [errors, setErrors] = useState({});
       const [helpType, setHelpType] = useState(null);
const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

     const [serviceForm, setServiceForm] = useState({
      name: "",
      email: "",
      phone: "",
      location: "",
      reason:""
    });

    const handleServiceFormChange = (e) => {
      const { name, value } = e.target;
      let newValue = value;
      let error = '';
     switch (name) {
        case 'name':
          if (value && !validateName(value)) {
            error = 'Please enter only letters';
            newValue = serviceForm[name];
          }
          break;
          case 'email':
          if (value && !validateEmail(value)) {
            error = 'Please enter only letters';
            newValue = serviceForm[name];
          }
          break;
  
        case 'phone':
          const digits = value.replace(/\D/g, '');
          if (digits.length > 10) {
            newValue = serviceForm[name];
          } 
          break;
          
          
  
        default:
          break;
      }
  
      setServiceForm(prev => ({
        ...prev,
        [name]: value
      }));
      
  
      if (error) {
        setErrors(prev => ({
          ...prev,
          [name]: error
        }));
      } else {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[name];
          return newErrors;
        });
      }
  
    };
  
 const handleServiceFormSubmit = async(e) => {
      e.preventDefault();
      // In a real application, you would handle the form submission here
     if (validateForm()) {
           try {
             const formDataToSend = new FormData();
             

             Object.keys(serviceForm).forEach(key => {
               formDataToSend.append(key, serviceForm[key]);
             });
             formDataToSend.append('helpType', helpType);
             formDataToSend.append('access_key', 'ced5f765-5f1b-4a75-8584-5ca061816ed2');
     
             const response = await fetch('https://api.web3forms.com/submit', {
               method: 'POST',
               body: formDataToSend
             });
     
             const data = await response.json();
             
             if (data.success) {
               toast.success('Form submitted successfully!', toastConfig);
               
               setServiceForm({
                 name:'',
                 email: '',
                 phone: '',
                 location: '',
                 reason:''
               });
               setHelpType(null);
             } else {
               toast.error('Error submitting form. Please try again.', toastConfig);
             }
           } catch (error) {
             console.error('Submission Error:', error);
             toast.error('Network error. Please try again later.', toastConfig);
           }
         }
    };

        const validateName = (name) => {
      const nameRegex = /^[A-Za-z\s]+$/;
      return nameRegex.test(name);
    };
  
    const validateEmail = (email) => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return emailRegex.test(email);
    };
  
    const validatePhone = (phone) => {
      const phoneRegex = /^\d{10}$/;
      return phoneRegex.test(phone.replace(/\D/g, ''));
    };
  
    const validateForm = () => {
      const newErrors = {};
  
      if (!serviceForm.name) {
        newErrors.firstName = 'First name is required';
      } else if (!validateName(serviceForm.firstName)) {
        newErrors.firstName = 'Please enter only letters';
      }
      if (!serviceForm.email) {
        newErrors.email = 'Email is required';
      } else if (!validateEmail(serviceForm.email)) {
        newErrors.email = 'Please enter a valid email';
      }  
      if (!serviceForm.phone) {
        newErrors.phone = 'Phone number is required';
      } else if (!validatePhone(serviceForm.phone)) {
        newErrors.phone = 'Please enter a valid 10-digit phone number';
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  

  return (
    <>
     <ToastContainer />
    <div className="bg-black min-h-screen text-white py-16 px-4 sm:px-6 lg:px-8">
        
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Contact <span style={{ color: '#ff5010' }}>Us</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Reach out to our team of experts to discuss your technology needs and how we can help drive your business forward.
          </p>
        </div>
        
        {submitted ? (
          <div className="bg-gray-900 p-8 rounded-lg text-center">
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-opacity-10" style={{ backgroundColor: 'rgba(255, 80, 16, 0.2)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#ff5010">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
            <p className="text-gray-400">Your message has been received. We&apos;ll get back to you shortly.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-6 px-6 py-3 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900"
              style={{ backgroundColor: '#ff5010' }}
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleServiceFormSubmit}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={serviceForm.name}
                    onChange={ handleServiceFormChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2"
                    style={{ focusRing: '#ff5010' }}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={serviceForm.email}
                    onChange={ handleServiceFormChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2"
                    style={{ focusRing: '#ff5010' }}
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={serviceForm.phone}
                    onChange={ handleServiceFormChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2"
                    style={{ focusRing: '#ff5010' }}
                  />
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-400 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={serviceForm.location}
                    onChange={ handleServiceFormChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2"
                    style={{ focusRing: '#ff5010' }}
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="reason" className="block text-sm font-medium text-gray-400 mb-1">
                    Reason for Contacting
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    value={serviceForm.reason}
                    onChange={ handleServiceFormChange}
                    required
                    rows={5}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2"
                    style={{ focusRing: '#ff5010' }}
                  />
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3 rounded-lg font-medium text-white transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900"
                  style={{ backgroundColor: '#ff5010' }}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
    </>
  );
}
