import React, {useState, useEffect} from 'react';
import styles from "./BodyDetail.module.css";
import StarRatings from 'react-star-ratings';
import { useFormik } from "formik";
import { withRouter } from 'react-router-dom';
import qs from 'qs';
import axios from 'axios';
import * as Yup from "yup";


function ReviewEdit (props) {
	
	const {edit, trigger, review, detail} = props;
	
	const initialValues = {
		comment: review.comment
	}

	const schemaLogin = Yup.object().shape({
	 	 comment: Yup.string()
			.required("Text is required")

	});

	
	const [token] = useState(localStorage.getItem('token')),
		  [user, setUser] = useState([]),
		  [loading, setLoading] = useState(false),
		  [share] = useState(true),
		  [rating, setRating] = useState(review.rating);
	
	
	const onSubmit = async (values) => {
		try {
			console.log(review);
			setLoading(true);
			const {comment} = values;
			const data = qs.stringify({
				comment: comment,
				rating: rating,
				share: share
			})
			console.log(data);
			const submit = await axios({
						method: 'put',
						url: "https://damp-dawn-67180.herokuapp.com/review/edit/" + review.id,
						data: data,
						headers: {
								access_token : token,
								'content-type': 'application/x-www-form-urlencoded;charset=utf-8'	
						},
					  });	
				setRating(0);
				edit(detail.id);
				setLoading(false);
				props.history.push('/detail/review/');
				trigger();
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
	}, [token])
	
	const cancel = () => {
		props.history.goBack();
	}
	
	
	return(
		<div>
			<form onSubmit={formik.handleSubmit}>
			<div className={styles.RowInputEdit}>
				<div className={styles.EditUser}>
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
						className={styles.InputEdit} />
         		</div>
				<div>
					{!loading ? <button className={styles.Submit} type="submit">Submit</button>
						: <button className={styles.Submit} type="submit">loading...</button> }
				</div>
				<div> 
						<button className={styles.Submit} onClick={cancel} type="submit">Cancel</button>
				</div>
       		</div>
		</form>
		</div>
	)
}

export default withRouter(ReviewEdit);