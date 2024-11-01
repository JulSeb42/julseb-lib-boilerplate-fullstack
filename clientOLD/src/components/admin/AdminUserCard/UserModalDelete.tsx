/*=============================================== Modal component ===============================================*/

import {
    Modal,
    Alert,
    Button,
    Text,
    Flexbox,
    useToast,
} from "@julseb-lib/react"
import { userService } from "api"
import type { User } from "types"

export const UserModalDelete: FC<IModal> = ({
    user,
    isOpen,
    setIsOpen,
    handleDelete,
}) => {
    const toast = useToast()

    const handleDeleteUser = async () => {
        await userService.deleteAccount(user._id).then(res => {
            console.log({ res })
            handleDelete(user._id)
            toast.error(`${user.fullName} has been deleted`, {
                withTimer: true,
                duration: 3000,
            })
            setIsOpen(false)
        })
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Alert alertColor="danger" maxWidth={400}>
                <Text>
                    Are you sure you want to remove {user.fullName}? This action
                    can not be cancelled.
                </Text>
                <Flexbox gap="xs">
                    <Button color="danger" onClick={handleDeleteUser}>
                        Yes, remove user
                    </Button>
                    <Button
                        variant="transparent"
                        onClick={() => setIsOpen(false)}
                    >
                        No, cancel
                    </Button>
                </Flexbox>
            </Alert>
        </Modal>
    )
}

interface IModal {
    user: User
    isOpen: boolean
    setIsOpen: DispatchState<boolean>
    handleDelete: (id: string) => void
}
