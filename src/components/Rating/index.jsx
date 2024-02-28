import React from "react";
import Icon from "../Icon";

const Rating = ({ rating }) => {
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 !== 0;
	const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

	return (
		<>
			{Array.from({ length: fullStars }, (_, i) => (
				<Icon key={`full-${i}`} iconName="fullStar" color="#c9f66f" />
			))}
			{hasHalfStar && <Icon iconName="halfStar" color="#c9f66f" />}
			{Array.from({ length: emptyStars }, (_, i) => (
				<Icon key={`empty-${i}`} iconName="emptyStar" color="#c9f66f" />
			))}
		</>
	);
};

export default Rating;
