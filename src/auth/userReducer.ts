import { UserAction } from '../actions/actionUserLogin';
import { User } from '../interfaces/interfaces';

const userReducer = (state: User, action: UserAction): User => {
  switch (action.type) {
    case 'login':
      return {
        name: action.payload.name,
        login: true,
      };

    case 'logout':
      return {
        name: '',
        login: false,
      };

    default:
      return state;
  }
};

export default userReducer;
