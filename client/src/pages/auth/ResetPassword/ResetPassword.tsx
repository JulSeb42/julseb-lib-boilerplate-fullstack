/*=============================================== ResetPassword ===============================================*/

import { Text } from "@julseb-lib/react"
import { Page } from "components"
import { ResetPasswordForm } from "./ResetPasswordForm"

export const ResetPassword = () => {
    return (
        <Page title="Reset your password" mainWidth="form">
            <Text tag="h1">Reset your password</Text>

            <ResetPasswordForm />
        </Page>
    )
}
