/*=============================================== ProtectedRoute ===============================================*/

import { Navigate } from "react-router-dom"
import { PageLoading } from "@julseb-lib/react"
import { useAuthContext } from "context"
import { PATHS } from "routes"

export const ProtectedRoute: FC<IProtectedRoute> = ({
    children,
    redirectTo = PATHS.LOGIN,
}) => {
    const { isLoggedIn, isLoading } = useAuthContext()

    return isLoading ? (
        <PageLoading />
    ) : isLoggedIn ? (
        children
    ) : (
        <Navigate to={redirectTo} />
    )
}

interface IProtectedRoute {
    children: Children
    redirectTo?: string
}
