/*=============================================== App ===============================================*/

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import {
    PageLoading,
    ThemeProvider,
    useLibTheme,
    ToasterProviderWrapper,
} from "@julseb-lib/react"
import { routes } from "routes"

export const App = () => {
    const { theme } = useLibTheme()

    return (
        <ThemeProvider theme={theme}>
            <ToasterProviderWrapper>
                <RouterProvider
                    router={createBrowserRouter(routes)}
                    fallbackElement={<PageLoading />}
                />
            </ToasterProviderWrapper>
        </ThemeProvider>
    )
}
