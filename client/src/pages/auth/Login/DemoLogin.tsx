import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@julseb-lib/react"
import { ErrorMessage } from "components"
import { authService } from "api"
import { useAuthContext } from "context"

export const DemoLogin = () => {
	if (import.meta.env.VITE_DEMO_ENV !== "local") return null

	const { loginUser } = useAuthContext()
	const navigate = useNavigate()
	const [errorMessage, setErrorMessage] = useState(undefined)

	const handleLogin = async () => {
		await authService
			.login({
				email: import.meta.env.VITE_DEMO_EMAIL,
				password: import.meta.env.VITE_DEMO_PASSWORD,
			})
			.then(res => {
				loginUser(res.data.authToken)
				navigate(-1)
			})
			.catch(err => setErrorMessage(err))
	}

	return (
		<>
			<Button onClick={handleLogin}>Demo login</Button>
			<ErrorMessage error={errorMessage} />
		</>
	)
}
