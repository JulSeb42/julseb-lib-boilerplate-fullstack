"use strict"

Object.defineProperty(exports, "__esModule", { value: true })
exports.isAuthenticated = void 0
const express_jwt_1 = require("express-jwt")
const getTokenFromHeaders = req => {
	if (
		req.headers.authorization &&
		req.headers.authorization.split(" ")[0] === "Bearer"
	) {
		const token = req.headers.authorization.split(" ")[1]
		return token
	}
	return null
}
exports.isAuthenticated = (0, express_jwt_1.expressjwt)({
	// @ts-expect-error
	secret: process.env.TOKEN_SECRET,
	algorithms: ["HS256"],
	requestProperty: "payload",
	getToken: getTokenFromHeaders,
})
