import React, {useState, useEffect} from "react";
import kaka from "../../../Images/ricardo.png";
import styles from "./BodyDetail.module.css";
import StarRatings from 'react-star-ratings';
import { useFormik } from "formik";
import qs from 'qs';
import axios from 'axios';
import * as Yup from "yup";

// ==================== //
const initialValues = {
		comment: ""
	}

const schemaLogin = Yup.object().shape({
	 	 comment: Yup.string()
			.required("Text is required")

	});

function Review (props) {
	
	const [token] = useState(localStorage.getItem('token')),
		  [user, setUser] = useState([]),
		  [loading, setLoading] = useState(false),
		  [share] = useState(true),
		  [review, setReview] = useState([]),
		  [rating, setRating] = useState(0);
	
	const onSubmit = async (values) => {
		try {
			const {comment} = values;
			const data = qs.stringify({
				comment: comment,
				rating: rating,
				share: share
			})
			console.log(data);
			const submit = await axios({
						method: 'post',
						url: "https://damp-dawn-67180.herokuapp.com/review/" + props.detail.id,
						data: data,
						headers: {
								access_token : token,
								'content-type': 'application/x-www-form-urlencoded;charset=utf-8'	
						},
					  });	
				setRating(0);
				console.log(submit);
			} catch (error){
				console.log(error);
			}
	}
	
	const changeRating = ( newRating ) => {
      setRating(newRating)
    }
	
	
	const formik = useFormik({
		initialValues,
		onSubmit,
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
	
	useEffect( () => {
		if(token){
			axios.get("https://damp-dawn-67180.herokuapp.com/movie/detail/" + props.detail.id)
				.then(response => {
				setReview(response.data.reviewmovie);
				console.log(response);
			})
	}
	}, [])
		
	let userReview = ""
	
	if(token){
		userReview = (
		<form onSubmit={formik.handleSubmit}>
			<div className={styles.RowInput}>
				<div>
					<h2 name="nama">{user.nama}</h2>
					<StarRatings
						rating={rating}
						starRatedColor="blue"
						changeRating={changeRating}
						numberOfStars={10}
						starDimension={"20px"}
						name='rating'/>
				</div>
        		<div>
					<input
						type="text"
						placeholder="Leave a review"
						name="comment"
						onChange={formik.handleChange}
						value={formik.values.comment}
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
				{
				review.length > 0 && review !== null ?
				review.map(review => {
				return(
				<div className={styles.RowInput2}>
				<div>
					<img src={kaka} alt="Kaka" />
				</div>
				<div>
					<h2>{review.UserId}</h2>
					<StarRatings
						rating={review.rating}
						starRatedColor="blue"
						numberOfStars={10}
						starDimension={"30px"}
						name='rating'/>
					<p>
					  {review.comment}
					</p>
				</div>
			</div>)
			}) : <h1>There is no review</h1>}
      	</div>
    );
  }

export default Review;