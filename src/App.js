import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Portfolio from "./components/pages/Portfolio";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import MyHeader from "./components/pages/Header2";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <NavTabs />
        <MyHeader />
        <Switch>
          <Route exact path="/">
            <Redirect to="/about" />
          </Route>
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
