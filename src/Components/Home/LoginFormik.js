import React, { useState } from 'react';
import { Modal } from "@material-ui/core";
import styles from './Login.module.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
		email: "",
		password: ""
	}

const schemaLogin = Yup.object().shape({
	 	 email: Yup.string()
			.email("Invalid email address format")
			.required("Email is required"),
	 	 password: Yup.string()
			.min(5, "Password must be 5 characters at minimum")
			.required("Password is required"),
	});

function Login (props) {
	
	const [loading, setLoading] = useState(false);	
	
	const onSubmit = async (values) => {
		try {
				setLoading(true);
				const { email, password } = values;
				const submit = await axios.post(
					"https://appdoto.herokuapp.com/api/users/login",
					{
						email,
						password,
					}
				);
				localStorage.setItem('token', submit.data.data.token);
				props.onClose("open", false)
				props.onChange('token', submit.data.data.token);
				props.history.goBack();
				setLoading(false)
				console.log("submit", submit);
			} catch (error) {
				console.log("error", error);
			}
	}
	
	
		
	const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema: schemaLogin
	})
	
	
	const { open, onClose } = props;
	
	const handleModal = () => {
		props.onClose();
		props.history.goBack();
		console.log(formik);
	}
	
	return(
		<div>
			<Modal open={open} onClose={handleModal}  className={styles.Modal}>
				<div className={styles.ContainerLogin}>
					<h1 onClick={handleModal}>x</h1>
					<h2>Login Form</h2>	
						<form className={styles.Form} onSubmit={formik.handleSubmit}>
							<div className={styles.FormControl}>
							<label htmlFor="email">Email</label>
							<input 
								id="email"
								name="email" 
								type="email" 
								onBlur={formik.handleBlur}
								placeholder="Your Email" 
								onChange={formik.handleChange} 
								value={formik.values.email}></input>
							{formik.touched.email && formik.errors.email 
									? <div className={styles.Error}>{formik.errors.email}</div> : null }
							</div>
							<div className={styles.FormControl}>
							<label htmlFor="password">Password</label>
							<input 
								id="password"
								name="password" 
								type="password" 
								placeholder="Password" 
								onBlur={formik.handleBlur}
								onChange={formik.handleChange} 
								value={formik.values.password}></input>
							{formik.touched.password && formik.errors.password 
									? <div className={styles.Error}>{formik.errors.password}</div> : null }
							</div>
							{!loading ? <button className={styles.Submit} type="submit" value="Submit">Submit</button>
								: <button className={styles.Submit} type="submit" value="Submit">Please wait....</button>}
								<p>Don't have an account? Please <a href="#">register</a> here</p>
						</form>
					</div>
				</Modal>
		</div>
	)
}

export default withRouter(Login);