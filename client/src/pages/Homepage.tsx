/*=============================================== Homepage ===============================================*/

import { Text } from "@julseb-lib/react"
import { useAuthContext } from "context"
import { Page } from "components"

export const Homepage = () => {
    const { isLoggedIn, user } = useAuthContext()

    return (
        <Page title="Home">
            <Text tag="h1">Hello World!</Text>

            {isLoggedIn && (
                <Text>Hello {user?.fullName}, you are logged in!</Text>
            )}
        </Page>
    )
}
