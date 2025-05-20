import { Link } from "react-router-dom"
import { Text } from "@julseb-lib/react"
import { Page } from "components"
import { PATHS } from "routes"

export const VerificationSuccess = () => {
	return (
		<Page title="Verify your account">
			<Text tag="h1">Your account is verifed!</Text>

			<Text>
				You can now access all the functionalities on our website.{" "}
				<Link to={PATHS.MY_ACCOUNT}>Go to your account</Link>.
			</Text>
		</Page>
	)
}
