import React, { FormEvent, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { doLogin } from '../../actions/actionUserLogin';
import { UserContext } from '../../context/UserContext';
import useForm from '../../hooks/useForm';

interface FormData {
  nickname: string;
}

const LoginScreen = () => {
  const { userDispatch } = useContext(UserContext);

  const history = useHistory();

  const { formValues, handleChange, resetForm } = useForm<FormData>({
    nickname: '',
  });

  const { nickname } = formValues;

  const handleLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userDispatch(doLogin(nickname));
    history.replace('/');
    resetForm();
  };

  return (
    <div className="mx-5 my-5">
      <h2>Enter a nickname to login </h2>
      <hr />
      <form onSubmit={handleLoginSubmit}>
        <input
          className="form-control mb-3"
          type="text"
          name="nickname"
          value={nickname}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-outline-success">
          Go
        </button>
      </form>
    </div>
  );
};

export default LoginScreen;
