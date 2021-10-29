import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from "./components/HomePage/homePage";
import Login from "./components/Login/login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path={`/`} component={HomePage} />
        <Route exact path={`/login`} component={Login} />
        </Switch>
        <ToastContainer
            position="bottom-right"
          />
      </Router>
    </div>
  );
}

export default App;
