import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { doLogout } from '../../actions/actionUserLogin';

const NavBar = () => {
  const history = useHistory();

  const { userState, userDispatch } = useContext(UserContext);

  const handleLogoutClick = () => {
    userDispatch(doLogout());
    history.replace('/login');
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        APP
      </Link>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact activeClassName="active" className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              className="nav-link"
              to="/heroes"
            >
              Heroes
            </NavLink>
          </li>
        </ul>
      </div>
      <span className="navbar-text text-info">{userState.name}</span>
      <button
        onClick={handleLogoutClick}
        type="button"
        className="btn text-secondary"
      >
        Logout
      </button>
    </nav>
  );
};

export default NavBar;
