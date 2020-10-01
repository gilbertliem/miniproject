import React, { Component } from 'react';
import { Button, Grid, Modal, TextField } from "@material-ui/core";
import styles from './Login.module.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import Spinner from '../../UI/Spinner/Spinner';

class Login extends Component {
	
	state = {
		email: '',
		password: '',
		loading: false
	}
	
	submitHandler = async (e) => {
		e.preventDefault();
		console.log("test");
		try {
			this.setState({loading:true})
			console.log("loading" + this.state.loading);
		  	const { email, password } = this.state;
		 	const submit = await axios.post(
				"https://appdoto.herokuapp.com/api/users/login",
				{
			  		email,
			  		password,
				}
		  	);
		  	localStorage.setItem('token', submit.data.data.token);
		  	this.props.onClose("open", false)
		  	this.props.onChange('token', submit.data.data.token);
		  	console.log("submit", submit);
		} catch (error) {
		 	console.log("error", error);
			}
			this.setState({loading:false})
		console.log("loading is " + this.state.loading);
	  	};

	handleChange = (e) => {
		this.setState({ [e.target.name] : e.target.value })
	}


	render() {	
		
		const { open, onClose, loading } = this.props
		
		return(
			<div>
				<Modal open={open} onClose={onClose}  className={styles.Modal}>
					<div className={styles.ContainerLogin}>
						<h1 onClick={onClose}>X</h1>
						<h2>Login Form</h2>	
						<form className={styles.Form} onSubmit={this.submitHandler}>
							<h3>Email</h3>
							<input name="email" type="email" placeholder="Your Email" 
								onChange={(e) => this.handleChange(e)}></input>
							<h3>Password</h3>
							<input name="password" type="password" placeholder="Password" 
								onChange={(e) => this.handleChange(e)}></input>
							<input className={styles.Submit} type="submit" value="Submit"/>
							<p>Don't have an account? Please <a href="#">register</a> here</p>
						</form>
					</div>
				</Modal>
			</div>
		)
	}
}

export default withRouter(Login);