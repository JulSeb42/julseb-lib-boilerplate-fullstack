import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { AuthProviderWrapper } from "context"
import { App } from "App"
import "@julseb-lib/react/index.css"
import "styles/index.css"

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<AuthProviderWrapper>
			<App />
		</AuthProviderWrapper>
	</BrowserRouter>,
)
