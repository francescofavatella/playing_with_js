import React from "react";
import ReactDOM from "react-dom";
import LetVsVarComponent from "./component/let_vs_var";
import StringUtiliesComponent from "./component/string_utilities";
import MapFilterReduceComponent from "./component/map_filter_reduce";
import ArraysComponent from "./component/arrays";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <StringUtiliesComponent />
      <MapFilterReduceComponent />
      <LetVsVarComponent />
      <ArraysComponent />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
