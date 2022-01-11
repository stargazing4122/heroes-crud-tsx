import { createContext } from 'react';
import { User } from '../interfaces/interfaces';
import { UserAction } from '../actions/actionUserLogin';

interface UserContextProps {
  userState: User;
  userDispatch: (action: UserAction) => void;
}

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps,
);
