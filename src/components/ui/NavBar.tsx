import React from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';

const NavBar = () => {
  const history = useHistory();

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
      <span className="navbar-text text-info">Pedro</span>
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
