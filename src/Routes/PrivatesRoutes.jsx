import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivatesRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
//   console.log(location)

  if(loading){
    return (
        <div className="flex w-3/4 flex-col gap-4 m-10">
          <div className="skeleton h-[400px] md:h-[500px] w-full"></div>
          <div className="skeleton h-10 w-full  md:w-xl"></div>
          <div className="skeleton h-24 w-full"></div>
          <div className="skeleton h-6 w-[150px]"></div>
        </div>
    )
  }

  if(user && user.email) {
    return children;
  }

  else{
    return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;
  }
};

export default PrivatesRoutes;
