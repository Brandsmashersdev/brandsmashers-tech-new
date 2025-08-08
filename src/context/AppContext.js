import React, { createContext, useContext, useReducer, useCallback } from 'react';

// Initial state
const initialState = {
  theme: 'light',
  user: null,
  isLoading: false,
  notifications: [],
  sidebarOpen: false,
  language: 'en',
  preferences: {
    autoPlay: true,
    notifications: true,
    analytics: true,
  },
};

// Action types
const ACTIONS = {
  SET_THEME: 'SET_THEME',
  SET_USER: 'SET_USER',
  SET_LOADING: 'SET_LOADING',
  ADD_NOTIFICATION: 'ADD_NOTIFICATION',
  REMOVE_NOTIFICATION: 'REMOVE_NOTIFICATION',
  TOGGLE_SIDEBAR: 'TOGGLE_SIDEBAR',
  SET_LANGUAGE: 'SET_LANGUAGE',
  UPDATE_PREFERENCES: 'UPDATE_PREFERENCES',
  CLEAR_NOTIFICATIONS: 'CLEAR_NOTIFICATIONS',
};

// Reducer function
const appReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    
    case ACTIONS.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    
    case ACTIONS.ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            id: Date.now(),
            type: action.payload.type || 'info',
            message: action.payload.message,
            duration: action.payload.duration || 5000,
          },
        ],
      };
    
    case ACTIONS.REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter(
          notification => notification.id !== action.payload
        ),
      };
    
    case ACTIONS.TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen,
      };
    
    case ACTIONS.SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    
    case ACTIONS.UPDATE_PREFERENCES:
      return {
        ...state,
        preferences: {
          ...state.preferences,
          ...action.payload,
        },
      };
    
    case ACTIONS.CLEAR_NOTIFICATIONS:
      return {
        ...state,
        notifications: [],
      };
    
    default:
      return state;
  }
};

// Create context
const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Action creators
  const setTheme = useCallback((theme) => {
    dispatch({ type: ACTIONS.SET_THEME, payload: theme });
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, []);

  const setUser = useCallback((user) => {
    dispatch({ type: ACTIONS.SET_USER, payload: user });
  }, []);

  const setLoading = useCallback((isLoading) => {
    dispatch({ type: ACTIONS.SET_LOADING, payload: isLoading });
  }, []);

  const addNotification = useCallback((notification) => {
    dispatch({ type: ACTIONS.ADD_NOTIFICATION, payload: notification });
  }, []);

  const removeNotification = useCallback((id) => {
    dispatch({ type: ACTIONS.REMOVE_NOTIFICATION, payload: id });
  }, []);

  const toggleSidebar = useCallback(() => {
    dispatch({ type: ACTIONS.TOGGLE_SIDEBAR });
  }, []);

  const setLanguage = useCallback((language) => {
    dispatch({ type: ACTIONS.SET_LANGUAGE, payload: language });
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }, []);

  const updatePreferences = useCallback((preferences) => {
    dispatch({ type: ACTIONS.UPDATE_PREFERENCES, payload: preferences });
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferences', JSON.stringify(preferences));
    }
  }, []);

  const clearNotifications = useCallback(() => {
    dispatch({ type: ACTIONS.CLEAR_NOTIFICATIONS });
  }, []);

  // Initialize from localStorage on mount
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const savedLanguage = localStorage.getItem('language');
      const savedPreferences = localStorage.getItem('preferences');

      if (savedTheme) {
        setTheme(savedTheme);
      }
      if (savedLanguage) {
        setLanguage(savedLanguage);
      }
      if (savedPreferences) {
        try {
          const preferences = JSON.parse(savedPreferences);
          updatePreferences(preferences);
        } catch (error) {
          console.error('Error parsing saved preferences:', error);
        }
      }
    }
  }, [setTheme, setLanguage, updatePreferences]);

  const value = {
    ...state,
    setTheme,
    setUser,
    setLoading,
    addNotification,
    removeNotification,
    toggleSidebar,
    setLanguage,
    updatePreferences,
    clearNotifications,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export default AppContext;
