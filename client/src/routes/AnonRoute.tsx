/*=============================================== AnonRoute ===============================================*/

import { Navigate } from "react-router-dom"
import { PageLoading } from "@julseb-lib/react"
import { useAuthContext } from "context"
import { PATHS } from "routes"

export const AnonRoute: FC<IAnonRoute> = ({
    children,
    redirectTo = PATHS.MY_ACCOUNT,
}) => {
    const { isLoggedIn, isLoading } = useAuthContext()

    return isLoading ? (
        <PageLoading />
    ) : !isLoggedIn ? (
        children
    ) : (
        <Navigate to={redirectTo} />
    )
}

interface IAnonRoute {
    children: Children
    redirectTo?: string
}
