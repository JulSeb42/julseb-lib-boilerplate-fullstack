/*=============================================== Users Admin ===============================================*/

import { useState, useEffect } from "react"
import { Text } from "@julseb-lib/react"
import { AdminPage, ErrorMessage } from "components"
import { userService } from "api"
import { AdminUsersSearch } from "./AdminUsersSearch"
import { AdminUsersList } from "./AdminUsersList"
import type { AxiosResponse } from "axios"
import type { IErrorMessage, User } from "types"

export const Users = () => {
    const [response, setResponse] = useState<AxiosResponse | undefined>(
        undefined,
    )
    const [search, setSearch] = useState("")
    const [users, setUsers] = useState<Array<User>>([])
    const [filteredUsers, setFilteredUsers] = useState<Array<User>>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<IErrorMessage>(undefined)

    const handleDeleteUser = (id: string) => {
        setUsers(users.filter(user => user._id !== id))
        setFilteredUsers(users.filter(user => user._id !== id))
    }

    useEffect(() => {
        userService
            .allUsers()
            .then(res => {
                setResponse(res)
                setUsers(res.data)
                setFilteredUsers(res.data)
                setLoading(false)
            })
            .catch(err => setError(err))
    }, [])

    return (
        <AdminPage title="Users">
            <Text tag="h1">Users</Text>

            <AdminUsersSearch
                users={users}
                setUsers={setUsers}
                search={search}
                setSearch={setSearch}
                setFilteredUsers={setFilteredUsers}
            />

            <AdminUsersList
                users={users}
                filteredUsers={filteredUsers}
                loading={loading}
                handleDeleteUser={handleDeleteUser}
                response={response as any}
                error={error}
            />

            <ErrorMessage error={error} />
        </AdminPage>
    )
}
