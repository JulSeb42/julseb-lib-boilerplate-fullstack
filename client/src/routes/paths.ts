export const PATHS = {
	ROOT: "/",

	USERS: "/users",
	USER: (id = ":id") => `/users/${id}`,

	SIGNUP: "/signup",
	THANK_YOU: "/signup/thank-you",
	VERIFY: "/verify/:token/:id",
	LOGIN: "/login",
	FORGOT_PASSWORD: "/login/forgot-password",
	FORGOT_PASSWORD_SENT: "/login/forgot-password/email-sent",
	RESET_PASSWORD: "/reset-password/:token/:id",
	GOODBYE: "/goodbye",

	ADMIN_HOME: "/admin",
	ADMIN_USERS: "/admin/users",

	MY_ACCOUNT: "/my-account",
	EDIT_ACCOUNT: "/my-account/edit",
	EDIT_PASSWORD: "/my-account/edit-password",

	/* Prepend new path - DO NOT REMOVE */
}
