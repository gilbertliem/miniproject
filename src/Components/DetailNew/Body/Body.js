import React from 'react';
import OptionDetail from './OptionDetail';

function Body (props) {
	
	return(
		<div>
			<OptionDetail 
				detailReview={props.detailReview}
				detail={props.detail}/>
		</div>
	)
}

export default Body;