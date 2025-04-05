"use strict";
/*=============================================== Users routes ===============================================*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const utils_1 = require("@julseb-lib/utils");
const models_1 = require("../models");
const utils_2 = require("../utils");
const shared_1 = require("../../shared");
const router = (0, express_1.Router)();
const { USERS: PATHS } = shared_1.SERVER_PATHS;
/*====================== Get all users ======================*/
router.get(PATHS.ALL_USERS, (_, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield models_1.UserModel.find()
        .then(usersFromDb => res.status(200).json(usersFromDb))
        .catch(err => next(err))); /* quick & dirty fix */
}));
/*====================== Get user by ID ======================*/
router.get(PATHS.USER(), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield models_1.UserModel.findById(req.params.id)
        .then(userFromDb => res.status(200).json(userFromDb))
        .catch(err => {
        next(err);
        return res.status(400).json({
            message: shared_1.COMMON_TEXTS.ERRORS.USER_NOT_EXIST,
        });
    }));
}));
/*====================== Edit user ======================*/
router.put(PATHS.EDIT_ACCOUNT(), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { fullName } = req.body;
    if (!fullName) {
        return res
            .status(400)
            .json({ message: shared_1.COMMON_TEXTS.ERRORS.FULL_NAME_EMPTY });
    }
    return (yield models_1.UserModel.findByIdAndUpdate(req.params.id, Object.assign({}, req.body), { new: true })
        .then(updatedUser => {
        const payload = { user: updatedUser };
        const authToken = jsonwebtoken_1.default.sign(payload, utils_2.TOKEN_SECRET, utils_2.jwtConfig);
        return res.status(201).json({
            user: updatedUser,
            authToken: authToken,
        });
    })
        .catch(err => next(err)));
}));
/*====================== Edit password ======================*/
router.put(PATHS.EDIT_PASSWORD(), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { oldPassword, newPassword } = req.body;
    if (!utils_1.passwordRegex.test(newPassword)) {
        return res.status(400).json({
            message: shared_1.COMMON_TEXTS.ERRORS.PASSWORD_NOT_VALID,
        });
    }
    return (yield models_1.UserModel.findById(req.params.id)
        .then((foundUser) => __awaiter(void 0, void 0, void 0, function* () {
        if (!foundUser) {
            return res
                .status(400)
                .json({ message: shared_1.COMMON_TEXTS.ERRORS.USER_NOT_EXIST });
        }
        if (!(yield bcryptjs_1.default.compare(oldPassword, foundUser === null || foundUser === void 0 ? void 0 : foundUser.password))) {
            return res
                .status(400)
                .json({ message: shared_1.COMMON_TEXTS.ERRORS.OLD_PASSWORD_WRONG });
        }
        const salt = bcryptjs_1.default.genSaltSync(utils_2.SALT_ROUNDS);
        const hashedPassword = bcryptjs_1.default.hashSync(newPassword, salt);
        return yield models_1.UserModel.findByIdAndUpdate(req.params.id, { password: hashedPassword }, { new: true }).then(updatedUser => {
            const payload = { user: updatedUser };
            const authToken = jsonwebtoken_1.default.sign(payload, utils_2.TOKEN_SECRET, utils_2.jwtConfig);
            return res.status(201).json({ user: updatedUser, authToken });
        });
    }))
        .catch(err => next(err)));
}));
/*====================== Delete user ======================*/
router.delete(PATHS.DELETE_ACCOUNT(), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield models_1.UserModel.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json({ message: shared_1.COMMON_TEXTS.USER_DELETED }))
        .catch(err => next(err)));
}));
exports.default = router;
