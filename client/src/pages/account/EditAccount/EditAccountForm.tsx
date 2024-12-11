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
import { defaultUwConfig } from "data"
import { PATHS } from "routes"
import type { IErrorMessage, PictureData } from "types"

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

    const [pictureData, setPictureData] = useState<PictureData>(
        user?.avatar ? { ...defaultUwConfig, url: avatar } : (undefined as any),
    )

    const handleInputs = (e: ChangeEvent<HTMLInputElement>) =>
        setInputs({ ...inputs, [e.target.id]: e.target.value })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        setIsLoading(true)

        userService
            .editAccount(user?._id!, {
                ...inputs,
                avatar: pictureData ? pictureData.url : (undefined as any),
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
                    label="Avatar"
                    pictureData={pictureData}
                    setPictureData={setPictureData}
                    uwConfig={defaultUwConfig}
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
