/*=============================================== NavLinks ===============================================*/

import { PATHS } from "routes"
import type { INavLinkExtended, INavLinkAdmin } from "types"

export const navLinks: Array<INavLinkExtended> = [
    { text: "Homepage", to: PATHS.ROOT, type: "none", role: "user", end: true },
    { text: "All users", to: PATHS.USERS, type: "none", role: "user" },

    { text: "Log in", to: PATHS.LOGIN, type: "anon", role: "user" },
    { text: "Sign up", to: PATHS.SIGNUP, type: "anon", role: "user" },

    {
        text: "My account",
        to: PATHS.MY_ACCOUNT,
        type: "protected",
        role: "user",
    },
    { text: "Admin", to: PATHS.ADMIN_HOME, type: "protected", role: "admin" },
]

export const adminNavLinks: Array<INavLinkAdmin> = [
    { text: "Home", to: PATHS.ADMIN_HOME, icon: "home", end: true },
    { text: "Users", to: PATHS.ADMIN_USERS, icon: "user" },
]

export const adminBottomLinks: Array<INavLinkAdmin> = [
    { text: "Back to app", to: PATHS.ROOT, icon: "link-external", blank: true },
]
