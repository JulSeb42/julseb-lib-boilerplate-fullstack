import { StyledAdminMain } from "./styles"
import type { IAdminMain } from "./types"

export const AdminMain: FC<IAdminMain> = ({ children, mainSize = "full" }) => {
	return <StyledAdminMain $size={mainSize}>{children}</StyledAdminMain>
}
