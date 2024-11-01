/*=============================================== Cloudinary service ===============================================*/

import { http } from "api"
import { SERVER_PATHS } from "shared"

const errorHandler = (err: any) => {
    throw err
}

const uploadImage = async (file: any) =>
    await http
        .put(SERVER_PATHS.UPLOADER.UPLOAD_PICTURE, file)
        .then(res => res.data)
        .catch(errorHandler)

export const cloudinaryService = {
    uploadImage,
}