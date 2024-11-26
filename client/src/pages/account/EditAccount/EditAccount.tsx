/*=============================================== EditAccount ===============================================*/

import { Text } from "@julseb-lib/react"
import { Link } from "react-router-dom"
import { Page } from "components"
import { PATHS } from "routes"
import { EditAccountForm } from "./EditAccountForm"
import { DeleteAccount } from "./DeleteAccount"

export const EditAccount = () => {
    return (
        <Page title="Edit your account" mainSize="form">
            <Text tag="h1">Edit your account</Text>

            <EditAccountForm />

            <Text>
                <Link to={PATHS.EDIT_PASSWORD}>Edit your password.</Link>
            </Text>

            <DeleteAccount />
        </Page>
    )
}
