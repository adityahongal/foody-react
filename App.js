const header = React.createElement(
  "h1",
  { id: "header" },
  "Header is Showing..."
);

// console.log(header)

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(header);

// Nested structure inside react

// in html it is written as
// <div id="Parent">
//  <div id="Child">
//      <h1>this is H1 tag</h1>
//      <h1>this is H2 tag</h1>
//  </div>
// </div>

// In React this can be written as

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [                  // Array of childrens
    React.createElement("h1", {}, "This is h1 tag"),
    React.createElement("h2", {}, "This is h2 tag"),
  ])
);

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
