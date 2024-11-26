/*=============================================== EditAccountForm ===============================================*/

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
    Button,
    Form,
    Input,
    Modal,
    Alert,
    Text,
    Flexbox,
} from "@julseb-lib/react"
import { userService } from "api"
import { ErrorMessage, ImageUploader } from "components"
import { useAuthContext } from "context"
import { PATHS } from "routes"
import type { IErrorMessage } from "types"

export const EditAccountForm = () => {
    const navigate = useNavigate()

    const { user, setUser, setToken } = useAuthContext()

    const [inputs, setInputs] = useState({
        fullName: user?.fullName || "",
    })
    const [avatar, setAvatar] = useState(user?.avatar!)
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState<IErrorMessage>(undefined)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleInputs = (e: ChangeEvent<HTMLInputElement>) =>
        setInputs({ ...inputs, [e.target.id]: e.target.value })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        userService
            .editAccount(user?._id!, {
                ...inputs,
                avatar,
            })
            .then(res => {
                setUser(res.data.user)
                setToken(res.data.authToken)
                navigate(-1)
            })
            .catch(err => setErrorMessage(err))
    }

    return (
        <>
            <Form
                onSubmit={handleSubmit}
                buttonPrimary="Save changes"
                buttonSecondary={{ text: "Cancel", to: PATHS.MY_ACCOUNT }}
                isLoading={isLoading}
            >
                <Input
                    id="fullName"
                    value={inputs.fullName}
                    onChange={handleInputs}
                    label="Full name"
                    autoFocus
                />
                <Input
                    id="email"
                    value={user?.email}
                    label="Email"
                    helperBottom="You can not edit your email."
                    disabled
                />
                <ImageUploader
                    value={avatar || ""}
                    setImageUrl={setAvatar}
                    setIsLoading={setIsLoading}
                    id="avatar"
                    label="Profile picture"
                    icons={{ empty: "user" }}
                    iconSizes={{ empty: 64 }}
                    size={120}
                    helperBottom={{
                        element: (
                            <Button
                                variant="transparent"
                                noPadding
                                color="danger"
                                type="button"
                                onClick={() => setIsModalOpen(true)}
                                disabled={!avatar}
                            >
                                Remove profile picture
                            </Button>
                        ),
                        linkColor: "danger",
                    }}
                />
            </Form>

            <ErrorMessage error={errorMessage} />

            <Modal
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
                hideCloseButton
            >
                <Alert alertColor="danger" maxWidth={600}>
                    <Text>
                        Are you sure you want to delete your profile picture?
                    </Text>

                    <Flexbox gap="xs">
                        <Button
                            color="danger"
                            onClick={() => {
                                setAvatar("")
                                setIsModalOpen(false)
                            }}
                        >
                            Yes, delete picture
                        </Button>

                        <Button
                            variant="transparent"
                            onClick={() => setIsModalOpen(false)}
                        >
                            No, cancel
                        </Button>
                    </Flexbox>
                </Alert>
            </Modal>
        </>
    )
}
