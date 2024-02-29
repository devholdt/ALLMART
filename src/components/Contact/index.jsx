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
				<S.ContactForm onSubmit={handleSubmit(onSubmit)}>
					<input
						type="text"
						placeholder="Full name"
						{...register("Full name", { required: true, min: 3 })}
					/>
					<input
						type="text"
						placeholder="Subject"
						{...register("Subject", { required: true })}
					/>
					<input
						type="text"
						placeholder="Email"
						{...register("Email", {
							required: true,
							pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
						})}
					/>
					<textarea {...register("Body", { required: true, min: 3 })} />

					<input type="submit" />
				</S.ContactForm>
			</S.ContactContainer>
		</main>
	);
}

export default Contact;
