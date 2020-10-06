import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// HOME PAGE
// import HomeNav from "./Components/Home/HomeNav";
// import Cover from "./Components/Home/Cover";
// import HomePage from "./Pages/HomePage";
// import Anime from "./Components/Home/Anime";
// import Action from "./Components/Home/Action";
// import Adventure from "./Components/Home/Adventure";
// import Science from "./Components/Home/Science";
// import Comedy from "./Components/Home/Comedy";
// import Footer from "./Components/Footer";
import Home from './Pages/Home';

// DETAIL PAGE
import Detail from './Pages/Detail';
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
        </Switch>
        <Footer />
      </Router>

      // HOME PAGE
		  // <Router>
       
		  // <Switch>
		  // <Route path="/" component={Home} />
		  // <Route path="/login" component={Login} />
		  // <Route path="/register" component={Register} />
		  // <Route path="/anime" component={Anime} />
		  // <Route path="/action" component={Action} />
		  // <Route path="/adventure" component={Adventure} />
		  // <Route path="/science" component={Science} />
		  // <Route path="/comedy" component={Comedy} />
		  // </Switch>
		  // <Footer />
		  // </Router>
    );
  }
}
