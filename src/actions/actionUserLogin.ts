export type UserAction =
  | { type: 'login'; payload: { name: string } }
  | { type: 'logout' };

export const doLogin = (name: string): UserAction => {
  return {
    type: 'login',
    payload: {
      name,
    },
  };
};

export const doLogout = (): UserAction => {
  return {
    type: 'logout',
  };
};
