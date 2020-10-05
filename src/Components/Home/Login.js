import React, { Component } from 'react';
import { Modal } from "@material-ui/core";
import styles from './Login.module.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';


class Login extends Component {
	
	state = {
		email: '',
		password: '',
	}
	
	submitHandler = async (e) => {
		e.preventDefault();
		console.log("test");
		try {
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
	  	};

	handleChange = (e) => {
		this.setState({ [e.target.name] : e.target.value })
	}


	render() {	
		
		const { open, onClose } = this.props
		
		return(
			<div>
				<Modal open={open} onClose={onClose}  className={styles.Modal}>
					<div className={styles.ContainerLogin}>
						<h1 onClick={onClose}>x</h1>
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