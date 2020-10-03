import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// HOME PAGE
import HomeNav from "./Components/Home/HomeNav";
import Cover from "./Components/Home/Cover";
import HomePage from "./Pages/HomePage";
import Anime from "./Components/Home/Anime";
import Action from "./Components/Home/Action";
import Adventure from "./Components/Home/Adventure";
import Science from "./Components/Home/Science";
import Comedy from "./Components/Home/Comedy";
import Footer from "./Components/Footer";
import Register from './Components/Home/Register';
import Login from './Components/Home/Login';
import Home from './Pages/Home';

// DETAIL PAGE
// import DetailNav from "./Components/Detail/DetailNav";
// import CoverDetail from "./Components/Detail/CoverDetail";
// import DetailPage from "./Pages/DetailPage";
// import Characters from "./Components/Detail/Characters";
// import Review from "./Components/Detail/Review";
// import Footer from "./Components/Footer";

// ==================== //

export default class App extends Component {
  render() {
    return (
      // DETAIL PAGE
      // <Router>
      //   <DetailNav />
      //   <CoverDetail />
      //   <Switch>
      //     <Route exact path="/" component={DetailPage} />
      //     <Route path="/characters" component={Characters} />
      //     <Route path="/review" component={Review} />
      //   </Switch>
      //   <Footer />
      // </Router>

      // HOME PAGE
      <Router>
       
        <Switch>
          <Route path="/" component={Home} />
		  <Route path="/login" component={Login} />
		  <Route path="/register" component={Register} />
          <Route path="/anime" component={Anime} />
          <Route path="/action" component={Action} />
          <Route path="/adventure" component={Adventure} />
          <Route path="/science" component={Science} />
          <Route path="/comedy" component={Comedy} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
