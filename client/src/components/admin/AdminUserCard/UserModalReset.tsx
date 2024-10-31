/*=============================================== UserModalReset component ===============================================*/

import {
    Modal,
    Alert,
    Text,
    Flexbox,
    Button,
    useToast,
} from "@julseb-lib/react"
import { authService } from "api"
import type { User } from "types"

export const UserModalReset: FC<IUserModalReset> = ({
    isOpen,
    setIsOpen,
    user,
}) => {
    const toast = useToast()

    const handleReset = async () => {
        await authService
            .forgotPassword({ email: user.email })
            .then(res => {
                console.log({ res })
                toast.success(
                    `Email was sent to ${user.fullName} successfully`,
                    {
                        duration: 5000,
                        withTimer: true,
                    }
                )
                setIsOpen(false)
            })
            .catch(err =>
                toast.error(err.response.data.message, {
                    duration: 5000,
                    withTimer: true,
                })
            )
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Alert alertColor="primary" maxWidth={400}>
                <Text>
                    Send an email to {user.fullName} to reset their password?
                </Text>

                <Flexbox gap="xs">
                    <Button onClick={handleReset}>Yes, send email</Button>
                    <Button variant="transparent">No, cancel</Button>
                </Flexbox>
            </Alert>
        </Modal>
    )
}

interface IUserModalReset {
    isOpen: boolean
    setIsOpen: DispatchState<boolean>
    user: User
}
