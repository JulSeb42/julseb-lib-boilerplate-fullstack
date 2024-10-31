/*=============================================== Signup ===============================================*/

import { Link } from "react-router-dom"
import { Text } from "@julseb-lib/react"
import { Page } from "components"
import { SignupForm } from "pages/auth/Signup/SignupForm"
import { PATHS } from "routes"

export const Signup = () => {
    return (
        <Page title="Signup" mainWidth="form">
            <Text tag="h1">Create an account</Text>

            <SignupForm />

            <Text>
                You already have an account?{" "}
                <Link to={PATHS.LOGIN}>Log in</Link>.
            </Text>
        </Page>
    )
}
