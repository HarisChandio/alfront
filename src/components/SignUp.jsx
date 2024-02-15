import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="flex items-center justify-center h-5/6 mt-5">
      <div className="w-full max-w-sm p-4 border border-gray-200 rounded-lg shadow-md ">
        <form className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-black">Create an account</h5>
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-black">
              Your name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 "
              placeholder="Fahad"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 "
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">
              Create a password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 "
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="agree"
                  type="checkbox"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 "
                  required
                />
              </div>
              <label htmlFor="agree" className="ms-2 text-sm font-medium text-black">
                I agree to the{' '}
                <Link to="#" className="text-blue-700 hover:underline">
                  Terms of Service
                </Link>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create Account
          </button>
          <div className="text-sm font-medium text-black">
            Already have an account?{' '}
            <Link to="/signin" className="text-blue-700 hover:underline">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
