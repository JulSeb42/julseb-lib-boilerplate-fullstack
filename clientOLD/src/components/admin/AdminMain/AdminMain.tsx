/*=============================================== AdminMain component ===============================================*/

import { StyledAdminMain } from "./styles"
import type { IAdminMain } from "./types"

export const AdminMain: FC<IAdminMain> = ({ children }) => {
    return <StyledAdminMain>{children}</StyledAdminMain>
}
