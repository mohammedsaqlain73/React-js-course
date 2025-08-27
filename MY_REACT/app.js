import React from "react";
import ReactDOM from "react-dom/client";
//------------------------------ React element -------------------------------------------------------------
const heading = React.createElement(
  "h1",
  { id:"heading" },
  "saqlain reading react"
);
//------------------------------------------ jsx -------------------------------------------------------------------
const jsxheading = <h1 id="heading2">saqlain reading jsx</h1>
//Jsx is html or xml like syntax
console.log(heading);
console.log(jsxheading);//both are same objects
const jsxheading1 = <h1 className="heading">jsx camelCase rule</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root.render(heading);
root1.render(jsxheading);
//------------------------------------------------React component------------------------------------------------------------
const HeadingComponent = () =>
{
  return (<h1 className="heading2">saqlain onborading to ReactJS </h1>,
         <h1 className="sep">----------------------------------------------------------------------------------------</h1>
  )
}
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
/*                         or
const HeadingComponent = () => (
  <h1 className="heading2">saqlain onborading to ReactJS </h1>
  );

*/
root2.render(<HeadingComponent/>);
//--------------------component composition(one composition present in another composition)----------------------------------
const Compo1 = () => (
  <h1 className="heading2">saqlain from compo1</h1>
);
const Compo2 = () => (
  <div id="container">
    <h1 className="heading3">saqlain from compo2</h1>
    < Compo1 />
  </div>
);
const root3 = ReactDOM.createRoot(document.getElementById("root3"));
root3.render(<Compo2 />);
//-------------------------------------- power of {} ----------------------------------------------------------------
const num = 786;
const title = (
  <h1 className="heading2">
    this is for power of "curly braces"
  </h1>
);
const Body = () => (
  <div id="container">
    <h1 className="sep">------ this is for curly braces--------</h1>
    <h1 className="heading2">this is body part</h1>
    {num}
    {num * 2}
    {title}
  </div>
)
const root4= ReactDOM.createRoot(document.getElementById("root4"));
root4.render(<Body/>)

