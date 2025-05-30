import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {
	Form,
	Input,
	passwordRegex,
	Text,
	Skeleton,
	Flexbox,
} from "@julseb-lib/react"
import { authService, userService } from "api"
import { ErrorMessage } from "components"
import { COMMON_TEXTS } from "data"
import { PATHS } from "routes"
import type { LibValidationStatus } from "@julseb-lib/react/types"
import type { User } from "types"

export const ResetPasswordForm = () => {
	const navigate = useNavigate()
	const { token, id } = useParams<{ token: string; id: string }>()

	const [foundUser, setFoundUser] = useState<null | undefined | User>(
		undefined,
	)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const findUser = () =>
			userService.allUsers().then(res => {
				const users: Array<User> = res.data
				const getUser: User = users?.filter(user => user?._id === id)[0]

				if (getUser) setFoundUser(getUser)
				else setFoundUser(null)
			})

		setTimeout(() => {
			findUser()
			setIsLoading(false)
		}, 1000)
	}, [id])

	const [password, setPassword] = useState("")
	const [validation, setValidation] = useState<LibValidationStatus>(undefined)
	const [errorMessage, setErrorMessage] = useState(undefined)

	const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value

		setPassword(value)

		if (value.length > 0) {
			if (passwordRegex.test(value)) {
				setValidation(true)
			} else {
				setValidation(false)
			}
		} else {
			setValidation(undefined)
		}
	}

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()

		authService
			.resetPassword({
				password,
				resetToken: token,
				_id: id!,
			})
			.then(() => navigate(PATHS.LOGIN))
			.catch(err => setErrorMessage(err))
	}

	if (isLoading)
		return (
			<Flexbox gap="xxs" flexDirection="column">
				<Text color="primary">New password</Text>
				<Skeleton height={32} borderRadius="s" animation="shine" />
			</Flexbox>
		)

	if (!foundUser) return <Text>No user has been found with this ID!</Text>

	return (
		<>
			<Form onSubmit={handleSubmit} buttonPrimary={{ text: "Send" }}>
				<Input
					id="password"
					type="password"
					label="New password"
					value={password}
					onChange={handlePassword}
					validation={{
						status: validation,
						message: COMMON_TEXTS.ERRORS.PASSWORD_NOT_VALID,
					}}
				/>
			</Form>

			<ErrorMessage error={errorMessage} />
		</>
	)
}
