import styled from "styled-components"
import {
	useFetch,
	Text,
	Grid,
	generateNumbers,
	Pagination,
	usePaginatedData,
	SPACERS,
} from "@julseb-lib/react"
import { userService } from "api"
import { UserCard, UserCardSkeleton } from "components"
import type { AxiosResponse } from "axios"
import type { User } from "types"

export const UsersList = () => {
	const { response, error, loading } = useFetch<AxiosResponse>(
		userService.allUsers(),
	)
	const users: Array<User> | null = response?.data

	const { paginatedData, totalPages } = usePaginatedData<User>(
		users ?? [],
		15,
	)

	if (loading || (!response && !error)) return <UsersListSkeleton />

	if (error) return <Text>Error while fetching users: {error.message}</Text>

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

const UsersListSkeleton = () => {
	return (
		<Grid col={3} gap="s">
			{generateNumbers(0, 4).map(n => (
				<UserCardSkeleton key={n} />
			))}
		</Grid>
	)
}

const StyledGrid = styled(Grid)`
	min-height: calc(82px * 3 + ${SPACERS.S} * 3);
`
