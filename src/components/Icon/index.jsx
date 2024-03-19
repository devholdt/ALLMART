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
	faChevronLeft,
	faChevronDown,
	faRotate,
	faCartPlus,
	faTrashAlt,
	faMinus,
	faCheck,
	faCircleCheck,
	faTimes,
	faPlus,
	faCaretDown,
	faMagnifyingGlass,
	faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

library.add(
	faShoppingCart,
	faPhone,
	faEnvelope,
	faEye,
	faChevronLeft,
	faChevronDown,
	faRotate,
	faCartPlus,
	faTrashAlt,
	faMinus,
	faCheck,
	faCircleCheck,
	faTimes,
	faPlus,
	faCaretDown,
	faMagnifyingGlass,
	faCircleExclamation
);

const Icon = ({ iconName, color, ...props }) => {
	const iconMap = {
		cart: faShoppingCart,
		phone: faPhone,
		email: faEnvelope,
		view: faEye,
		back: faChevronLeft,
		down: faChevronDown,
		refresh: faRotate,
		addToCart: faCartPlus,
		trash: faTrashAlt,
		fullStar: fullStar,
		halfStar: halfStar,
		emptyStar: emptyStar,
		remove: faMinus,
		check: faCheck,
		circleCheck: faCircleCheck,
		close: faTimes,
		add: faPlus,
		caretDown: faCaretDown,
		search: faMagnifyingGlass,
		exclamation: faCircleExclamation,
	};

	const icon = iconMap[iconName];

	return <FontAwesomeIcon icon={icon} style={{ color }} {...props} />;
};

export default Icon;
