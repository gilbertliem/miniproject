import React, {useState, useEffect} from 'react';
import styles from "./BodyDetail.module.css";
import ReviewEdit from "./ReviewEdit";
import StarRatings from 'react-star-ratings';
import { Link, Route, withRouter } from 'react-router-dom';
import axios from 'axios';

function ShowReview (props) {
	
	const {review, edit, user, editToggler, trigger} = props;
	
	const [token] = useState(localStorage.getItem('token')),
		  [userData, setUserData] = useState([]),
		  [loading, setLoading] = useState(false)
	
	useEffect(() => {
			axios.get('https://damp-dawn-67180.herokuapp.com/user/data/' + review.UserId)
				.then(response => {
					setUserData(response.data);
					console.log(response);
			})	
				
	}, [review.UserId])
	
	const submitDelete = async () => {
		try {
			setLoading(true);
			const submit = await axios.delete('https://damp-dawn-67180.herokuapp.com/review/delete/' + review.id, {
				headers: {
					access_token: token
				}
			})
			console.log(submit);
			trigger();
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	}
	
	let show = "";
	
	if(!edit) {
		show = (
			<div className={styles.RowInput2}>
			{userData.map(user => {
				return(
				<div className={styles.RowShow}>
					<div>
						<img src={user.profileImage} alt={user.nama} />
						<h2>{user.nama}</h2>
						<StarRatings
							rating={review.rating}
							starRatedColor="blue"
							numberOfStars={10}
							starDimension={"20px"}
							name='rating'/>
					</div>		
					<div>	
						<p>{review.comment}</p>
					</div>
				</div>
				)
			})}
					{user.id === review.UserId ?
					<div className={styles.Button}>
						<Link to={"/detail/review/edit/" + review.id}>
							<button onClick={() => editToggler(review.id)} className={styles.SubmitEdit}>Edit</button>
						</Link>
					{!loading ? <button className={styles.Submit} onClick={submitDelete}>Delete</button>
						:  <button className={styles.Submit} onClick={submitDelete}>loading...</button> }
					</div>: "" }
				</div>)
			} else {
				show = null;
			}
	
	return(
			<div>
				{show}
				<Route path={"/detail/review/edit/" + review.id}>
					<ReviewEdit 
						detail={props.detail} 
						edit={editToggler} 
						review={props.review} 
						trigger={props.trigger}/>
				</Route>
			</div>
				)
			}

export default withRouter(ShowReview);