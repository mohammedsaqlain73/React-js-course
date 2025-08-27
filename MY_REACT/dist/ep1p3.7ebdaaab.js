impo;
//------------------------------------------------
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, React.createElement("h1", {
    id: "heading"
}, "i'm saqlain")));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //react not loaded overwrittebn by i'm saqlain. so everytime if somethiung is render in root it will
//be overwritten .if React is not loaded it will show react not loaded
// for html class/id="name " but in React in createElement it is class/id:"name" like css
//-----------------------------------------------------------------------------------------------------------------------------
/*
<div class="parent">
      <div class="child">
      <h1 id="heading1">im saqlain</h1>
      <h1 id="heading2">im bro</h1>
      </div>
</div>

*/ const parent1 = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {
        id: "heading1"
    }, "i'm saqlain1"),
    React.createElement("h1", {
        id: "heading2"
    }, "i'm bro")
]));
root.render(parent1); //but where does the previous one i'm saqlain goes.evertime you render in the root it will overwrite the previous
//one completely
//-----------------------------------------------------------------------------------------------------------------------------------
/*
<div class="parent">
      <div class="child1">
      <h1 id="heading1">im saqlain</h1>
      <h1 id="heading2">im bro</h1>
      </div>
      <div class="child2">
      <h1 id="heading1">im suhan</h1>
      <h1 id="heading2">im api</h1>
      </div>
</div>

*/ const parent2 = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {
            id: "heading1"
        }, "i'm saqlain1"),
        React.createElement("h1", {
            id: "heading2"
        }, "i'm bro")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {
            id: "heading1"
        }, "i'm saqlain2"),
        React.createElement("h1", {
            id: "heading2"
        }, "i'm bro2")
    ])
]);
root.render(parent2); //Honestly it is hard and complicated to do in this way.to solve it we will use JSx .then why did i do sobcz to show you that
 // without jsx also react can be done.,

//# sourceMappingURL=ep1p3.7ebdaaab.js.map
