import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Head from "../Components/Home/Head";
import Anime from "../Components/Home/Anime";
import Action from "../Components/Home/Action";
import Adventure from "../Components/Home/Adventure";
import Science from "../Components/Home/Science";
import Comedy from "../Components/Home/Comedy";
import Category from "../Components/Home/Category";
import SearchPage from "../Components/Home/SearchPage";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <>
        <Head />
        <Switch>
          <Route exact path="/">
            <Category detailsHandler={this.props.detailsHandler} />
          </Route>
          <Route path="/category/search" component={SearchPage} />
          <Route path="/category/anime" component={Anime} />
          <Route path="/category/action" component={Action} />
          <Route path="/category/adventure" component={Adventure} />
          <Route path="/category/science" component={Science} />
          <Route path="/category/comedy" component={Comedy} />
        </Switch>
      </>
    );
  }
}
