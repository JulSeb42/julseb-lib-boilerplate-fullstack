/*=============================================== AdminMain styles ===============================================*/

import styled from "styled-components"
import { SPACERS, Mixins } from "@julseb-lib/react"
import { ADMIN_NAV_WIDTH } from "../AdminNav/styles"

export const StyledAdminMain = styled.main`
    width: calc(100% - ${ADMIN_NAV_WIDTH}px);
    padding: ${SPACERS.XXL} ${SPACERS.L};
    position: relative;
    left: ${ADMIN_NAV_WIDTH}px;
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $alignItems: "stretch",
        $gap: "l",
    })}
`
