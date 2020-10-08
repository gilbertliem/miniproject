import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
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
  state = {
    movies: [],
  };

  searchHandler = (keyWords) => {
    this.setState({ movies: [] });
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=86ecab01572806c443d2d6f0ebec2d77&query=${keyWords}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ movies: data.results });
        // console.log(data);
        // console.log(this.state.movies);
      });
  };

  render() {
    return (
      <>
        <Head />
        <Switch>
          <Route exact path="/" component={All} />
          <Route path="/category/anime" component={Anime} />
          <Route path="/category/action" component={Action} />
          <Route path="/category/adventure" component={Adventure} />
          <Route path="/category/science" component={Science} />
          <Route path="/category/comedy" component={Comedy} />
          <Route
            path="/category/search"
            component={SearchPage}
            searchHandler={this.searchHandler}
          />
        </Switch>
      </>
    );
  }
}
