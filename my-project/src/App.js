import React from "react";
let name = "sanjay";
function appss() {
  return (
    <div>
      <h1>sanjay</h1>
    </div>
  )
};
function App() {
  return (
    <div>
      <h1>chai aur code......</h1>
      <nav>
        <li>home</li>
        <li>list </li>
        <li>number </li>
        {appss( )}
        <li>about</li>
      </nav>

      <div className="container">this is sanjay</div>
    </div>
  );
}

export default App;
