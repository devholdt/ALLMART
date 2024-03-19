import React from "react";
import { Link } from "react-router-dom";
import Icon from "../Icon";
import * as S from "./styles";

function Error(props) {
	return (
		<S.Container>
			<S.ErrorMessage>
				<p>
					<Icon iconName="exclamation" color="#ffffff" />
					{props.message || "An unknown error occurred"}
				</p>
			</S.ErrorMessage>
			<S.ErrorContent>
				We're sorry for the inconvenience. Please try any of the following
				options.
				<div className="errorButtons">
					<button onClick={() => window.history.back()}>
						<Icon iconName="back" color="#ffffff" />
						back
					</button>
					<button onClick={() => window.location.reload()}>
						<Icon iconName="refresh" color="#ffffff" />
						refresh
					</button>
				</div>
				<span>
					Still encountering issues? Contact us <Link to="/contact">here</Link>
				</span>
			</S.ErrorContent>
		</S.Container>
	);
}

export default Error;
