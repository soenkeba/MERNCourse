//Create a reacimt app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

var test = document.createElement("h1");
test.innerHTML = "blablablaba";

console.log(test);
ReactDOM.render(
  <div>
    <h1> Hallo </h1>
    <ul>
      <li> Milch </li>
      <li> Eier </li>
      <li> Kuchen </li>
    </ul>
  </div>,
  document.getElementById("root")
);
