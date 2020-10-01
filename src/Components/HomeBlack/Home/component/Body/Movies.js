import React, {Component} from 'react';
import styles from '../Home.module.css';
import moment from 'moment';

export default class Movies extends Component {
	render () {
		
		const { list } = this.props;
		
		return(
			<div 
				className={styles.MoviesContainer}
				onClick={() => this.props.details(list.id)}>
				<h2 className={styles.Rating}> {list.vote_average} </h2>
				<img 
					alt="cuk" 
					src={"https://image.tmdb.org/t/p/original" + list.poster_path}></img>
				<h1>{list.title}</h1>
				<p>{moment(list.release_date).format("MMM, D, YYYY")}</p>
			</div>
		)
	}
}