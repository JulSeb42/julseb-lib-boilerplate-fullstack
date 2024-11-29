/*=============================================== Nav ===============================================*/

import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import {
    uuid,
    Skeleton,
    ButtonIcon,
    useLibTheme
} from "@julseb-lib/react"
import { useAuthContext } from "context"
import { navLinks } from "data"
import type { INavLink } from "types"

export const Nav = () => {
    const { isLoggedIn, logoutUser, isLoading, user } = useAuthContext()
    const [allLinks, setAllLinks] = useState<Array<INavLink>>(undefined as any)

    const { toggleTheme, selectedTheme } = useLibTheme()

    useEffect(() => {
        if (isLoggedIn) {
            setAllLinks([
                ...navLinks.filter(link => {
                    if (user?.role === "admin")
                        return (
                            link.type === "protected" ||
                            link.type === "none" ||
                            link.role === "admin"
                        )
                    return (
                        (link.type === "protected" || link.type === "none") &&
                        link.role !== "admin"
                    )
                }),
                {
                    text: "Logout",
                    onClick: logoutUser,
                    // @ts-ignore
                    type: "protected",
                    role: "user",
                },
            ])
        } else {
            setAllLinks(
                navLinks.filter(
                    link => link.type === "anon" || link.type === "none"
                )
            )
        }
    }, [isLoggedIn])

    const skeletonProps = {
        width: 48,
        height: 24,
        backgroundColor: "transparent" as any,
        animation: "shine" as any,
    }

    if (isLoading)
        return (
            <>
                <Skeleton {...skeletonProps} />
                <Skeleton {...skeletonProps} />
                <Skeleton {...skeletonProps} />
            </>
        )

    return (
        <>
            {allLinks?.map(({ text, to, onClick, end }) =>
                to ? (
                    <NavLink to={to} end={end} key={uuid()}>
                        {text}
                    </NavLink>
                ) : (
                    <button onClick={onClick} key={uuid()}>
                        {text}
                    </button>
                )
            )}

            <ButtonIcon
                icon={selectedTheme === "dark" ? "sun" : "moon"}
                size={24}
                variant="transparent"
                color="background"
                onClick={toggleTheme}
                aria-label="Toggle theme"
            />
        </>
    )
}
