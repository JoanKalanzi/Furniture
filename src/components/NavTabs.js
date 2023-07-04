import React from 'react';
import { NavLink } from 'react-router-dom';


function NavBar() {
  return (
    <header className="sticky top-0 w-full px-4 lg:px-100 z-[99] lg:h-140 flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        
        <ul className="nav flex space-x-10 justify-start">
          <li className="nav-item">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="show"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>
              Show
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="create"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>
              Create
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default NavBar;
