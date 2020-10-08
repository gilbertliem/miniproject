import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Head from "../Components/Home/Head";
import All from "../Components/Home/All";
import Anime from "../Components/Home/Anime";
import Action from "../Components/Home/Action";
import Adventure from "../Components/Home/Adventure";
import Science from "../Components/Home/Science";
import Comedy from "../Components/Home/Comedy";
import SearchPage from "../Components/Home/SearchPage";
import Detail from "./Detail";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <>
        <Head />
        <Switch>
          <Route exact path="/" component={All} />
          <Route path="/detail" component={Detail} />
          <Route path="/anime" component={Anime} />
          <Route path="/action" component={Action} />
          <Route path="/adventure" component={Adventure} />
          <Route path="/science" component={Science} />
          <Route path="/comedy" component={Comedy} />
          <Route path="/search" component={SearchPage} />
        </Switch>
      </>
    );
  }
}
