"use client";

// imports ================================================== //
import AuthForm from "@/entities/AuthForm";
import VisiblePasswordInputForm from "@/features/VisiblePasswordInputForm";
import InputForm, { validationInput } from "@/shared/components/InputForm";
import { FormEvent, InvalidEvent, useState } from "react";
import { CustomLoginForm } from "./types";
import WrongMessage from "@/entities/WrongMessage";
import getErrorMessageByStatusCode from "./helper";

// main ===================================================== //
const LoginForm = () => {

	const [wrongMessage, setWrongMessage] = useState<string | null>(null);

	async function handleSubmit(event: FormEvent<CustomLoginForm>) {

		event.preventDefault();

		const { email, password } = event.currentTarget.elements;

		if (email && password) {

			const response = await fetch("/login/api", {
				method: "POST",
				headers: {
					"Content-Type": "Application/json"
				},
				body: JSON.stringify({
					email: email.value,
					password: password.value
				})
			});

			if (response.redirected) {
				window.location.replace(response.url);
			} else {
				setWrongMessage(
					getErrorMessageByStatusCode(response.status)
				);
			}

		}

	}
	function handleFocus() {
		if (wrongMessage) setWrongMessage(null);
	}

	return (
		<>
			{
				wrongMessage &&
				<WrongMessage
					close={() => setWrongMessage(null)}
					text={wrongMessage}
				/>
			}
			<AuthForm
				name="Вход в аккаунт"
				onSubmit={handleSubmit}
				onFocus={handleFocus}
			>
				<InputForm
					description="Электронная почта"
					placeholder="Введите адрес электронной почты, привязанной к аккаунту"
					name="email"
					type="email"
					required
				/>
				<InputForm
					description="Пароль"
					placeholder="Введите пароль от аккаунта"
					name="password"
					type="password"
					isClear={wrongMessage !== null}
					pattern={validationInput.password.pattern}
					onInvalid={(event: InvalidEvent<HTMLInputElement>) => {
						event.target.setCustomValidity(validationInput.password.message);
					}}
					required
				>
					<VisiblePasswordInputForm />
				</InputForm>
			</AuthForm>
		</>
	);

};

// export =================================================== //
export default LoginForm;
