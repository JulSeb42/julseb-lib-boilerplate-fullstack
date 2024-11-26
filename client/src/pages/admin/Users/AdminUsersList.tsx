/*=============================================== UsersList ===============================================*/

import {
    Text,
    Grid,
    Paginator,
    useMaxWidth,
    usePaginatedData,
} from "@julseb-lib/react"
import { AdminUserCard } from "components"
import type { AxiosResponse } from "axios"
import type { User, IErrorMessage } from "types"

interface IAdminUsersList {
    users: Array<User>
    filteredUsers: Array<User>
    loading: boolean
    handleDeleteUser: (id: string) => void
    response: AxiosResponse
    error: IErrorMessage
}

export const AdminUsersList: FC<IAdminUsersList> = ({
    loading,
    handleDeleteUser,
    response,
    error,
    filteredUsers,
}) => {
    const mobileWidth = useMaxWidth(600)
    const tabletWidth = useMaxWidth(1024)

    const { paginatedData, totalPages } = usePaginatedData<User>(
        filteredUsers ?? [],
        18
    )

    if (loading || (!response && !error)) return null // TODO: add skeleton

    if (error)
        return <Text>Error while fetching users: {error?.toString()}</Text>

    if (!filteredUsers.length)
        return <Text>Your search did not return any result.</Text>

    return (
        <>
            <Grid
                col={mobileWidth ? 2 : tabletWidth ? 3 : 6}
                columnGap="s"
                rowGap="xs"
            >
                {paginatedData.map(user => (
                    <AdminUserCard
                        key={user._id}
                        user={user}
                        handleDelete={handleDeleteUser}
                    />
                ))}
            </Grid>

            <Paginator totalPages={totalPages} />
        </>
    )
}
