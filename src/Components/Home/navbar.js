import React, {Component} from 'react';
import styles from './Home.module.css';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import Login from "./Login";
import Register from "./Register";
import axios from 'axios';

class Navbar extends Component{
	
	state = {
		token: localStorage.getItem('token'),
		user: [],
		open: false,
		register: false,
	}

	componentDidMount () {
		const { token } = this.state;
		
		if(token){
			axios.get("https://appdoto.herokuapp.com/api/user/", {
				headers: {
					Authorization: token
				}
			})
				.then(response => {
					this.setState({
						user: response.data.data
				})
			})
		}
	}

	componentDidUpdate(prevProps, prevState) {
   		const { token } = this.state;
   		if (token !== prevState.token) {
    		if (token) {
		  		axios.get("https://appdoto.herokuapp.com/api/user/", {
					headers: {
						Authorization: token
					}
				})
					.then(response => {
						this.setState({
							user: response.data.data
					})
				})
      		}
    	}
  	}

	logout = () => {
		localStorage.clear();
		this.setState({
			token: null,
			user: {}
		})
	}
	
	onChange = (name, value) => {
    	this.setState({
      		[name]: value,
   	 	})
		console.log(this.state.open)
		console.log(this.state.register)
  	};
	
	render(){
		
	const { token, user, open, register } = this.state;
		
	let modal = ""
	 
	 if(open){
		 modal = <Login
            open={open}
            onChange={this.onChange}
            onClose={() => this.onChange("open", false)}
          />
	 } else if (register){
		 modal =  <Register
            open={register}
            onChange={this.onChange}
            onClose={() => this.onChange("register", false)}
          />
	 }
	  
		
	return (
		<div className={styles.DivNav}>
			<Router>
				<ul className={styles.Ul}>
					<li className={styles.Li}><NavLink to="/">Movies</NavLink></li>
					<li className={styles.Li}><NavLink to="/about">About</NavLink></li>
					{!token ? <li className={styles.Li}
								  onClick={() => this.onChange("register", true)}><NavLink to="/register">Register</NavLink></li>
					: <li className={styles.Li}><NavLink to="#">Hi, {user.username}</NavLink></li>}
					{!token ? <li className={styles.Li}
								  onClick={() => this.onChange("open", true)}><NavLink to="/login">Login</NavLink></li>
					: <li className={styles.Li} onClick={this.logout}><NavLink to="/">Logout</NavLink></li> }
				</ul>
				{modal}
				<Switch>
					<Route path="/login" component={Login}></Route>
					<Route path="/register" component={Register}></Route>
				</Switch>
			</Router>
		</div>	
		)
	}
}

export default Navbar;