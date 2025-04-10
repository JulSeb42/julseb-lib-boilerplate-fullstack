import { useEffect } from "react"
import { Text } from "@julseb-lib/react"
import { useAuthContext } from "context"
import { Page } from "components"
import { userService } from "api"

export const Homepage = () => {
	const { isLoggedIn, user } = useAuthContext()

	console.log({ isLoggedIn, user })

	useEffect(() => {
		userService.allUsers().then(res => console.log({ res }))
	}, [])

	return (
		<Page title="Home">
			<Text tag="h1">Hello World!</Text>

			{isLoggedIn && (
				<Text>Hello {user?.fullName}, you are logged in!</Text>
			)}
		</Page>
	)
}
