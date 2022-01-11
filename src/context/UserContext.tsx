import { createContext } from 'react';
import { User } from '../interfaces/interfaces';

interface UserContextProps {
  user: User;
}

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps,
);
