"use strict"

var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod }
	}
Object.defineProperty(exports, "__esModule", { value: true })
exports.fileUploader = void 0
const cloudinary_1 = require("cloudinary")
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary")
const multer_1 = __importDefault(require("multer"))
require("dotenv/config")
cloudinary_1.v2.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_KEY,
	api_secret: process.env.CLOUDINARY_SECRET,
})
const storage = new multer_storage_cloudinary_1.CloudinaryStorage({
	cloudinary: cloudinary_1.v2,
	params: {
		// @ts-expect-error
		allowed_formats: ["jpg", "png", "svg"],
		folder: "julseb-lib-boilerplate-fullstack",
	},
})
exports.fileUploader = (0, multer_1.default)({ storage })
