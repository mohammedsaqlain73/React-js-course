import { logo_url } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useonlinestatus";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setbtnName] = useState("login");
  const onlineStatus = useOnlineStatus();
  //to use in cart side as value of store need to subscribr the store
  const cartcount =useSelector((store)=>store.cart.items)
  return (
     <header className="section-navbar">
      <div className="flex justify-between items-center px-6 py-7 bg-green-100">
        <div className="navbar-brand">
        <a href="./">
          <img
              src={logo_url}
            alt="LOGO"
            width="200px"
            height="300px"
           />
          </a>
        </div>

          <nav className="navbar">
          <ul>
              <li className="status">online status :{ onlineStatus ? "💚" : "❤️"}</li>
              <li className="nav-item"><Link  className="nav-link" to="">home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">contact</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/services">services</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">about</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/cart">cart({cartcount.length})</Link></li>
             <li className="nav-item"><Link className="nav-link" to="/grocery">Grocery</Link></li>
            <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out" onClick={() => {
              btnName === "login" ? setbtnName("logout") : setbtnName("login")
            }}>{btnName}</button>
            </ul>
          </nav>
      </div>
    </header>
  )
};
export default Header;
