import { createContext } from 'react';
import { Hero, User } from '../interfaces/interfaces';
import { UserAction } from '../actions/actionUserLogin';

interface UserContextProps {
  userState: User;
  userDispatch: (action: UserAction) => void;
  heroesList: Hero[];
  getHeroes: () => void;
  deleteHero: (id: string) => void;
  editHero: (id: string, body: Hero) => void;
}

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps,
);
