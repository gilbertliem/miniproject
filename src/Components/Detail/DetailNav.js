import React, { Component } from "react";
import axios from 'axios';
import brand from "../../Images/brand.png";
import kaka from "../../Images/kaka.png";
import "./DetailNav.css";
import Login from "../Home/Login";
import Register from "../Home/Register";

// ==================== //

export default class DetailNav extends Component {

	state = {
		open: false,
		register: false,
		token: localStorage.getItem('token'),
		data: [],
	}

	componentDidMount () {
		const { token } = this.state;
		
		if(token){
			axios.get("https://appdoto.herokuapp.com/api/user/", {
				headers: {
					Authorization: this.state.token
				}
			})
				.then(response => {
					this.setState({
						data: response.data.data
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
						Authorization: this.state.token
					}
				})
					.then(response => {
						this.setState({
							data: response.data.data
					})
				})
      		}
    	}
  	}
	
	onChange = (name, value) => {
    	this.setState({
      		[name]: value,
   	 	})
		console.log(this.state.open)
		console.log(this.state.register)
  	};

	logout = () => {
		localStorage.clear();
			this.setState({
				token: null,
				data: {}
			})
	}

  render() {
	 
	 const { open, register, token, data } = this.state 
	 
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
      <>
        <nav className="detail">
          <div className="navbar">
            <img src={brand} alt="MilanTV" />
            <h1>MilanTV</h1>
          </div>
          <form action="">
            <input type="text" placeholder="search movie" name="" id="" />
          </form>
          <div className="profile">
            <img src={kaka} alt="Profile" />
			  {!token ? <h3 onClick={() => this.onChange("register", true)}>Register</h3>
			  		: <h3>{data.username} </h3>}
			  {!token ? <h3 onClick={() => this.onChange("open", true)}>login</h3>
			   		: <h3 onClick={this.logout}>logout</h3>}
          </div>
        </nav>
		{modal}
      </>
    );
  }
}
