import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// HOME PAGE
// import HomeNav from "./Components/Home/HomeNav";
// import Cover from "./Components/Home/Cover";
// import HomePage from "./Pages/HomePage";







import Home from "./Pages/Home";
import User from "./Pages/User";
import axios from "axios";

import Detail from "./Pages/Detail";
import Footer from "./Components/Footer";

// ==================== //

export default class App extends Component {
	
	state = {
		detail: [],
		detailReview: []
	}
	
	detailsHandler = (id) =>{
		axios.get('https://damp-dawn-67180.herokuapp.com/movie/detail/' + id)
			.then(response => {
				this.setState({
					detail: response.data.detail,
					detailReview: response.data.reviewmovie
				},
							 console.log("detail review" + this.state.detailReview))
				console.log(response)
				console.log('CLICKCKKK')
			})
	}
	
  render() {
    return (
      // DETAIL PAGE
      <Router>
        <Switch>
		  <Route exact path="/">
		  	<Home detailsHandler={this.detailsHandler} />
		  </Route>
          <Route path="/detail/:id">
			<Detail 
				detailReview={this.state.detailReview}
				detail={this.state.detail}/>
		  </Route>
		  <Route path="/user" component={User} />
		  <Route path="/category" component={Home}/>
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
