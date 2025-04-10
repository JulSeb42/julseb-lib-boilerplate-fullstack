import { Link } from "react-router-dom"
import { Text } from "@julseb-lib/react"
import { Page } from "components"
import { PATHS } from "routes"
import { SignupForm } from "./SignupForm"

export const Signup = () => {
	return (
		<Page title="Signup" mainSize="form">
			<Text tag="h1">Create an account</Text>

			<SignupForm />

			<Text>
				You already have an account?{" "}
				<Link to={PATHS.LOGIN}>Log in</Link>.
			</Text>
		</Page>
	)
}
