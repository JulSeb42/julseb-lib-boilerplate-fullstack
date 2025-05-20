import { Header as Container } from "@julseb-lib/react"
import { SITE_DATA } from "data"
import { Nav } from "./Nav"

export const Header = () => {
	return (
		<Container logo={SITE_DATA.NAME} linkColor="background">
			<Nav />
		</Container>
	)
}
