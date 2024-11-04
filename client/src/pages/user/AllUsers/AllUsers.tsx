/*=============================================== AllUsers ===============================================*/

import { Text } from "@julseb-lib/react"
import { Page } from "components"
import { UsersList } from "./UsersList"

export const AllUsers = () => {
    return (
        <Page title="All Users">
            <Text tag="h1">All users</Text>
            <UsersList />
        </Page>
    )
}
