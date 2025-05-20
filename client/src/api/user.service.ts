import { http } from "api"
import { generateServerRoute } from "utils"
import type { SERVER_PATHS } from "./server-paths"
import type {
	ApiResponse,
	User,
	EditAccountFormData,
	EditPasswordFormData,
} from "types"

type PATHS = keyof typeof SERVER_PATHS.USERS

const generateRoute = (route: Exclude<PATHS, "ROOT">, id?: string) =>
	generateServerRoute("USERS", route, id)

class UserService {
	allUsers = async (): ApiResponse<Array<User>> =>
		await http.get(generateRoute("ALL_USERS"))

	getUser = async (id: string): ApiResponse<User> =>
		await http.get(generateRoute("USER", id))

	editAccount = async (id: string, data: EditAccountFormData) =>
		await http.put(generateRoute("EDIT_ACCOUNT", id), data)

	editPassword = async (id: string, data: EditPasswordFormData) =>
		await http.put(generateRoute("EDIT_PASSWORD", id), data)

	deleteAccount = async (id: string) =>
		await http.delete(generateRoute("DELETE_ACCOUNT", id))
}

export const userService = new UserService()
