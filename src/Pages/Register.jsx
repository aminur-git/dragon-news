import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {
  const {createUser, setUser, user, profileUpdate} = useContext(AuthContext) 
  const [error, setError] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name")
    const photo = form.get("photo")
    const email = form.get("email")
    const password = form.get("password")
    console.log(name, photo, email, password)
    createUser(email, password)
    .then((result)=>{
      setUser(result.user)
      profileUpdate({displayName: name, photoURL: photo})
      .then(()=>{
        navigate('/')
      })
      .catch((err)=>{
        setError([...error, err])
      })
      
    })
    .catch(error=>{
      setError(error.message)
    })
    

  };

  console.log(user?.email)

  return (
    <div>
      <div className="bg-gray-100">
        <div className="flex items-center justify-center min-h-screen  ">
          <div className=" w-xs md:w-[750px] bg-white p-8 md:p-20">
            <h2 className="text-xl md:text-3xl text-[##403F3F] font-bold text-center  sm:pb-10">
              Register your account
            </h2>
            <hr className="my-5 md:mb-10 text-gray-100" />

            <form
              onSubmit={handleSubmit}
              className="space-y-6 max-w-[500px] mx-auto"
            >
              <div>
                <label className="block   md:text-xl font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="your name"
                  className="w-full input  border-none bg-gray-100 text-sm"
                  required
                />
              </div>
              <div>
                <label className="block    md:text-xl font-medium text-gray-700 mb-2">
                  Photo URL
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Enter your photo URl"
                  className="w-full input border-none  bg-gray-100 text-sm"
                  required
                />
              </div>
              <div>
                <label className="block  md:text-xl font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full input border-none   bg-gray-100 text-sm"
                  required
                />
              </div>

              <div>
                <label className="block md:text-xl font-medium text-gray-700 mb-2">
                  Password
                </label>

                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full input border-none   bg-gray-100 text-sm"
                  required
                />
              </div>
              <div>
                {
                  error && <p className="text-red-600 text-xs">{error}</p>
                }
              </div>

              <button
                type="submit"
                className="btn w-full bg-gray-800 text-white hover:bg-black"
              >
                Register
              </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-4">
              Already Have An Account?{" "}
              <Link to="/auth/login" className="text-red-500 font-semibold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
