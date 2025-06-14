import { Link, Navigate } from "react-router-dom"
import { Text } from "@julseb-lib/react"
import { useAuthContext } from "context"
import { Page, UserHeader } from "components"
import { PATHS } from "routes"

export const MyAccount = () => {
	const { user } = useAuthContext()

	if (user?.role === "admin") return <Navigate to={PATHS.ADMIN_HOME} />

	return (
		<Page title="My account">
			<UserHeader user={user!} isAccount />

			{!user?.verified && <Text>Your account is not verified!</Text>}

			<Text>
				<Link to={PATHS.EDIT_ACCOUNT}>Edit your account.</Link>
			</Text>
		</Page>
	)
}
