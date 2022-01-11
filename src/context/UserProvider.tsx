import React, { useEffect, useReducer } from 'react';
import { UserContext } from './UserContext';
import initUser from '../auth/initUser';
import userReducer from '../auth/userReducer';

interface UserProviderProps {
  children: JSX.Element | JSX.Element[];
}

const UserProvider = ({ children }: UserProviderProps) => {
  const [userState, userDispatch] = useReducer(userReducer, {}, initUser);

  useEffect(() => {
    localStorage.setItem('user-login-crud', JSON.stringify(userState));
  }, [userState]);
  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
