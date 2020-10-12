import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// HOME PAGE
// import HomeNav from "./Components/Home/HomeNav";
// import Cover from "./Components/Home/Cover";
// import HomePage from "./Pages/HomePage";

import Home from "./Pages/Home";
import User from "./Pages/User";
import axios from "axios";
import Search from "./Components/Home/SearchPage";
import Detail from "./Pages/Detail";
import Footer from "./Components/Footer";
// ==================== //

export default class App extends Component {
  state = {
    detail: [],
    detailReview: [],
    searchMovies: [],
    input: "",
  };

  searchHandler = async (keyWords) => {
    // console.log(keyWords);
    try {
      this.setState({ input: keyWords });
      const submit = await axios({
        method: "get",
        url:
          "https://damp-dawn-67180.herokuapp.com/movie/search?search=" +
          keyWords,
      });
      //   console.log(submit);
      this.setState({ searchMovies: submit.data });
    } catch (error) {
      //   console.log(error);
    }
  };

  detailsHandler = (id) => {
    axios
      .get("https://damp-dawn-67180.herokuapp.com/movie/detail/" + id)
      .then((response) => {
        this.setState(
          {
            detail: response.data.detail,
            detailReview: response.data.reviewmovie,
          },
          console.log("detail review" + this.state.detailReview)
        );
        console.log(response);
        console.log("CLICKCKKK");
      });
  };

  render() {
    return (
      // DETAIL PAGE
      <Router>
        <Switch>
          <Route exact path="/">
            <Home
              searchHandler={this.searchHandler}
              detailsHandler={this.detailsHandler}
            />
          </Route>
          <Route path="/search/:search">
            <Search
              input={this.state.input}
              detailsHandler={this.detailsHandler}
              searchHandler={this.searchHandler}
              search={this.state.searchMovies}
            />
          </Route>
          <Route path="/detail/:id">
            <Detail
              detailReview={this.state.detailReview}
              detail={this.state.detail}
            />
          </Route>
          <Route path="/user" component={User} />
          <Route path="/category" component={Home} />
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
