import React, {Component} from 'react';
import Head from './component/Head/Head';
import Body from './component/Body/Body';
import Options from './component/Body/Options';
import Pagination from "react-js-pagination";
import axios from 'axios';
import Footer from '../Footer/Footer';
import "./Home.css";
import styles from './component/Home.module.css';


export default class Home extends Component {
	
	state = {
		moviesList: [],
		totalResults: 0,
		currentPages: 1,
		activePage: 1,
		token: localStorage.getItem('token'),
		currentUser: []
	}

	componentDidMount() {
		axios.get('https://api.themoviedb.org/3/movie/popular?api_key=090752bd8cb65389996217b782198eb8&language=en-US&page=1')
			.then(response => {
				console.log(response.data.results);
				this.setState({
					moviesList: response.data.results,
					totalResults: response.data.total_results
				})
				console.log(this.state.moviesList)
				console.log(this.state.totalResults)
			})
		axios.get("https://appdoto.herokuapp.com/api/user/", {
			headers: {
				Authorization: this.state.token
			}
		})
			.then(response => {
				this.setState({
					currentUser: response.data.data
				})
		})
	}
	
	nextpage = (pagesNumber) => {
		axios.get('https://api.themoviedb.org/3/movie/popular?api_key=090752bd8cb65389996217b782198eb8&language=en-US&page=' + pagesNumber)
		.then(response => {
			console.log(response.data.results);
			this.setState({
				moviesList: response.data.results,
				currentPages: pagesNumber,
				activePage: pagesNumber
			})
			console.log(this.state.moviesList)
			window.scrollTo(0, 0);
			})
	}
	
	
	render() {
		
		let name = <h1>Popular Movies</h1>;
		
		let pages = <h1 className={styles.Pages}>Pages {this.state.activePage} of 500</h1>
		
		return(
			<div>
				<Head 
					user={this.state.currentUser}
					searching={this.props.searching}
					searchHandler={this.props.searchHandler}
					loading={this.props.loading}
					/>
				{name}
				<Options />
				{pages}
				<Body 
					details={this.props.details}
					movieList={this.state.moviesList}
					/>
				<Pagination 
					className="pagination"
					activePage={this.state.activePage}
					itemsCountPerPage={20}
					totalItemsCount={10000}
					pageRangeDisplayed={5}
					onChange={this.nextpage.bind(this)}/>
				<Footer />
			</div>
		)
	}
}