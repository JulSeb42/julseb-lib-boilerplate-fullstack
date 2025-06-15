import { Link, Navigate } from "react-router-dom"
import { Text } from "@julseb-lib/react"
import { Page } from "components"
import { PATHS } from "routes"
import { useAuthContext } from "context"
import { EditAccountForm } from "forms"
import { DeleteAccount } from "./DeleteAccount"

export const EditAccount = () => {
	const { user } = useAuthContext()

	if (user?.role === "admin") return <Navigate to={PATHS.ADMIN_MY_ACCOUNT} />

	return (
		<Page title="Edit your account" mainSize="form">
			<Text tag="h1">Edit your account</Text>

			<EditAccountForm />

			<Text>
				<Link to={PATHS.EDIT_PASSWORD}>Edit your password.</Link>
			</Text>

			<DeleteAccount />
		</Page>
	)
}
