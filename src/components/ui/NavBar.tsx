import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const NavBar = () => {
  const history = useHistory();

  const { user } = useContext(UserContext);

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
      <span className="navbar-text text-info">{user.name}</span>
      <button
        onClick={() => history.replace('/login')}
        type="button"
        className="btn text-secondary"
      >
        Logout
      </button>
    </nav>
  );
};

export default NavBar;
