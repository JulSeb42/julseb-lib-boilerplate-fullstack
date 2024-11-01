/*=============================================== UserCard component ===============================================*/

import { Text } from "@julseb-lib/react"
import { UserAvatar } from "components"
import { PATHS } from "routes"
import { StyledUserCard } from "components/user/UserCard/styles"
import type { IUserCard } from "components/user/UserCard/types"

export const UserCard: FC<IUserCard> = ({ user }) => {
    return (
        <StyledUserCard
            to={PATHS.USER(user?._id)}
            border={{ width: 1 }}
            gap="xs"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            padding="xs"
            borderRadius="m"
        >
            <UserAvatar user={user} size={48} />
            <Text tag="strong">{user?.fullName}</Text>
        </StyledUserCard>
    )
}
