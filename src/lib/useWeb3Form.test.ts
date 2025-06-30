import { renderHook, act } from '@testing-library/react';
import { useWeb3Form } from './useWeb3Form';

describe('useWeb3Form', () => {
  const toast = {
    success: jest.fn(),
    error: jest.fn(),
  };
  const toastConfig = {};
  const initialState = { name: '', email: '', phone: '' };

  beforeEach(() => {
    jest.clearAllMocks();
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY = 'test-key';
    global.fetch = jest.fn();
  });

  it('validates required fields', () => {
    const { result } = renderHook(() => useWeb3Form(initialState, toast, toastConfig));
    act(() => {
      result.current.handleSubmit({ preventDefault: jest.fn() });
    });
    expect(result.current.errors.name).toBe('Name is required');
    expect(result.current.errors.email).toBe('Email is required');
    expect(result.current.errors.phone).toBe('Phone number is required');
  });

  it('validates email format', () => {
    const { result } = renderHook(() => useWeb3Form(initialState, toast, toastConfig));
    act(() => {
      result.current.handleChange({ target: { name: 'name', value: 'John' } });
      result.current.handleChange({ target: { name: 'email', value: 'bademail' } });
      result.current.handleChange({ target: { name: 'phone', value: '1234567890' } });
    });
    act(() => {
      result.current.handleSubmit({ preventDefault: jest.fn() });
    });
    expect(result.current.errors.email).toBe('Please enter a valid email');
  });

  it('validates phone format', () => {
    const { result } = renderHook(() => useWeb3Form(initialState, toast, toastConfig));
    act(() => {
      result.current.handleChange({ target: { name: 'name', value: 'John' } });
      result.current.handleChange({ target: { name: 'email', value: 'john@email.com' } });
      result.current.handleChange({ target: { name: 'phone', value: '123' } });
    });
    act(() => {
      result.current.handleSubmit({ preventDefault: jest.fn() });
    });
    expect(result.current.errors.phone).toBe('Please enter a valid 10-digit phone number');
  });

  it('calls toast.success on successful submission', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({ json: () => Promise.resolve({ success: true }) })
    );
    const { result } = renderHook(() => useWeb3Form(initialState, toast, toastConfig));
    await act(async () => {
      result.current.setForm({ name: 'John', email: 'john@email.com', phone: '1234567890' });
    });
    await act(async () => {
      await result.current.handleSubmit({ preventDefault: jest.fn() });
    });
    expect(toast.success).toHaveBeenCalledWith('Form submitted successfully!', toastConfig);
  });

  it('calls toast.error on failed submission', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({ json: () => Promise.resolve({ success: false }) })
    );
    const { result } = renderHook(() => useWeb3Form(initialState, toast, toastConfig));
    await act(async () => {
      result.current.setForm({ name: 'John', email: 'john@email.com', phone: '1234567890' });
    });
    await act(async () => {
      await result.current.handleSubmit({ preventDefault: jest.fn() });
    });
    expect(toast.error).toHaveBeenCalledWith(
      'Error submitting form. Please try again.',
      toastConfig
    );
  });
});
