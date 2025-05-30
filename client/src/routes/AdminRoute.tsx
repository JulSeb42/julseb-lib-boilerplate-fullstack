import { Navigate } from "react-router-dom"
import { PageLoading } from "@julseb-lib/react"
import { useAuthContext } from "context"
import { PATHS } from "routes"

export const AdminRoute: FC<IAdminRoute> = ({
	children,
	redirectTo = PATHS.MY_ACCOUNT,
}) => {
	const { isLoggedIn, user, isLoading } = useAuthContext()

	if (isLoading) return <PageLoading />

	if (isLoggedIn && user?.role === "admin") return children

	return <Navigate to={redirectTo} />
}

interface IAdminRoute {
	children: Children
	redirectTo?: string
}
