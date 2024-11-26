/*=============================================== Main ===============================================*/

import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { ThemeProviderWrapper } from "@julseb-lib/react"
import { App } from "App"
import { AuthProviderWrapper } from "context"

import "@julseb-lib/react/index.css"
import "styles/index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <ThemeProviderWrapper>
            <AuthProviderWrapper>
                <App />
            </AuthProviderWrapper>
        </ThemeProviderWrapper>
    </BrowserRouter>
)
