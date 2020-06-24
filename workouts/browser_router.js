import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/user">user</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about" >
            <h1>about Component</h1>
            </Route>

          <Route path="/user">
            <h1>user Component</h1>
          </Route>
          <Route path="/home">
            <h1>home Component</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
