import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/about.js";
import Contact from "./components/contact.js";
import Error from "./components/error.js";
import Restautrantmenu from "./components/restaurantmenu.js";
import Cart from "./components/Cart.js";
import Services from "./components/services.js";
//import Grocery from "./components/grocery.js";
import { Provider } from "react-redux";
import appstore from "./utils/Appstore.js";
const Grocery = lazy(() => import("./components/grocery.js"));



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
const Applayout = () => {
  return (<div className="app">
    <Provider store={appstore}>
    <Header />
    <Outlet />
    </Provider>
  </div>)

};
/* normal without header every time
const approutes = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement:<Error/>
  },
    {
    path: "/about",
    element: <About/>,
      },
       {
        path: "/content",
        element: <Contact/>,
      },




])
*/
const approutes = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element:<Body/>
    },
       {
    path: "/about",
    element: <About/>,
      },
       {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/services",
        element:<Services/>

      },
      {
        path: "/grocery",
        element:<Suspense fallback={<h1>loading..........</h1>}><Grocery/></Suspense>

      },
       {
        path: "/cart",
        element:<Cart/>,
       },
      {
        path: "/restaurant/:resid",
        element:<Restautrantmenu/>,
       },

    ],
    errorElement:<Error/>
  },

])

//---------------------------------------------reference and render section----------------------------------------
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approutes} />);
//root.render(<RouterProvider router={approutes} />);
