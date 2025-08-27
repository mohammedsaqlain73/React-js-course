const heading = React.createElement("h1",
  { id: "heading", xyz:"saq" },
  "hello world");//created h1 tag with id and comntents.
//const saq = document.getElementById("root");
// const root =ReactDom.createRoot(saq);
const root = ReactDOM.createRoot(document.getElementById("root"));//get the regerence of div then make it root element
root.render(heading);//render is a process of displaying elements and components on ui what user see on the browser.

