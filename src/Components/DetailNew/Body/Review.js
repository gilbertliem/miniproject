import React, {useState, useEffect} from "react";
import kaka from "../../../Images/ricardo.png";
import styles from "./BodyDetail.module.css";
import StarRatings from 'react-star-ratings';
import { useFormik } from "formik";
import axios from 'axios';
import * as Yup from "yup";

// ==================== //
const initialValues = {
		text: "",
		rating: 0
	}

const schemaLogin = Yup.object().shape({
	 	 text: Yup.string()
			.required("Text is required"),
	 	 rating: Yup.string()
			.min(0.1, "You must set rating star")

	});

function Review () {
	
	const [token] = useState(localStorage.getItem('token')),
		  [user, setUser] = useState([]);
	
	const formik = useFormik({
		initialValues,
		validationSchema: schemaLogin
	})

	useEffect( () => {
		if(token){
			axios.get("https://damp-dawn-67180.herokuapp.com/user/id", {
				headers: {
					access_token: token
				}
			})
				.then(response => {
				setUser(response.data.users);
				console.log(response);
			})
	}
	}, [])
	
	let userReview = ""
	
	if(token){
		userReview = (
		<form>
			<div className={styles.RowInput}>
				<div>
					<h2 name="name">{user.nama}</h2>
					<StarRatings
						rating={formik.values.rating}
						starRatedColor="blue"
						changeRating={formik.handleChange}
						numberOfStars={5}
						value={formik.values.rating}
						starDimension={"30px"}
						name='rating'/>
				</div>
        		<div>
					<input
						type="text"
						placeholder="Leave a review"
						name="text"
						onChange={formik.handleChange}
						value={formik.values.text}
						className={styles.Input} />
         		</div>
				<div>
					<button className={styles.Submit}>Submit</button>
				</div>
       		</div>
		</form>
	)}

    return (
		<div className={styles.BodyReview}>
        	{userReview}
			<div className={styles.RowInput2}>
				<div>
					<img src={kaka} alt="Kaka" />
				</div>
				<div>
					<h2>Ricardo Kaka</h2>
					<p>
					  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
					  enim ad minim veniam, quis nostrud exercitation ullamco laboris
					  nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam,
					  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					  commodo consequat
					</p>
				</div>
			</div>
      	</div>
    );
  }

export default Review;