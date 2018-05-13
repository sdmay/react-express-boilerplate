// Include the Main React Dependencies
const React = require("react");
const ReactDOM = require("react-dom");

// Include the main Parent Component
const Parent = require("./components/Parent");

// This code here allows us to render our main component (in this case Parent)
ReactDOM.render(<Parent />, document.getElementById("app"));
