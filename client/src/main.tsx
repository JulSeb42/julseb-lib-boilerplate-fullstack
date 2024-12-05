/*=============================================== Main ===============================================*/

import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { App } from "App"
import {
    AuthProviderWrapper,
    /* Prepend import - DO NOT REMOVE */
} from "context"

import "@julseb-lib/react/index.css"
import "styles/index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <AuthProviderWrapper>
            {/* Prepend context open - DO NOT REMOVE */}
            <App />
            {/* Prepend context close - DO NOT REMOVE */}
        </AuthProviderWrapper>
    </BrowserRouter>
)
