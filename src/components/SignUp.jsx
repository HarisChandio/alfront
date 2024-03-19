import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
function SignUp() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signupAcc = async () => {
    try {
      const res = await axios.post(
        `http://localhost:3000/api/auth/register`,
        {
          email,
          rollNumber,
          username,
          password,
        }
      );
      localStorage.setItem("token", res.data.token);
      toast.success("Succesfully Signed Up", {
        onClose: () => navigate(`/`),
      });
    } catch (error) {
      toast.error("Error while Signing Up");
    }
  };



  return (
    <div className="flex items-center justify-center h-5/6 mt-5">
      <div className="w-full max-w-sm p-4 border border-gray-200 rounded-lg shadow-md ">
        <form className="space-y-6"  >
          <h5 className="text-xl font-medium text-black">Create an ac count</h5>
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-black">
              Your name
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 "
              placeholder="Fahad"
              value={username} onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-black">
              Roll Number
            </label>
            <input
              type="text"
              name="rollNumber"
              id="rollNumber"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 "
              placeholder="129912"
              onChange={(e) => setRollNumber(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button
            label={"create account"}
            onClick={async () => {
              const response = await axios.post("http://localhost:3000/api/auth/register", {
                username,
                email,
                rollNumber,
                password
              })
              console.log(response.data)
              localStorage.setItem("token", response.data.token)
              navigate("/home")
            }}
          >

          </Button>
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
