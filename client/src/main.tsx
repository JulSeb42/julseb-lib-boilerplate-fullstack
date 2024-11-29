/*=============================================== Main ===============================================*/

import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { App } from "App"
import { AuthProviderWrapper } from "context"

import "@julseb-lib/react/index.css"
import "styles/index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <AuthProviderWrapper>
            <App />
        </AuthProviderWrapper>
    </BrowserRouter>
)
