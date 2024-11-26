/*=============================================== App ===============================================*/

import { Routes, Route } from "react-router-dom"
import {
    ToasterProviderWrapper,
    uuid,
    ThemeProvider,
    useLibTheme,
} from "@julseb-lib/react"
import { routes } from "routes"

export const App = () => {
    const { theme } = useLibTheme()

    return (
        <ThemeProvider theme={theme}>
            <ToasterProviderWrapper>
                <Routes>
                    {routes.map(route => {
                        return (
                            <Route
                                path={route.path}
                                element={route.element}
                                key={uuid()}
                            />
                        )
                    })}
                </Routes>
            </ToasterProviderWrapper>
        </ThemeProvider>
    )
}
