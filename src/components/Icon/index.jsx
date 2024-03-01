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
	faPlusCircle,
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
	faTimes,
	faPlusCircle
);

const Icon = ({ iconName, color, ...props }) => {
	const iconMap = {
		cart: faShoppingCart,
		phone: faPhone,
		email: faEnvelope,
		view: faEye,
		back: faArrowLeft,
		addToCart: faCartPlus,
		trash: faTrashAlt,
		fullStar: fullStar,
		halfStar: halfStar,
		emptyStar: emptyStar,
		remove: faMinusCircle,
		check: faCheck,
		close: faTimes,
		add: faPlusCircle,
	};

	const icon = iconMap[iconName];

	return <FontAwesomeIcon icon={icon} style={{ color }} {...props} />;
};

export default Icon;
