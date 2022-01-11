import React from 'react';
import UserProvider from './context/UserProvider';
import AppRouter from './routers/AppRouter';

const HeroesApp = () => {
  return (
    <div>
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </div>
  );
};

export default HeroesApp;
