import { Text } from "@julseb-lib/react"
import { AdminPage } from "components"
import { EditPasswordForm } from "forms"

export const AdminEditPassword = () => {
	return (
		<AdminPage title="Edit password" mainSize="form">
			<Text tag="h1">Edit your password</Text>
			<EditPasswordForm />
		</AdminPage>
	)
}
