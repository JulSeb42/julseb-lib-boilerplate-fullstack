import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Input } from "@julseb-lib/react"
import { useAuthContext } from "context"
import { ErrorMessage, ImageUploader } from "components"
import { userService } from "api"
import { defaultUwConfig } from "data"
import { PATHS } from "routes"
import type { IErrorMessage, PictureData } from "types"

export const EditAccountForm = () => {
	const { user, setUser, setToken } = useAuthContext()
	const navigate = useNavigate()

	const [inputs, setInputs] = useState({
		fullName: user?.fullName ?? "",
	})
	const [isLoading, setIsLoading] = useState(false)
	const [errorMessage, setErrorMessage] = useState<IErrorMessage>(undefined)

	const [pictureData, setPictureData] = useState<PictureData>(
		user?.avatar
			? { ...defaultUwConfig, url: user.avatar }
			: (undefined as any),
	)

	const handleInputs = (e: ChangeEvent<HTMLInputElement>) =>
		setInputs({ ...inputs, [e.target.id]: e.target.value })

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()

		setIsLoading(true)

		userService
			.editAccount(user?._id!, {
				...inputs,
				avatar: pictureData ? pictureData.url : "",
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
		</>
	)
}
