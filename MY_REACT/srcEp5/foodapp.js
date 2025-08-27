import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";


/* ---------------------------------- APP LAYOUT ----------------------------------------------------------
-HEADER
  -LOGO
  -NAV ITEMS
-BODY
 -SEARCH BOX AND SEARCH LOGO
 -RESTUARANT CONTAINER
    -CART
-FOOTER
 -COPY RIGHT
 -LINKS
 -ADDRESS
 -CONTACT

*/
//------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------restaurant infos-----------------------------------------------


//-----------------------------------------------------------------------------------------------------------------
//4.


//3.


// 1.
const Applayout = () => {
  return (<div className="app">
    <Header />
    <Body />
  </div>)

};

//---------------------------------------------reference and render section----------------------------------------
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
