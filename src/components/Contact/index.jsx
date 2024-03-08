import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DocumentTitle from "../DocumentTitle";
import { Container as ToastContainer, Emitter as ToastEmitter } from "../Toast";
import * as yup from "yup";
import * as S from "./styles";

function Contact() {
	DocumentTitle("Contact");

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

		ToastEmitter({
			type: "success",
			message: "Message sent successfully!",
			autoClose: 3000,
			hideProgressBar: false,
		});

		reset();
	};

	return (
		<main>
			<h1>Contact</h1>

			<S.Container>
				<S.Title>
					<h2>Get in touch</h2>
					<p>Send us a question or inquiry</p>
				</S.Title>
				<S.Form onSubmit={handleSubmit(onSubmit)}>
					<label htmlFor="fullName">Full Name</label>
					<S.Input
						id="fullName"
						type="text"
						placeholder="Full name"
						{...register("fullName", { required: true, min: 3 })}
					/>
					<S.Error>{errors.fullName?.message}</S.Error>

					<label htmlFor="email">Email</label>
					<S.Input
						id="email"
						type="text"
						placeholder="Email"
						{...register("email", {
							required: true,
						})}
					/>
					<S.Error>{errors.email?.message}</S.Error>

					<label htmlFor="subject">Subject</label>
					<S.Input
						id="subject"
						type="text"
						placeholder="Subject"
						{...register("subject", { required: true })}
					/>
					<S.Error>{errors.subject?.message}</S.Error>

					<label htmlFor="message">Message</label>
					<S.Textarea
						id="message"
						placeholder="Message"
						{...register("message", { required: true, min: 3 })}
					/>
					<S.Error>{errors.message?.message}</S.Error>

					<S.Submit type="submit" />
				</S.Form>
			</S.Container>
			<ToastContainer />
		</main>
	);
}

export default Contact;
