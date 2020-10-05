import React, { Component } from 'react';
import { Modal } from "@material-ui/core";
import styles from './Login.module.css';
import axios from 'axios';

export default class Register extends Component {
	
	state = {
		email: '',
		fullname: '',
		username: '',
		password: '',
	}

	submitHandler = (e) => {
		e.preventDefault();
			const { email, fullname, username, password } = this.state;
			const { onClose, onChange } = this.props;
      		axios.post("https://appdoto.herokuapp.com/api/users/",
			{
				email,
				fullname,
				username,
				password
			}
      	)
			.then(response => {
				localStorage.setItem('token', response.data.data.token);
				onClose("register", false)
				onChange('token', response.data.data.token);
				console.log('bisa')
				console.log(response);
				})
			.catch(err => {
				console.log("error is" + err)
			}) 
		}		

	handleChange = (e) => {
		this.setState({ [e.target.name] : e.target.value })
	}
	
	render() {
		
		const { open, onClose } = this.props
		
		return(
			<div>
				<Modal open={open} onClose={onClose}  className={styles.Modal}>
					<div className={styles.Container}>
						<h1 onClick={onClose}>x</h1>
						<h2>Register an Account</h2>
						<form className={styles.Form} onSubmit={this.submitHandler}>
							<h3>Full Name</h3>
							<input name="fullname" type="text" placeholder="Your Full Name"
								onChange={(e) => this.handleChange(e)}></input>
							<h3>Email</h3>
							<input name="email" type="email" placeholder="Your Email"
								onChange={(e) => this.handleChange(e)}></input>
							<h3>Username</h3>
							<input name="username" type="text" placeholder="Your Username"
								onChange={(e) => this.handleChange(e)}></input>
							<h3>Password</h3>
							<input name="password" type="password" placeholder="Password"
								onChange={(e) => this.handleChange(e)}></input>
							<input className={styles.Submit} type="submit" value="Submit"/>
							<p>Already have an account? Please <a href="#">login</a> here</p>
						</form>
					</div>
				</Modal>
			</div>
		)
	}
}