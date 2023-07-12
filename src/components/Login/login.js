import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FaApplePay } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import '../Login/login.css'


async function loginUser(credentials) {
  const { username, password } = credentials;
  // Replace with your actual login validation logic
  if (username === 'admin' && password === 'password') {
    return { success: true, token: 'test123' };
  } else {
    return { success: false, error: 'Invalid username or password' };
  }
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = await loginUser({ username, password });
      setToken(token);
      navigate('/show'); // Redirect to the home page
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">

      {error && <div className="error">{error}</div>}
      <h2 className="text-3xl font-bold mb-6 text-center">
          <span className="logInText">LogIn</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <div>
              <input
                id="email"
                type="email"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
             Password
            </label>
            <div>
              <input
                id="password"
                type="password"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
          
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-700 hover:to-orange-900 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              LogIn
            </button>
            
          </div>
        </form>
        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{' '}
        </p>
        <div className="mt-4">
        <p className="text-center text-gray-600">Log in with:</p>
        <div className="flex justify-center mt-2">
            <a href="https://en-gb.facebook.com/login" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mx-2">
            <BsFacebook className="text-xl"/>
            </a>
            <a href="https://appleid.apple.com/" className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mx-2">
            <FaApplePay className="text-white text-xl"/>
            </a>
            <a href="https://accounts.google.com" className="bg-white border-red-600 hover:bg-red-700 text-red-600 border-2 font-bold py-2 px-4 rounded mx-2">
            <FcGoogle className="text-xl"/>
            </a>
        </div>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};
