import { useState, useTransition } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Input, passwordRegex, InputCheck } from "@julseb-lib/react"
import { useAuthContext } from "context"
import { authService } from "api"
import { ErrorMessage } from "components"
import { PATHS } from "routes"
import { COMMON_TEXTS } from "data"
import type { LibValidationStatus } from "@julseb-lib/react/types"
import type { IErrorMessage as ErrorMessageType } from "types"

const STORAGE_ITEM_NAME = "userEmail"

export const SignupForm = () => {
	const { loginUser } = useAuthContext()
	const navigate = useNavigate()

	const [inputs, setInputs] = useState({
		fullName: "",
		email: "",
		password: "",
	})
	const [saveEmail, setSaveEmail] = useState(true)
	const [errorMessage, setErrorMessage] =
		useState<ErrorMessageType>(undefined)
	const [validationPassword, setValidationPassword] =
		useState<LibValidationStatus>(undefined)
	const [isLoading, startTransition] = useTransition()

	const handleInputs = (e: ChangeEvent<HTMLInputElement>) => {
		setInputs({
			...inputs,
			[e.target.id]: e.target.value,
		})

		if (e.target.id === "password" && e.target.value.length > 0) {
			if (passwordRegex.test(e.target.value)) {
				setValidationPassword(true)
			} else {
				setValidationPassword(false)
			}
		} else {
			setValidationPassword(undefined)
		}
	}

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()

		startTransition(async () => {
			if (!passwordRegex.test(inputs.password)) {
				setValidationPassword(false)
				return
			}

			if (saveEmail) {
				window.localStorage.setItem(STORAGE_ITEM_NAME, inputs.email)
			} else {
				window.localStorage.removeItem(STORAGE_ITEM_NAME)
			}

			await authService
				.signup(inputs)
				.then(res => {
					loginUser(res.data.authToken)
					navigate(PATHS.THANK_YOU)
				})
				.catch(err => setErrorMessage(err))
		})
	}

	return (
		<>
			<Form
				onSubmit={handleSubmit}
				buttonPrimary="Create your account"
				isLoading={isLoading}
			>
				<Input
					id="fullName"
					label="Full name"
					value={inputs.fullName}
					onChange={handleInputs}
				/>

				<Input
					id="email"
					label="Email"
					value={inputs.email}
					onChange={handleInputs}
				/>

				<Input
					id="password"
					label="Password"
					value={inputs.password}
					onChange={handleInputs}
					type="password"
					validation={{
						status: validationPassword,
						message: COMMON_TEXTS.ERRORS.PASSWORD_NOT_VALID,
					}}
				/>

				<InputCheck
					id="save"
					label="Save your email address for faster login?"
					type="checkbox"
					variant="toggle"
					checked={saveEmail}
					onChange={e => setSaveEmail(e.target.checked)}
				/>
			</Form>

			<ErrorMessage error={errorMessage} />
		</>
	)
}
