/*=============================================== UsersSearch ===============================================*/

import { useState } from "react"
import { Grid, Input, useMaxWidth } from "@julseb-lib/react"
import type { User, UserRole } from "types"

interface IUsersSearch {
    users: Array<User>
    setUsers: DispatchState<Array<User>>
    search: string
    setSearch: DispatchState<string>
    setFilteredUsers: DispatchState<Array<User>>
}

export const AdminUsersSearch: FC<IUsersSearch> = ({
    users,
    search,
    setSearch,
    setFilteredUsers,
}) => {
    const mobileWidth = useMaxWidth(600)
    const tabletWidth = useMaxWidth(1024)

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        setFilteredUsers(
            users.filter(user =>
                user.fullName
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase()),
            ),
        )
    }

    const handleClear = () => {
        setSearch("")
        setFilteredUsers(users)
    }

    const [role, setRole] = useState<"none" | UserRole>()

    const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setRole(e.target.value as UserRole)

        setFilteredUsers(
            e.target.value === "none"
                ? users
                : users.filter(
                      user =>
                          user.role.toLowerCase() ===
                          e.target.value.toLowerCase(),
                  ),
        )
    }

    return (
        <Grid col={mobileWidth ? 1 : tabletWidth ? 2 : 3} gap="s">
            <Input
                type="search"
                label="Search user by name"
                value={search}
                onChange={handleSearch}
                clearSearch={handleClear}
            />

            <Input
                type="select"
                label="Filter by role"
                value={role}
                onChange={handleSelect}
            >
                <option value="none">None</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
            </Input>
        </Grid>
    )
}
