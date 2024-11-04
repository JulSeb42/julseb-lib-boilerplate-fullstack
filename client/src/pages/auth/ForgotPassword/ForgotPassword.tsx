/*=============================================== ForgotPassword ===============================================*/

import { Text } from "@julseb-lib/react"
import { Page } from "components"
import { ForgotPasswordForm } from "./ForgotPasswordForm"

export const ForgotPassword = () => {
    return (
        <Page title="I forgot my password" mainWidth="form">
            <Text tag="h1">I forgot my password</Text>

            <Text>
                Please enter your email address, we will send you a link to
                reset your password.
            </Text>

            <ForgotPasswordForm />
        </Page>
    )
}
