import { useLayoutEffect, useRef, useState,useContext } from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { useOnline } from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const HeaderComponent = () => {

// Using Context API
const {name} = useContext(UserContext);
 
const cartItems = useSelector(store => store.cart.items)

  function checkAuth(auth) {
    return auth ? "Log Out" : "Log In";
  }
  const Check = useOnline();
  const [auth, setAuth] = useState(false);
  return (
    <div
      className="flex justify-between items-center h-20 shadow-md shadow-gray-300 z-50 "
      key="1"
    >
      <div className="w-4/12 p-2 pl-8 ">
        <img className="w-44" src={logo} alt="Logo"></img>
      </div>
      <div className="w-9/12 pr-4">
        <ul id="box" className="flex w-full justify-end font-medium">
          <li className="p-4">
            <Link className="hover:text-orange-400" to="/">
              Home
            </Link>
          </li>
          <li className="p-4 ">
            <Link className="hover:text-orange-400" to="/instaDelivery">
              InstaDelivery
            </Link>
          </li>
          <li className="p-4">
            <Link className="hover:text-orange-400" to="/about">
              <img src=""></img>About
            </Link>
          </li>
          <li className="p-4" onClick={() => setAuth(!auth)}>
            <Link className="hover:text-orange-400" to="/login">
              <img src=""></img>
              {checkAuth(auth)}
            </Link>
          </li>
          <li className="p-4">
            <a className="hover:text-orange-400">
              {" "}
              Cart<sub className="bg-orange-200  font-bold text-xs  px- rounded-full"> {cartItems.length }</sub>
            </a>
          </li>
          <li className="p-4 uppercase text-orange-600 font-normal">{name} {Check ? "🟢" : "🔴"}</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
