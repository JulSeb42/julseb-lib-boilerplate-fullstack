"use strict";
/*=============================================== All routes ===============================================*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shared_1 = require("../../shared");
const auth_1 = __importDefault(require("./auth"));
const user_1 = __importDefault(require("./user"));
const uploader_1 = __importDefault(require("./uploader"));
/* Prepend import new route - DO NOT REMOVE */
const router = (0, express_1.Router)();
router.get("/", (_, res) => {
    res.json("All good in here");
});
router.use(shared_1.SERVER_PATHS.AUTH.ROOT, auth_1.default);
router.use(shared_1.SERVER_PATHS.USERS.ROOT, user_1.default);
router.use(shared_1.SERVER_PATHS.UPLOADER.ROOT, uploader_1.default);
/* Prepend router use - DO NOT REMOVE */
exports.default = router;
