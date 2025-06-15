import { Avatar, getInitials, Skeleton } from "@julseb-lib/react"
import type { User } from "types"

export const UserAvatar: FC<IAvatar> = ({ size, user, isLoading }) => {
	if (isLoading || !user)
		return <Skeleton width={size} height={size} animation="shine" />

	if (!user.avatar || user.avatar === "")
		return <Avatar letter={getInitials(user.fullName || "")} />

	return (
		<Avatar
			img={{
				src: user.avatar,
				alt: `Avatar ${user.fullName}`,
				fallback: getInitials(user.fullName),
				fallbackBackgroundColor: "primary",
			}}
			// backgroundColor="primary"
		/>
	)
}

type IAvatar = {
	user: User
	isLoading?: boolean
	size?: number
}
