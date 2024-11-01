/*=============================================== AdminUserCard types ===============================================*/

import type { User } from "types"

export interface IAdminUserCard {
    user: User
    handleDelete: (id: string) => void
}
