import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Input, InputCheck } from "@julseb-lib/react"
import { useAuthContext } from "context"
import { authService } from "api"
import { ErrorMessage } from "components"

const STORAGE_ITEM_NAME = "userEmail"

export const LoginForm = () => {
	const navigate = useNavigate()
	const { loginUser } = useAuthContext()

	const [savePassword, setSavePassword] = useState(true)
	const [inputs, setInputs] = useState({
		email: window.localStorage.getItem(STORAGE_ITEM_NAME) ?? "",
		password: "",
	})
	const [errorMessage, setErrorMessage] = useState(undefined)

	const handleInputs = (e: ChangeEvent<HTMLInputElement>) =>
		setInputs({
			...inputs,
			[e.target.id]: e.target.value,
		})

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()

		if (savePassword) {
			window.localStorage.setItem(STORAGE_ITEM_NAME, inputs.email)
		} else {
			window.localStorage.removeItem(STORAGE_ITEM_NAME)
		}

		await authService
			.login(inputs)
			.then(res => {
				loginUser(res.data.authToken)
				navigate(-1)
			})
			.catch(err => setErrorMessage(err))
	}

	return (
		<>
			<Form onSubmit={handleSubmit} buttonPrimary="Log in">
				<Input
					id="email"
					type="email"
					value={inputs.email}
					onChange={handleInputs}
					label="Email"
				/>

				<Input
					id="password"
					type="password"
					value={inputs.password}
					onChange={handleInputs}
					label="Password"
				/>

				<InputCheck
					id="save"
					label="Save your email address for faster login?"
					type="checkbox"
					variant="toggle"
					checked={savePassword}
					onChange={e => setSavePassword(e.target.checked)}
				/>
			</Form>

			<ErrorMessage error={errorMessage} />
		</>
	)
}
