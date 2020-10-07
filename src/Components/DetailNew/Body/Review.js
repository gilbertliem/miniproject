import React from "react";
import kaka from "../../../Images/ricardo.png";
import Bintang from "../../../Images/bintang.png";
import styles from "./BodyDetail.module.css";

// ==================== //

function Review () {

    return (
		<div className={styles.BodyReview}>
        	<div className={styles.RowInput}>
				<div>
					<img src={kaka} alt="Kaka" />
					<h2>Ricardo Kaka</h2>
					<img className={styles.Star} src={Bintang} alt="" />
					<img className={styles.Star} src={Bintang} alt="" />
					<img className={styles.Star} src={Bintang} alt="" />
					<img className={styles.Star} src={Bintang} alt="" />
					<img className={styles.Star} src={Bintang} alt="" />
				</div>
        		<div>
					<input
						  type="text"
						  placeholder="Leave a review"
						  name=""
						  className={styles.Input} />
         		</div>
       		</div>
			<div className={styles.RowInput2}>
				<div>
					<img src={kaka} alt="Kaka" />
				</div>
				<div>
					<h2>Ricardo Kaka</h2>
					<p>
					  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
					  enim ad minim veniam, quis nostrud exercitation ullamco laboris
					  nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam,
					  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					  commodo consequat
					</p>
				</div>
			</div>
      	</div>
    );
  }

export default Review;