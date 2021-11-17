import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from "./pages/homePage";
import Login from "./components/Login/login";
import Contact from "./pages/contact";
import CountryPage from "./pages/countryPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path={`/`} component={HomePage} />
        <Route exact path={`/login`} component={Login} />
        <Route exact path={`/country/:countryName`} component={CountryPage} />
        <Route exact path={`/contact`} component={Contact} />
        </Switch>
        <ToastContainer
            position="bottom-right"
          />
      </Router>
    </div>
  );
}

export default App;
