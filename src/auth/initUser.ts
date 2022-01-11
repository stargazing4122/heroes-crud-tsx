import { User } from '../interfaces/interfaces';

const initUser = (): User => {
  return (
    JSON.parse(localStorage.getItem('user-login-crud') as string) || {
      name: '',
      login: false,
    }
  );
};

export default initUser;
