import React, { createContext, useEffect, useReducer } from 'react';

// import { Auth } from 'aws-amplify';
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

  const login = async (username, password, callback = () => {}) => {
    // const user = await Auth.signIn(username, password);
    const user = {
      username: 'Hossam',
      attributes: { given_name: 'Hossam', family_name: 'ELMansy' },
    };

    dispatch({
      type: 'LOGIN',
      payload: {
        user,
      },
    });

    callback();
  };

  const logout = async (callback = () => {}) => {
    // await Auth.signOut();
    dispatch({ type: 'LOGOUT' });
    callback();
  };

  useEffect(() => {
    const initialize = async () => {
      try {
        // const user = await Auth.currentAuthenticatedUser();
        const user = {
          username: 'Hossam',
          attributes: { given_name: 'Hossam', family_name: 'ELMansy' },
        };

        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: true,
            user,
          },
        });
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
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
