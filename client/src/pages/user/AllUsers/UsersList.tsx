import { use } from "react"
import styled from "styled-components"
import {
	Text,
	Grid,
	Pagination,
	usePaginatedData,
	SPACERS,
} from "@julseb-lib/react"
import { userService } from "api"
import { UserCard } from "components"
import type { User } from "types"

const res = userService.allUsers()

export const UsersList = () => {
	const response = use(res)

	const users: Array<User> | null = response?.data

	const { paginatedData, totalPages } = usePaginatedData<User>(
		users ?? [],
		15,
	)

	if (!users?.length) return <Text>No user yet.</Text>

	return (
		<>
			<StyledGrid col={3} gap="s" alignContent="start">
				{paginatedData.map(user => (
					<UserCard user={user} key={user._id} />
				))}
			</StyledGrid>

			<Pagination totalPages={totalPages} />
		</>
	)
}

const StyledGrid = styled(Grid)`
	min-height: calc(82px * 3 + ${SPACERS.S} * 3);
`
