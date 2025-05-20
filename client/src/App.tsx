import { Routes, Route } from "react-router-dom"
import { ToasterProviderWrapper, uuid } from "@julseb-lib/react"
import { routes, AnonRoute, ProtectedRoute, AdminRoute } from "routes"

export const App = () => {
	return (
		<ToasterProviderWrapper>
			<Routes>
				{routes.map(route => {
					if (route.type === "protected") {
						return (
							<Route
								path={route.path}
								element={
									<ProtectedRoute>
										{route.element}
									</ProtectedRoute>
								}
								key={uuid()}
							/>
						)
					}

					if (route.type === "admin")
						return (
							<Route
								path={route.path}
								element={
									<AdminRoute>{route.element}</AdminRoute>
								}
								key={uuid()}
							/>
						)

					if (route.type === "anon") {
						return (
							<Route
								path={route.path}
								element={<AnonRoute>{route.element}</AnonRoute>}
								key={uuid()}
							/>
						)
					}

					return (
						<Route
							path={route.path}
							element={route.element}
							key={uuid()}
						/>
					)
				})}
			</Routes>
		</ToasterProviderWrapper>
	)
}
