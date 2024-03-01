import React from "react";
import { toast, Zoom } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Icon from "../Icon";
import * as yup from "yup";
import * as S from "./styles";

function Contact() {
	const schema = yup
		.object({
			fullName: yup
				.string()
				.required("Please enter your full name")
				.min(3, "Full name must be at least 3 characters"),
			email: yup
				.string()
				.required("Please enter your email")
				.email("Please enter a valid email address"),
			subject: yup
				.string()
				.required("Please enter the subject")
				.min(3, "Subject must be at least 3 characters"),
			message: yup
				.string()
				.required("Please enter your message")
				.min(3, "Message must be at least 3 characters"),
		})
		.required("Please fill in all the required fields");

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		console.log(data);
		toast.success(`Message sent successfully!`, {
			position: "bottom-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
			icon: () => <Icon iconName="check" color="#c9f66f" />,
		});
		reset();
	};

	const CloseButton = ({ closeToast }) => (
		<Icon iconName="close" color="#fff" onClick={closeToast} />
	);

	return (
		<main>
			<h1>Contact</h1>

			<S.ContactContainer>
				<S.ContactTitle>
					<h2>Get in touch</h2>
					<p>Send us a question or inquiry</p>
				</S.ContactTitle>
				<S.ContactForm onSubmit={handleSubmit(onSubmit)}>
					<label htmlFor="fullName">Full Name</label>
					<S.FormInput
						id="fullName"
						type="text"
						placeholder="Full name"
						{...register("fullName", { required: true, min: 3 })}
					/>
					<S.FormError>{errors.fullName?.message}</S.FormError>

					<label htmlFor="email">Email</label>
					<S.FormInput
						id="email"
						type="text"
						placeholder="Email"
						{...register("email", {
							required: true,
						})}
					/>
					<S.FormError>{errors.email?.message}</S.FormError>

					<label htmlFor="subject">Subject</label>
					<S.FormInput
						id="subject"
						type="text"
						placeholder="Subject"
						{...register("subject", { required: true })}
					/>
					<S.FormError>{errors.subject?.message}</S.FormError>

					<label htmlFor="message">Message</label>
					<S.FormTextarea
						id="message"
						placeholder="Message"
						{...register("message", { required: true, min: 3 })}
					/>
					<S.FormError>{errors.message?.message}</S.FormError>

					<S.FormSubmit type="submit" />
				</S.ContactForm>
			</S.ContactContainer>
			<S.StyledToast
				pauseOnFocusLoss={false}
				closeButton={CloseButton}
				transition={Zoom}
			/>
		</main>
	);
}

export default Contact;
