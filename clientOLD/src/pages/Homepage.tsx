/*=============================================== Homepage ===============================================*/

import { Text } from "@julseb-lib/react"
import { useAuthContext } from "context"
import { Page } from "components"

export const Homepage = () => {
    const { isLoggedIn, user } = useAuthContext()

    const packages = [
        "@eslint/compat: ^1.2.0",
        "@types/jest: ^29.5.13",
        "@types/mocha: ^10.0.8",
        "@types/react: ^18.3.11",
        "@types/react-dom: ^18.3.0",
        "@types/react-router-dom: ^5.3.3",
        "@types/styled-components: ^5.1.34",
        "@typescript-eslint/eslint-plugin: ^8.8.0",
        "@typescript-eslint/parser: ^8.8.0",
        "@vitejs/plugin-react: ^4.3.2",
        "eslint: ^9.12.0",
        "eslint-plugin-import: ^2.31.0",
        "eslint-plugin-react: ^7.37.1",
        "eslint-plugin-react-hooks: ^4.6.2",
        "eslint-plugin-react-refresh: ^0.4.12",
        "typescript: ^5.6.2",
        "typescript-eslint: ^8.8.0",
        "vite: ^5.4.8",
        "vite-plugin-eslint: ^1.8.1",
        "vite-tsconfig-paths: ^5.0.1",
    ]

    return (
        <Page title="Home">
            <Text tag="h1">Hello World!</Text>

            <p>{packages.map(p => `${p.split(":")[0]} `)}</p>

            {isLoggedIn && (
                <Text>Hello {user?.fullName}, you are logged in!</Text>
            )}
        </Page>
    )
}
