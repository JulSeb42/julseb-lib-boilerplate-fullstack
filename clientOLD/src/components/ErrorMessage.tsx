/*=============================================== ErrorMessage component ===============================================*/

import { Alert, uuid } from "@julseb-lib/react"
import type { IErrorMessage as ErrorMessageType } from "types"

export const ErrorMessage: FC<IErrorMessage> = ({ error }) => {
    if (!error) return null

    if (Array.isArray(error)) {
        return error.map(err => (
            <Alert alertColor="danger" key={uuid()}>
                {err}
            </Alert>
        ))
    }

    if (typeof error === "string")
        return <Alert alertColor="danger">{error}</Alert>

    return <Alert alertColor="danger">{error?.response?.data?.message}</Alert>
}

interface IErrorMessage {
    error: ErrorMessageType
}
