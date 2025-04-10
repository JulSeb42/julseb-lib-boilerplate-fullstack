import styled, { css } from "styled-components"
import {
	Mixins,
	SPACERS,
	SHADOWS,
	FONT_WEIGHTS,
	TRANSITIONS,
	MEDIA,
	COLORS_LIGHT,
} from "@julseb-lib/react"

export const ADMIN_NAV_WIDTH = 200

export const StyledAdminNav = styled.nav`
	width: ${ADMIN_NAV_WIDTH}px;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background-color: ${COLORS_LIGHT.GRAY_50};
	padding: ${SPACERS.XXL} 0;
	box-shadow: ${SHADOWS.S};
	${Mixins.Flexbox({
		$flexDirection: "column",
		$gap: "xs",
	})}
`

export const IconContainer = styled.span`
	height: 24px;

	${Mixins.Flexbox({
		$alignItems: "center",
	})}
`

const ListCommon = css`
	${Mixins.Flexbox({
		$flexDirection: "column",
	})}

	a, button {
		color: ${Mixins.ColorsHoverDefault("primary", null, "light")};
		transition: ${TRANSITIONS.SHORT};
		text-decoration: none;
		font-weight: ${FONT_WEIGHTS.BLACK};
		transition: ${TRANSITIONS.SHORT};
		padding: ${SPACERS.XXS} ${SPACERS.S};
		border: none;
		background-color: transparent;
		${Mixins.Flexbox({
			$alignItems: "center",
			$gap: "xxs",
		})}

		@media ${MEDIA.HOVER} {
			&:hover {
				color: ${Mixins.ColorsHoverHover("primary", null, "light")};
			}

			&:active {
				color: ${Mixins.ColorsHoverActive("primary", null, "light")};
			}
		}

		&.active {
			background-color: ${COLORS_LIGHT.GRAY_100};
		}
	}
`

export const ListFooter = styled.div`
	${ListCommon};
	justify-self: flex-end;
`

export const LinkList = styled.div`
	${ListCommon};
	height: 100%;
`
