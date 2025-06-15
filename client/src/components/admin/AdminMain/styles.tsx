import styled from "styled-components"
import { SPACERS, Mixins, LAYOUTS } from "@julseb-lib/react"
import { ADMIN_NAV_WIDTH } from "../AdminNav/styles"
import type { AdminMainSize } from "./types"

export const StyledAdminMain = styled.main<{ $size?: AdminMainSize }>`
	width: ${({ $size }) =>
		$size === "form"
			? LAYOUTS.MAIN_FORM
			: `calc(100% - ${ADMIN_NAV_WIDTH}px)`};
	padding: ${SPACERS.XXL} ${SPACERS.L};
	position: relative;
	left: ${ADMIN_NAV_WIDTH}px;
	${Mixins.Flexbox({
		$flexDirection: "column",
		$alignItems: "stretch",
		$gap: "l",
	})}
`
