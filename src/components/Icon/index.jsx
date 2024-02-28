import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faStar as fullStar,
	faStarHalfAlt as halfStar,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import {
	faShoppingCart,
	faPhone,
	faEnvelope,
	faEye,
	faArrowLeft,
	faCartPlus,
	faTrashAlt,
	faMinusCircle,
	faCheck,
	faTimes,
} from "@fortawesome/free-solid-svg-icons";

library.add(
	faShoppingCart,
	faPhone,
	faEnvelope,
	faEye,
	faArrowLeft,
	faCartPlus,
	faTrashAlt,
	faMinusCircle,
	faCheck,
	faTimes
);

const Icon = ({ iconName, color = "black", ...props }) => {
	const iconMap = {
		cart: faShoppingCart,
		phone: faPhone,
		email: faEnvelope,
		view: faEye,
		back: faArrowLeft,
		add: faCartPlus,
		trash: faTrashAlt,
		fullStar: fullStar,
		halfStar: halfStar,
		emptyStar: emptyStar,
		remove: faMinusCircle,
		check: faCheck,
		close: faTimes,
	};

	const icon = iconMap[iconName];

	return <FontAwesomeIcon icon={icon} style={{ color }} {...props} />;
};

export default Icon;
