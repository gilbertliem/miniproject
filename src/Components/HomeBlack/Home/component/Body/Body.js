import React, {Component} from 'react';
import styles from '../Home.module.css';
import Movies from './Movies';

import { NavLink } from 'react-router-dom';


export default class Body extends Component {
	state={
		pages: 1,
		rows: 10,
		movieList: this.props.movieList,
		trimmed: []
	}

	pagination = (movieList, page, rows) => {
		let trimStart = (page - 1) * rows;
		let trimEnd = trimStart + rows;

		let trimmed = movieList.slice(trimStart, trimEnd);

		let pages = Math.ceil(movieList.length/rows);
		this.setState({
			movieList : trimmed,
			pages: pages
	})	
	}
	
	buildPage = () => {
		let data = this.pagination(this.state.movieList, this.state.pages, this.state.rows);
		console.log('data =' + data);
		this.setState({
			trimmed : data.movieList
		})
	}

	render () {
		return(
			<div className={styles.BodyContainer}>
				{this.props.movieList.length > 0 ?
					this.props.movieList.map(list => {
						return (
						<NavLink
							className={styles.Linked}
							to={"/details/" + list.id}>
							<Movies 
								key={list.id}
								list={list}
								details={this.props.details}
							/>
						</NavLink>
						)
				}) : (
					<h1 className={styles.Data}>There is no data :(</h1>
				)
				} 

			</div>
		)
	}
}