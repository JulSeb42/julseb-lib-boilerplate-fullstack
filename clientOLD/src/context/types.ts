/*=============================================== Context types ===============================================*/

import type { User } from "types"

export type IAuthContext = {
    isLoggedIn: boolean | null
    isLoading: boolean
    user: User | null
    setUser: DispatchState<User | null>
    loginUser: (token: string) => void
    logoutUser: () => void
    setToken: (token: string) => void
}
