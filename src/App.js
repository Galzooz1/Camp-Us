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
import AdminPanel from "./pages/adminPanel";
import './styles-sass/App.scss';
import About from "./pages/about";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path={`/`} component={HomePage} />
        <Route exact path={`/login`} component={Login} />
        <Route exact path={`/country/:countryName`} component={CountryPage} />
        <Route exact path={`/about`} component={About} />
        <Route exact path={`/contact`} component={Contact} />
        <Route exact path={`/admin`} component={AdminPanel} />
        </Switch>
        <ToastContainer
            position="bottom-right"
          />
      </Router>
    </div>
  );
}

export default App;
