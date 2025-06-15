import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { uuid, Skeleton } from "@julseb-lib/react"
import { useAuthContext } from "context"
import { navLinks } from "data"
import type { INavLinkExtended } from "types"

export const Nav = () => {
	const { isLoggedIn, logoutUser, isLoading, user } = useAuthContext()
	const [allLinks, setAllLinks] = useState<Array<INavLinkExtended>>(
		undefined as any,
	)

	useEffect(() => {
		if (isLoggedIn) {
			setAllLinks([
				...navLinks.filter(link =>
					user?.role === "admin"
						? link.role === "admin" || link.type === "none"
						: (link.role === "user" || link.type === "protected") &&
							link.type !== "anon" &&
							link.role !== "admin",
				),
				{
					text: "Logout",
					onClick: logoutUser,
					type: "protected",
					role: "user",
				},
			])
		} else {
			setAllLinks(
				navLinks.filter(
					link => link.type === "none" || link.type === "anon",
				),
			)
		}
		// if (isLoggedIn) {
		// 	setAllLinks([
		// 		...navLinks.filter(link => {
		// 			if (user?.role === "admin")
		// 				return (
		// 					link.type === "protected" ||
		// 					link.type === "none" ||
		// 					link.role === "admin"
		// 				)
		// 			return (
		// 				(link.type === "protected" || link.type === "none") &&
		// 				link.role !== "admin"
		// 			)
		// 		}),
		// {
		// 	text: "Logout",
		// 	onClick: logoutUser,
		// 	// @ts-ignore
		// 	type: "protected",
		// 	role: "user",
		// },
		// 	])
		// } else {
		// 	setAllLinks(
		// 		navLinks.filter(
		// 			link => link.type === "anon" || link.type === "none",
		// 		),
		// 	)
		// }
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
				),
			)}
		</>
	)
}
