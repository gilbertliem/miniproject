import React, { Component } from 'react';
import { Modal } from "@material-ui/core";
import styles from './Login.module.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const schemaRegister = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(5, "Password must be 5 characters at minimum")
    .required("Password is required"),
  confirmpass: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("You forgot to type this field"),
  fullname: Yup.string()
    .min(8, "Your name should be 8 characters long")
    .required("Name is required"),
  username: Yup.string()
    .min(6, "Your username should be 6 characters long")
    .required("Username is required"),
});

const schemaLogin = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(5, "Password must be 5 characters at minimum")
    .required("Password is required"),
});


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
			this.props.history.goBack();
		  	console.log("submit", submit);
		} catch (error) {
		 	console.log("error", error);
			}
	  	};

	handleChange = (e) => {
		this.setState({ [e.target.name] : e.target.value })
	}
	
	handleModal = () => {
		this.props.onClose();
		this.props.history.goBack();
	}
	
	
	render() {	
		
		const { open, onClose } = this.props
		
		return(
			<div>
				<Modal open={open} onClose={this.handleModal}  className={styles.Modal}>
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