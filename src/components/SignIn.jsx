import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

import { Button } from "./Button";

function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center h-5/6 mt-10 mb-10 ">
      <div className="w-full max-w-sm p-4 border border-gray-200 rounded-lg shadow-md">
        <form className="space-y-6" >
          <h5 className="text-xl font-medium text-gray-900 ">
            Sign in to our platform
          </h5>
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 "
              placeholder="name@company.com"
               onChange={(e)=> setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 "
               onChange={(e)=>setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-start">

            <a
              href="#"
              className=" relative bottom-2 ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Forget Password?
            </a>
          </div>
          <Button onClick={async () => {
            const response = await axios.post("http://localhost:3000/api/auth/login",{
              email,
              password
            })
            console.log(response)
            localStorage.setItem("token", response.data.token)
            navigate("/portal")
          }} label={"Sign In"}>

          </Button>
          {/* <Link to="/portal">
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login to your account
            </button>
          </Link> */}
          <div className="text-sm font-medium text-black ">
            Not registered?
            <Link
              className="text-blue-700 hover:underline dark:text-blue-500 px-1 "
              to="/signup"
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
