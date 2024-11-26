/*=============================================== AdminUserCard component ===============================================*/

import { useState } from "react"
import { ButtonIcon } from "@julseb-lib/react"
import { PATHS } from "routes"
import { useAuthContext } from "context"
import { Avatar } from "./Avatar"
import { UserModalReset } from "./UserModalReset"
import { UserModalDelete } from "./UserModalDelete"
import {
    StyledAdminUserCard,
    Content,
    UserName,
    StyledDropdownContainer,
    StyledDropdown,
    StyledDropdownItem,
} from "./styles"
import type { IAdminUserCard } from "./types"

export const AdminUserCard: FC<IAdminUserCard> = ({ user, handleDelete }) => {
    const { user: loggedInUser } = useAuthContext()

    const [isOpen, setIsOpen] = useState(false)
    const [isModalResetOpen, setIsModalResetOpen] = useState(false)
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false)

    return (
        <>
            <StyledAdminUserCard>
                <Avatar user={user} />

                <Content>
                    <UserName>{user?.fullName}</UserName>

                    {user?.role === "admin" && (
                        <UserName className="Admin">Admin</UserName>
                    )}

                    <StyledDropdownContainer
                        isOpen={isOpen}
                        justifyContent="flex-end"
                    >
                        <ButtonIcon
                            icon="dots"
                            size={24}
                            variant="plain"
                            color="white"
                            onClick={() => setIsOpen(!isOpen)}
                        />

                        <StyledDropdown isOpen={isOpen} setIsOpen={setIsOpen}>
                            <StyledDropdownItem to={PATHS.USER(user._id)} blank>
                                Visit profile
                            </StyledDropdownItem>

                            <StyledDropdownItem
                                onClick={() => {
                                    setIsModalResetOpen(true)
                                    setIsOpen(false)
                                }}
                                disabled={user._id === loggedInUser?._id}
                            >
                                Reset password
                            </StyledDropdownItem>

                            <StyledDropdownItem
                                onClick={() => {
                                    setIsModalDeleteOpen(true)
                                    setIsOpen(false)
                                }}
                                disabled={user._id === loggedInUser?._id}
                            >
                                Remove user
                            </StyledDropdownItem>
                        </StyledDropdown>
                    </StyledDropdownContainer>
                </Content>
            </StyledAdminUserCard>

            <UserModalReset
                user={user}
                isOpen={isModalResetOpen}
                setIsOpen={setIsModalResetOpen}
            />

            <UserModalDelete
                user={user}
                isOpen={isModalDeleteOpen}
                setIsOpen={setIsModalDeleteOpen}
                handleDelete={handleDelete}
            />
        </>
    )
}
