import React, { createContext, useEffect, useReducer } from 'react';

import jwt_decode from 'jwt-decode';

import SplashScreen from 'src/components/common/SplashScreen';

const initialAuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INITIALIZE': {
      const { isAuthenticated, user } = action.payload;

      return {
        ...state,
        isAuthenticated,
        isInitialized: true,
        user,
      };
    }
    case 'LOGIN': {
      const { user } = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        user,
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    }
    case 'UPDATE_USER': {
      return {
        ...state,
        user: action.payload,
      };
    }
    default: {
      return { ...state };
    }
  }
};

const AuthContext = createContext({
  ...initialAuthState,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialAuthState);

  const login = async (auth_token, user, callback = () => {}) => {
    localStorage.setItem('auth_token', auth_token);
    localStorage.setItem('user', JSON.stringify(user));

    dispatch({
      type: 'LOGIN',
      payload: {
        user,
      },
    });

    callback();
  };

  const logout = async (callback = () => {}) => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');

    dispatch({ type: 'LOGOUT' });
    callback();
  };

  const updateUser = async (user) => {
    localStorage.setItem('user', JSON.stringify(user));

    dispatch({ type: 'UPDATE_USER', payload: user });
  };

  useEffect(() => {
    const initialize = async () => {
      try {
        const auth_token = localStorage.getItem('auth_token');
        const user = JSON.parse(localStorage.getItem('user'));

        if (auth_token && user && jwt_decode(auth_token)) {
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        } else {
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  if (!state.isInitialized) {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
        updateUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
