/*=============================================== Avatar component ===============================================*/

import { useState } from "react"
import { getInitials } from "@julseb-lib/react"
import { AvatarContainer, StyledAvatar } from "./styles"
import type { User } from "types"

export const Avatar: FC<IAvatar> = ({ user }) => {
    const [hasError, setHasError] = useState(false)

    if (!user.avatar || user.avatar === "" || hasError)
        return <AvatarContainer>{getInitials(user.fullName)}</AvatarContainer>

    return (
        <AvatarContainer>
            <StyledAvatar
                src={user.avatar}
                alt={`Avatar ${user.fullName}`}
                onError={() => setHasError(true)}
            />
        </AvatarContainer>
    )
}

interface IAvatar {
    user: User
}
