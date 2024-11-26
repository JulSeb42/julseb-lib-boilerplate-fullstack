/*=============================================== ForgotPasswordForm ===============================================*/

import { useState } from "react"
import { Form, Input } from "@julseb-lib/react"
import { useNavigate } from "react-router-dom"
import { authService } from "api"
import { ErrorMessage } from "components"
import { PATHS } from "routes"
import type { IErrorMessage } from "types"

export const ForgotPasswordForm = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [errorMessage, setErrorMessage] = useState<IErrorMessage>(undefined)

    const handleEmail = (e: ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value)

    const handleSubmitForm = async (e: FormEvent) => {
        e.preventDefault()

        await authService
            .forgotPassword({ email })
            .then(() => navigate(PATHS.FORGOT_PASSWORD_SENT))
            .catch(err => setErrorMessage(err))
    }

    return (
        <>
            <Form
                onSubmit={handleSubmitForm}
                buttonPrimary="Send"
                buttonSecondary={{ text: "Cancel", to: PATHS.LOGIN }}
            >
                <Input
                    id="email"
                    onChange={handleEmail}
                    value={email}
                    label="Email"
                    autoFocus
                />
            </Form>

            <ErrorMessage error={errorMessage} />
        </>
    )
}
