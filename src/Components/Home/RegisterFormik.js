import React, { useState } from 'react';
import { Modal } from "@material-ui/core";
import styles from './Login.module.css';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
import Netflix from '../../Images/netflixxx.png';
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
		email: "",
		nama: "",
		password: "",
	}

const schemaRegister = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(5, "Password must be 5 characters at minimum")
    .required("Password is required"),
  nama: Yup.string()
    .min(6, "Your username should be 6 characters long")
    .required("Username is required"),
});

function Register (props) {
	
	const { open, onClose, switchModal } = props;
	
	const [loading, setLoading] = useState(false);	
	
	const onSubmit = async (values) => {
		try {
				setLoading(true);
				const { email, nama, password } = values;
				const submit = await axios.post("https://damp-dawn-67180.herokuapp.com/register",
			{
				email,
				nama,
				password,
			}
				);
				onClose("register", false)
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
		validationSchema: schemaRegister
	})
	
	const handleModal = () => {
		onClose();
		console.log(formik);
	}
	
	const redirect = () =>{
		switchModal();
	}
	
	return(
		<div>
			<Modal open={open} onClose={handleModal}  className={styles.Modal}>
				<div className={styles.Container}>
					<h2>Register Form</h2>	
					<img src={Netflix} alt="Netflix" width="140" height="105"></img>
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
							<label htmlFor="email">Fullname</label>
							<input 
								id="nama"
								name="nama" 
								type="text" 
								onBlur={formik.handleBlur}
								placeholder="Your Name" 
								onChange={formik.handleChange} 
								value={formik.values.name}></input>
							{formik.touched.nama && formik.errors.nama
									? <div className={styles.Error}>{formik.errors.nama}</div> : null }
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
							{!loading ? <button className={styles.Submit} type="submit" value="Submit">Register</button>
								: <button className={styles.Submit} type="submit" value="Submit">Please wait....</button>}
								<p>Already have an account? Please <Link to="#" onClick={redirect}>Login</Link> here</p>
						</form>
					</div>
				</Modal>
		</div>
	)
}

export default withRouter(Register);