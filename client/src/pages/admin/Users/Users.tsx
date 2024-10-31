/*=============================================== UsersPage ===============================================*/

import { Text } from "@julseb-lib/react"
import { AdminPage } from "components"
import { AdminUsersList } from "./AdminUsersList"

export const Users = () => {
    return (
        <AdminPage title="Users">
            <Text tag="h1">All users</Text>
            <AdminUsersList />
        </AdminPage>
    )
}
