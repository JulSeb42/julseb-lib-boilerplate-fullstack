"use strict"

var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod }
	}
Object.defineProperty(exports, "__esModule", { value: true })
require("dotenv/config")
const express_1 = __importDefault(require("express"))
const config_1 = __importDefault(require("./config"))
const routes_1 = __importDefault(require("./routes"))
const error_handling_1 = require("./error-handling")
const shared_1 = require("../shared")
require("./db")
const app = (0, express_1.default)()
;(0, config_1.default)(app)
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", `${process.env.API_URL}/api`) // update to match the domain you will make the request from
	res.header("Content-type", "application/json")
	next()
})
// app.options("*", cors())
app.use(shared_1.BASE_API_URL, routes_1.default)
;(0, error_handling_1.errorHandler)(app)
exports.default = app
