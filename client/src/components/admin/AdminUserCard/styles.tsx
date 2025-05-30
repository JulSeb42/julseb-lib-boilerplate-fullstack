import styled from "styled-components"
import {
	COLORS_LIGHT,
	FONT_SIZES,
	FONT_WEIGHTS,
	Image,
	Mixins,
	OVERLAYS,
	RADIUSES,
	SPACERS,
	Text,
	TRANSITIONS,
	DropdownContainer,
	Dropdown,
	DropdownItem,
} from "@julseb-lib/react"

export const StyledAvatar = styled(Image).attrs({ aspectRatio: "1" })`
	width: 100%;
	transition: ${TRANSITIONS.SHORT};
`
export const AvatarContainer = styled.div`
	width: 100%;
	height: 100%;
	background-color: ${COLORS_LIGHT.SECONDARY_500};
	color: ${COLORS_LIGHT.BACKGROUND};
	font-size: ${FONT_SIZES.H2};
	font-weight: ${FONT_WEIGHTS.BLACK};
	transition: ${TRANSITIONS.SHORT};
	${Mixins.Flexbox({
		$alignItems: "center",
		$justifyContent: "center",
	})}
`

export const StyledAdminUserCard = styled.div`
	width: 100%;
	aspect-ratio: 1;
	border-radius: ${RADIUSES.M};
	overflow: hidden;
	position: relative;
`

export const UserName = styled(Text)`
	position: relative;
	z-index: 1;
	color: ${COLORS_LIGHT.WHITE};
	font-weight: ${FONT_WEIGHTS.BLACK};
	font-size: ${FONT_SIZES.H5};

	&.Admin {
		font-size: ${FONT_SIZES.SMALL};
		color: ${COLORS_LIGHT.GRAY_200};
	}
`

const PADDING = SPACERS.M

export const Content = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	font-size: ${FONT_SIZES.H2};
	padding: ${PADDING};
	${Mixins.Flexbox({
		$flexDirection: "column",
		$justifyContent: "flex-end",
	})}

	&:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: ${OVERLAYS.GRADIENT_BLACK};
		z-index: 0;
	}
`

export const StyledDropdownContainer = styled(DropdownContainer)`
	position: absolute;
	top: ${PADDING};
	right: ${PADDING};
`

export const StyledDropdown = styled(Dropdown)`
	min-width: 150px;
`

export const StyledDropdownItem = styled(DropdownItem)`
	font-size: ${FONT_SIZES.SMALL};
`
