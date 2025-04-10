import { Text } from "@julseb-lib/react"
import { Page } from "components"

export const ForgotSent = () => {
	return (
		<Page title="Email sent successfully!">
			<Text tag="h1">Email sent successfully!</Text>

			<Text>
				We just sent you an email with a link to reset your password.
			</Text>
		</Page>
	)
}
