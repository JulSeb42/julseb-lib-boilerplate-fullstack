/*=============================================== UsersList ===============================================*/

import { useState, useEffect } from "react"
import {
    useFetch,
    usePaginatedData,
    Text,
    Grid,
    Paginator,
} from "@julseb-lib/react"
import { AdminUserCard } from "components"
import { userService } from "api"
import type { AxiosResponse } from "axios"
import type { User } from "types"

export const AdminUsersList = () => {
    const { response, error, loading } = useFetch<AxiosResponse>(
        userService.allUsers()
    )
    const users = response?.data ?? []

    const [allUsers, setAllUsers] = useState<Array<User>>(users)

    useEffect(() => {
        if (users) setAllUsers(users)
    }, [users])

    const { paginatedData, totalPages } = usePaginatedData<User>(
        allUsers ?? [],
        18
    )

    const handleDeleteUser = (id: string) => {
        setAllUsers(allUsers.filter(user => user._id !== id))
    }

    if (loading || (!response && !error)) return null // TODO: add skeleton

    if (error) return <Text>Error while fetching users: {error.message}</Text>

    return (
        <>
            <Grid col={6} columnGap="s" rowGap="xs">
                {paginatedData.map(user => (
                    <AdminUserCard
                        user={user}
                        key={user._id}
                        handleDelete={handleDeleteUser}
                    />
                ))}
            </Grid>

            <Paginator totalPages={totalPages} />
        </>
    )
}
