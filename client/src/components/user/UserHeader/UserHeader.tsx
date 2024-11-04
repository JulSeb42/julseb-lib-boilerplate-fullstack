/*=============================================== UserHeader component ===============================================*/

import {
    Flexbox,
    Text,
    SkeletonCard,
    Skeleton,
    SkeletonShine,
    getFirstName,
} from "@julseb-lib/react"
import { UserAvatar } from "components"
import type { IUserHeader } from "./types"

export const UserHeader: FC<IUserHeader> = ({
    user,
    isLoading,
    error,
    isAccount,
}) => {
    if (isLoading && !user) return <UserHeaderSkeleton />

    if (error?.response?.status === 400)
        return <Text>Error while fetching user's header: {error?.message}</Text>

    const title = isAccount
        ? `Hello ${getFirstName(user?.fullName)}`
        : user?.fullName

    if (user)
        return (
            <Flexbox alignItems="center" gap="xs">
                <UserAvatar user={user} isLoading={isLoading} />
                <Text tag="h1">{title}</Text>
            </Flexbox>
        )

    return null
}

const UserHeaderSkeleton = () => {
    return (
        <SkeletonCard flexDirection="row" gap="xs" alignItems="center">
            <Skeleton width={48} height={48} borderRadius="circle" />
            <Skeleton width="40%" height={60} borderRadius="s" />
            <SkeletonShine />
        </SkeletonCard>
    )
}
