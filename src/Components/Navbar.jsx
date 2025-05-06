import React, { useContext } from "react";
import { Link } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
const {person, user, logOut} = useContext(AuthContext)


  return (
    <div className="flex justify-between items-center gap-3">
      <div>
        {user?.email}
      </div>
      <div className="nav space-x-5">
        <Link to={"/"}>Home</Link>
        <Link to={"/career"}>Career</Link>
        <Link to={"/about"}>About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div className="">
          <img src={userIcon} className="rounded-full" alt="" />
        </div>
        {
          user ? <Link onClick={logOut}><button className="btn btn-neutral  rounded-none">Logout</button></Link>
          : <Link to={'/auth/login'}><button className="btn btn-neutral  rounded-none">Login</button></Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
