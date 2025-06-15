import { Suspense } from "react"
import { generateNumbers, Grid, Text } from "@julseb-lib/react"
import { Page, UserCardSkeleton } from "components"
import { UsersList } from "./UsersList"

export const AllUsers = () => {
	return (
		<Page title="All Users">
			<Text tag="h1">All users</Text>
			<Suspense fallback={<UsersListSkeleton />}>
				<UsersList />
			</Suspense>
		</Page>
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
