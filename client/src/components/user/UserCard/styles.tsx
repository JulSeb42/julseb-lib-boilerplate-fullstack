import styled from "styled-components"
import { TRANSITIONS, Card } from "@julseb-lib/react"

export const StyledUserCard = styled(Card)`
	transition: ${TRANSITIONS.SHORT};

	&:hover {
		transform: scale(1.02);
	}

	& > * {
		justify-self: top;
	}
`
