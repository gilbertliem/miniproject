import React, {Component} from 'react';
import styles from '../Home.module.css';
import {withRouter} from 'react-router-dom';

class Options extends Component {
	state = {
		random: []
	}

	onChange = (e) => {
    this.props.history.push(`/${e.target.value}`);
  }
	render() {
		return(
			<div>
				<form>
						<select 
							onChange={this.onChange}
							className={styles.Options}>
							<option value="">Insert...</option>
							<option value="popular">Most Popular</option>
							<option value="top-rated">Most Top Rated</option>
							<option value="latest">Most Latest</option>
							<option value="play">Now Playing</option>
							<option value="upcoming">Most Upcoming</option>
						</select>
				</form> 
			</div>
		)
	}
}

export default withRouter(Options);