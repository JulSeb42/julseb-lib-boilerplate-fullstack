/*=============================================== AdminNav component ===============================================*/

import { useEffect, useState } from "react"
import { Icon, Link, useLibTheme } from "@julseb-lib/react"
import { useAuthContext } from "context"
import { adminNavLinks, adminBottomLinks } from "data"
import { StyledAdminNav, LinkList, ListFooter, IconContainer } from "./styles"

export const AdminNav = () => {
    const [footerLinks, setFooterLinks] = useState(adminBottomLinks)

    const { logoutUser } = useAuthContext()
    const { selectedTheme, toggleTheme } = useLibTheme()

    useEffect(() => {
        setFooterLinks([
            {
                text: `Switch to ${
                    selectedTheme === "dark" ? "light" : "dark"
                } theme`,
                onClick: toggleTheme,
                icon: selectedTheme === "light" ? "moon" : "sun",
            },
            ...adminBottomLinks,
            {
                text: "Log out",
                onClick: logoutUser,
                icon: "logout",
            },
        ])
    }, [selectedTheme])

    return (
        <StyledAdminNav>
            <LinkList>
                {adminNavLinks.map(link => (
                    <Link key={link.text} to={link.to} end={link.end} isNavLink>
                        <NavIcon icon={link.icon} />
                        {link.text}
                    </Link>
                ))}
            </LinkList>

            <ListFooter>
                {footerLinks.map(link => (
                    // @ts-ignore
                    <Link
                        key={link.text}
                        to={link.to ? link.to : undefined}
                        onClick={link.onClick ? link.onClick : undefined}
                        blank={link.blank}
                    >
                        <NavIcon icon={link.icon} />
                        {link.text}
                    </Link>
                ))}
            </ListFooter>
        </StyledAdminNav>
    )
}

const NavIcon: FC<{ icon: string }> = ({ icon }) => {
    return (
        <IconContainer>
            <Icon src={icon} size={16} />
        </IconContainer>
    )
}
