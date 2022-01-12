import React from 'react';
import { useHistory } from 'react-router-dom';

const HomeScreen = () => {
  const history = useHistory();
  const handleGoClick = () => {
    history.push('/heroes');
  };
  return (
    <div>
      <h2>Home Screen</h2>
      <hr />
      <p>
        If you want to go to the list of heroes, please click the button bellow.
      </p>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={handleGoClick}
      >
        Go
      </button>
    </div>
  );
};

export default HomeScreen;
