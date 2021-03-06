import React, {useState, useEffect} from "react";
import styles from "./BodyDetail.module.css";
import ShowReview from "./ShowReview";
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
		  [rating, setRating] = useState(0),
		  [trigger, setTrigger] = useState(false),
		  [edit, setEdit] = useState(false)
	
	const triggerHandler = () => {
		setTrigger(!trigger)
	}
	
	const onSubmit = async (values) => {
		try {
			setLoading(true);
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
				triggerHandler();
				setLoading(false);
				console.log(submit);
			} catch (error){
				console.log(error);
			}
	}
	
	
	
	const changeRating = ( newRating ) => {
      	setRating(newRating)
    }
	
	const editToggler = (id) =>{
		if(id){
			setEdit(!edit);
		}
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
	}, [token])
	
	useEffect( () => {
		if(token){
			axios.get("https://damp-dawn-67180.herokuapp.com/movie/detail/" + props.detail.id)
				.then(response => {
				setReview(response.data.reviewmovie);
				console.log(response);
			})
	}
	}, [token, props.detail.id])
	
	useEffect( () => {
		if(token){
			axios.get("https://damp-dawn-67180.herokuapp.com/movie/detail/" + props.detail.id)
				.then(response => {
				setReview(response.data.reviewmovie);
				console.log(response);
			})
	}
	}, [trigger, props.detail.id, token])
		
	let userReview = ""
	
	if(token && !edit){
		userReview = (
		<form onSubmit={formik.handleSubmit}>
			<div className={styles.RowInput}>
				<div>
					<img src={user.profileImage} alt={user.nama} />
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
					{!loading ? <button className={styles.Submit} type="submit">Submit</button>
						: <button className={styles.Submit} type="submit">loading...</button> }
				</div>
       		</div>
		</form>
	)} else {
			userReview  = null;
		}
	
	let showReview = (
				<div>
				{userReview}
				{review.length > 0 && review !== null ?
					review.map(review => {
					return(
						<ShowReview
							detail={props.detail}
							user={user}
							key={review.id}
							review={review}
							edit={edit}
							editToggler={editToggler}
							trigger={triggerHandler}/>
					)	
				}) : <h1>There is no review</h1>}
				</div>)
	
    return (
		<div className={styles.BodyReview}>
        	{showReview}
      	</div>
    );
  }

export default Review;    