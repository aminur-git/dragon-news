import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const {signIn} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location)

  const handleSubmit = (e)=>{
    e.preventDefault()
    const form = new FormData(e.target)
    const email = form.get("email")
    const password = form.get("password")
    
    signIn(email, password)
    .then(()=>{
      navigate(location.state)
    })


  }



  return (
    <div className="bg-gray-100">
      <div className="flex items-center justify-center min-h-screen  ">
        <div className=" w-xs md:w-[750px] bg-white p-8 md:p-20 ">
          <h2 className="text-2xl md:text-3xl text-[##403F3F] font-bold text-center pb-6 sm:pb-10">
            Login your account
          </h2>
          <hr className="mb-10 text-gray-100" />

          <form onSubmit={handleSubmit} className="space-y-6 max-w-[500px] mx-auto">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
              name="email"
                type="email"
                placeholder="Enter your email address"
                className="w-full input input-bordered bg-gray-100 text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
              name="password"
                type="password"
                placeholder="Enter your password"
                className="w-full input input-bordered bg-gray-100 text-sm"
                required
              />
            </div>

            <button
              type="submit"
              className="btn w-full bg-gray-800 text-white hover:bg-black"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don't Have An Account?{" "}
            <Link to="/auth/register" className="text-red-500 font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
