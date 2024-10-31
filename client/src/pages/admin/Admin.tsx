/*=============================================== Admin page ===============================================*/

import { Text } from "@julseb-lib/react"
import { AdminPage } from "components"
import { useAuthContext } from "context"

export const Admin = () => {
    const { user, isLoading } = useAuthContext()

    if (isLoading) return null // TODO: add skeleton

    return (
        <AdminPage title="Admin">
            <Text tag="h1">Hello {user?.fullName}</Text>
        </AdminPage>
    )
}
