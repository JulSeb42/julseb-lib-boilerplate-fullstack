/*=============================================== Main ===============================================*/

import ReactDOM from "react-dom/client"
import { ThemeProviderWrapper } from "@julseb-lib/react"
import { App } from "App"
import { AuthProviderWrapper } from "context"

import "@julseb-lib/react/index.css"
import "styles/index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <AuthProviderWrapper>
        <ThemeProviderWrapper stylesheetManager>
            <App />
        </ThemeProviderWrapper>
    </AuthProviderWrapper>
)
