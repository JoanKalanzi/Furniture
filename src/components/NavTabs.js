import React from 'react';
import { NavLink, useLocation , useNavigate } from 'react-router-dom';
import { BsFillBasket2Fill } from 'react-icons/bs';
import Logo from '../components/images/logo1.png';

function NavTabs({ isLoggedIn, handleLogout ,  totalItems}) {
  const navigate = useNavigate();
  const location = useLocation();

  
  const handleLogoutClick = () => {
    handleLogout();
    navigate('/');
  };

  return (
    <>
    <header className="sticky top-0 w-full px-4 lg:px-100 z-[99] lg:h-140 flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <ul className="nav flex space-x-10">
          <li className="nav-item">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/show"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Store
            </NavLink>
          </li>
          {isLoggedIn && (
            <li className="nav-item">
              <NavLink
                to="/addNewFurniture"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Personalise
              </NavLink>
            </li>
          )}
          <li className="nav-item">
            <NavLink
              to="/about"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              About Us
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center justify-center w-1/5">
          <img
            src={process.env.PUBLIC_URL + Logo}
            alt="logo"
            width={'30%'}
            className="mylogo"
          />
        </div>
       
        <div className="icons w-1/4 flex justify-end items-center">

  {isLoggedIn ? (
    <>
      {location.pathname === "/show"  && (
        <NavLink to="/cart" className="flex items-center">
          <BsFillBasket2Fill className="text-2xl cursor-pointer ml-4" />
          {totalItems !== null && (
            <span className="text-xl cursor-pointer ml-2 cart-items">{totalItems}</span>
          )}
        </NavLink>
      )}
      <button className="login-button text-xl cursor-pointer ml-4" onClick={handleLogoutClick}>
        Logout
      </button>
    </>
  ) : (
    <NavLink to="/login" className="login-button text-xl cursor-pointer">
      Login
    </NavLink>
  )}
</div>

      </div>
    </header>
    </>
  );
}

export default NavTabs;