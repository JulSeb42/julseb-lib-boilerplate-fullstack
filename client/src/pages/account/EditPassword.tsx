import { Navigate } from "react-router-dom"
import { Text } from "@julseb-lib/react"
import { useAuthContext } from "context"
import { Page } from "components"
import { EditPasswordForm } from "forms"
import { PATHS } from "routes"

export const EditPassword = () => {
	const { user } = useAuthContext()

	if (user?.role === "admin")
		return <Navigate to={PATHS.ADMIN_EDIT_PASSWORD} />

	return (
		<Page title="Edit password" mainSize="form">
			<Text tag="h1">Edit your password</Text>

			<EditPasswordForm />
		</Page>
	)
}
