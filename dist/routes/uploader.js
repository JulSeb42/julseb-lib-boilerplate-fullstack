"use strict";
/*=============================================== Uploader ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cloudinary_config_1 = require("../config/cloudinary.config");
const shared_1 = require("../../shared");
const router = (0, express_1.Router)();
router.put(shared_1.SERVER_PATHS.UPLOADER.UPLOAD_PICTURE, cloudinary_config_1.fileUploader.single("imageUrl"), (req, res, next) => {
    if (!req.file) {
        next(new Error("No file uploaded"));
        return;
    }
    res.json({ secure_url: req.file.path });
});
exports.default = router;
