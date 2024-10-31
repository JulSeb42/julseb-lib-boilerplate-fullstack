/*=============================================== UserHeader types ===============================================*/

import type { AxiosError } from "axios"
import type { User } from "types"

export interface IUserHeader {
    user: User
    isLoading?: boolean
    error?: AxiosError
    isAccount?: boolean
}
