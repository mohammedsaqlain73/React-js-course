import React from "react";
import ReactDOM from "react-dom/client";
//------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById("root"));
//-----------------------------------------------------------------------------------------------------------------------------

const parent2 = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div",{ id: "child",key:"child-1" },
    [React.createElement("h1", { id:"heading1" }, "i'm saqlain1"),
     React.createElement("h1",{id:"heading2"},"i'm bro")
   ]
  ),
  React.createElement("div",{ id:"child2",key:"child-2" },
    [React.createElement("h1", { id:"heading3" }, "i'm saqlain2"),
     React.createElement("h1",{id:"heading4"},"i'm bro1")
   ]
    )
  ]
)
root.render(parent2);
//Honestly it is hard and complicated to do in this way.to solve it we will use JSx .then why did i do sobcz to show you that
// without jsx also react can be done.,


