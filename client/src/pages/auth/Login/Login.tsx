import { Text } from "@julseb-lib/react"
import { Link } from "react-router-dom"
import { Page } from "components"
import { PATHS } from "routes"
import { LoginForm } from "./LoginForm"
import { DemoLogin } from "./DemoLogin"

export const Login = () => {
	return (
		<Page title="Log in" mainSize="form">
			<Text tag="h1">Log in</Text>

			<LoginForm />

			<Text>
				<Link to={PATHS.FORGOT_PASSWORD}>I forgot my password.</Link>
			</Text>

			<Text>
				You don't have an account?{" "}
				<Link to={PATHS.SIGNUP}>Sign up</Link>.
			</Text>

			<DemoLogin />
		</Page>
	)
}
