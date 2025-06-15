import { Text, Button, Flexbox } from "@julseb-lib/react"
import { AdminPage } from "components"
import { EditAccountForm } from "forms"
import { PATHS } from "routes"

export const AdminMyAccount = () => {
	return (
		<AdminPage title="My Account" mainSize="form">
			<Text tag="h1">My account</Text>

			<EditAccountForm />

			<Flexbox>
				<Button
					variant="transparent"
					noPadding
					to={PATHS.ADMIN_EDIT_PASSWORD}
				>
					Edit my password
				</Button>
			</Flexbox>
		</AdminPage>
	)
}
