/*=============================================== Nav link types ===============================================*/

import type { LibButtonLinkBlankRequired } from "@julseb-lib/react/types"
import type { UserRole } from "types"

export type INavLink = LibButtonLinkBlankRequired & {
    text: string
    end?: boolean
}

export type INavLinkExtended = INavLink & {
    type: "none" | "protected" | "anon"
    role: UserRole
}

export type INavLinkAdmin = INavLink & {
    icon: string
}
