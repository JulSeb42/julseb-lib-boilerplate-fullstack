"use strict";
/*=============================================== Consts ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.SALT_ROUNDS = exports.jwtConfig = exports.TOKEN_SECRET = exports.ORIGIN = exports.PORT = exports.MONGODB_URI = void 0;
require("dotenv/config");
exports.MONGODB_URI = process.env.MONGODB_URI ||
    "mongodb://localhost/julseb-lib-boilerplate-fullstack";
exports.PORT = process.env.PORT || 5005;
exports.ORIGIN = process.env.ORIGIN || "http://localhost:5173";
exports.TOKEN_SECRET = process.env.TOKEN_SECRET || "";
exports.jwtConfig = {
    algorithm: "HS256",
    expiresIn: "10d",
};
exports.SALT_ROUNDS = 10;
