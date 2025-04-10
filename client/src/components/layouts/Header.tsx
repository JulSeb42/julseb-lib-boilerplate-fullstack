import { Header as Container } from "@julseb-lib/react"
import { SITE_DATA } from "shared"
import { Nav } from "./Nav"

export const Header = () => {
	return (
		<Container logo={SITE_DATA.NAME} linkColor="background">
			<Nav />
		</Container>
	)
}
