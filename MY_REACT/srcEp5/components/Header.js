import { logo_url } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [btnName, setbtnName] = useState("login");
  return (
     <header className="section-navbar">
      <div className="container">
        <div className="navbar-brand">
        <a href="./">
          <img
              src={logo_url}
            alt="LOGO"
            width="200px"
            height="auto"
           />
          </a>
        </div>
          <nav className="navbar">
            <ul>
              <li className="nav-item"><a className="nav-link" href="index.html">home</a></li>
              <li className="nav-item"><a className="nav-link" href="aboout.html">contact</a></li>
              <li className="nav-item"><a className="nav-link" href="service.html">services</a></li>
              <li className="nav-item"><a className="nav-link" href="gallery.html">cart</a></li>
             <li className="nav-item"><a className="nav-link" href="gallery.html">cart</a></li>
            <button className="log-btn" onClick={() => {
              btnName === "login" ? setbtnName("logout") : setbtnName("login")
            }}>{btnName}</button>
            </ul>
          </nav>
      </div>
    </header>
  )
};
export default Header;
