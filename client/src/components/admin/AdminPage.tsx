import { Meta } from "@julseb-lib/react"
import { SITE_DATA } from "data"
import { AdminNav } from "./AdminNav"
import { AdminMain } from "./AdminMain"

export const AdminPage: FC<IAdminPage> = ({ title, children }) => {
	return (
		<>
			<Meta
				title={`${title} | ${SITE_DATA.NAME}`}
				siteName={SITE_DATA.NAME}
				favicon={SITE_DATA.FAVICON}
				author={SITE_DATA.AUTHOR}
				type={SITE_DATA.TYPE}
				language={SITE_DATA.LANGUAGE}
			/>

			<AdminNav />
			<AdminMain>{children}</AdminMain>
		</>
	)
}

interface IAdminPage {
	title: string
	children?: Children
}
