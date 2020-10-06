import React, {Component} from 'react';
import Navbar from '../DetailNew/Head/NavDetail';
import Particle from './Particle';
import SearchFilm from './SearchFilm';
import Logo from './Logo';


import styles from './Home.module.css';

class Head extends Component {
	
	render(){
		
		return(
		<div className={styles.Container}>
			<Navbar />
			<Logo />
			<Particle />
			<SearchFilm />
		</div>
		)
	}
	
}


export default Head;