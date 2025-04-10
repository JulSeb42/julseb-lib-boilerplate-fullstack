"use strict"

var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod }
	}
Object.defineProperty(exports, "__esModule", { value: true })
const app_1 = __importDefault(require("./app"))
const utils_1 = require("./utils")
app_1.default.listen(utils_1.PORT, () => {
	console.log(`🚀 Server listening on port http://localhost:${utils_1.PORT}`)
})
