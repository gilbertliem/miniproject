import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// HOME PAGE
// import HomeNav from "./Components/Home/HomeNav";
// import Cover from "./Components/Home/Cover";
// import HomePage from "./Pages/HomePage";







import Home from "./Pages/Home";
import User from "./Pages/User";


import Detail from "./Pages/Detail";
import Footer from "./Components/Footer";

// ==================== //

export default class App extends Component {
  render() {
    return (
      // DETAIL PAGE
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail" component={Detail} />
		  <Route path="/user" component={User} />
		  <Route path="/category/" component={Home}/>
        </Switch>
        <Footer />
      </Router>

      // HOME PAGE
      // <Router>

      // <Switch>
      // <Route path="/" component={Home} />
      // <Route path="/login" component={Login} />
      // <Route path="/register" component={Register} />
      // </Switch>
      // <Footer />
      // </Router>
    );
  }
}
