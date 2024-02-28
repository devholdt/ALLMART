import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt as halfStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

const StarsDisplay = ({ rating }) => {
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 !== 0;
	const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

	return (
		<>
			{Array.from({ length: fullStars }, (_, i) => (
				<FontAwesomeIcon
					key={`full-${i}`}
					icon={fullStar}
					style={{ color: "#c9f66f" }}
				/>
			))}
			{hasHalfStar && (
				<FontAwesomeIcon icon={halfStar} style={{ color: "#c9f66f" }} />
			)}
			{Array.from({ length: emptyStars }, (_, i) => (
				<FontAwesomeIcon
					key={`empty-${i}`}
					icon={emptyStar}
					style={{ color: "#c9f66f" }}
				/>
			))}
		</>
	);
};

export default StarsDisplay;
