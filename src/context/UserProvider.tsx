import React, { useEffect, useReducer, useState } from 'react';
import { UserContext } from './UserContext';
import initUser from '../auth/initUser';
import userReducer from '../auth/userReducer';
import { Hero } from '../interfaces/interfaces';
import { helpHttp, Options } from '../helpers/helptHttp';

interface UserProviderProps {
  children: JSX.Element | JSX.Element[];
}

const UserProvider = ({ children }: UserProviderProps) => {
  const [userState, userDispatch] = useReducer(userReducer, {}, initUser);

  useEffect(() => {
    localStorage.setItem('user-login-crud', JSON.stringify(userState));
  }, [userState]);

  //METHOD GET
  const [heroesList, setHeroesList] = useState<Hero[]>([]);
  const url = 'http://localhost:5555/heroes';
  const getHeroes = async () => {
    const options: Options = {};
    try {
      const json = await helpHttp().get(url, options);
      setHeroesList(json);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getHeroes();
  }, []);

  //METHOD DELETE
  const deleteHero = async (id: string) => {
    const options: Options = {
      headers: {},
    };
    try {
      await helpHttp().del(url, id, options);
      getHeroes();
    } catch (err) {
      console.log(err);
    }
  };

  //METHOD PUT
  const editHero = async (id: string, body: Hero) => {
    const options: Options = {
      body,
      headers: { 'Content-type': 'application/json' },
    };

    try {
      await helpHttp().put(url, id, options);
      getHeroes();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <UserContext.Provider
      value={{
        userState,
        userDispatch,
        heroesList,
        getHeroes,
        deleteHero,
        editHero,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
