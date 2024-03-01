import React from "react";
import { useForm } from "react-hook-form";
import * as S from "./styles";

function Contact() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => console.log(data);

	console.log(errors);

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

					<label htmlFor="subject">Subject</label>
					<S.FormInput
						id="subject"
						type="text"
						placeholder="Subject"
						{...register("subject", { required: true })}
					/>

					<label htmlFor="email">Email</label>
					<S.FormInput
						id="email"
						type="text"
						placeholder="Email"
						{...register("email", {
							required: true,
							pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
						})}
					/>

					<label htmlFor="message">Message</label>
					<S.FormTextarea
						id="message"
						placeholder="Message"
						{...register("message", { required: true, min: 3 })}
					/>

					<S.FormSubmit type="submit" />
				</S.ContactForm>
			</S.ContactContainer>
		</main>
	);
}

export default Contact;
