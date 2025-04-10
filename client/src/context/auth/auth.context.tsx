import { useState, useEffect, createContext, useContext } from "react"
import { authService } from "api"
import type { User } from "types"
import type { IAuthContext } from "./types"

export const AuthContext = createContext<IAuthContext>(null as any)

export const AuthProviderWrapper: FC<IAuthProviderWrapper> = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [user, setUser] = useState<User | null>(null)

	const loginUser = (token: string) => {
		localStorage.setItem("authToken", token)
		verifyStoredToken()
	}

	const setToken = (token: string) => {
		localStorage.setItem("authToken", token)
		setIsLoggedIn(true)
	}

	const logoutUser = () => {
		localStorage.removeItem("authToken")
		setIsLoggedIn(false)
		setUser(null)
	}

	const verifyStoredToken = () => {
		const storedToken = localStorage.getItem("authToken")

		if (storedToken) {
			authService
				.loggedIn({
					headers: {
						Authorization: `Bearer ${storedToken}`,
					},
				})
				.then(res => {
					const user: User = res.data.user
					setUser(user)
					setIsLoggedIn(true)
					setIsLoading(false)
				})
				.catch(err => {
					console.log(err)
					setIsLoggedIn(false)
					setUser(null)
					setIsLoading(false)
				})
		} else {
			setIsLoggedIn(false)
			setIsLoading(false)
		}
	}

	useEffect(() => {
		verifyStoredToken()
	}, [])

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn,
				isLoading,
				user,
				setUser,
				loginUser,
				logoutUser,
				setToken,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuthContext = () => useContext(AuthContext) as IAuthContext

interface IAuthProviderWrapper {
	children: Children
}
