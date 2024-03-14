import { toast, Zoom } from "react-toastify";
import Icon from "../Icon";
import * as S from "./styles";

export function Container(autoClose = 1000, hideProgressBar = true) {
	const CloseButton = ({ closeToast }) => (
		<Icon iconName="close" color="#fff" onClick={closeToast} />
	);

	return (
		<S.StyledToast
			position="bottom-right"
			autoClose={autoClose}
			limit={3}
			hideProgressBar={hideProgressBar}
			closeOnClick={true}
			pauseOnHover={false}
			draggable={true}
			progress={undefined}
			transition={Zoom}
			pauseOnFocusLoss={false}
			closeButton={CloseButton}
		/>
	);
}

export function Emitter({
	type,
	message,
	autoClose = 100000,
	hideProgressBar = true,
}) {
	const options = {
		position: "bottom-right",
		autoClose: autoClose,
		hideProgressBar: hideProgressBar,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
		transition: Zoom,
	};

	switch (type) {
		case "success":
			toast.success(message, options);
			break;
		case "error":
			toast.error(message, options);
			break;
		case "warning":
			toast.warning(message, options);
			break;
		case "info":
			toast.info(message, options);
			break;
		default:
			toast(message, options);
	}
}
