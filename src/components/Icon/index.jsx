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
	faChevronDown,
	faCartPlus,
	faTrashAlt,
	faMinusCircle,
	faCheck,
	faCircleCheck,
	faTimes,
	faPlusCircle,
	faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

library.add(
	faShoppingCart,
	faPhone,
	faEnvelope,
	faEye,
	faArrowLeft,
	faChevronDown,
	faCartPlus,
	faTrashAlt,
	faMinusCircle,
	faCheck,
	faCircleCheck,
	faTimes,
	faPlusCircle,
	faCaretDown
);

const Icon = ({ iconName, color, ...props }) => {
	const iconMap = {
		cart: faShoppingCart,
		phone: faPhone,
		email: faEnvelope,
		view: faEye,
		back: faArrowLeft,
		down: faChevronDown,
		addToCart: faCartPlus,
		trash: faTrashAlt,
		fullStar: fullStar,
		halfStar: halfStar,
		emptyStar: emptyStar,
		remove: faMinusCircle,
		check: faCheck,
		circleCheck: faCircleCheck,
		close: faTimes,
		add: faPlusCircle,
		caretDown: faCaretDown,
	};

	const icon = iconMap[iconName];

	return <FontAwesomeIcon icon={icon} style={{ color }} {...props} />;
};

export default Icon;
