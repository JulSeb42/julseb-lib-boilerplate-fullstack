/*=============================================== ImageUploader ===============================================*/

import type { ChangeEvent } from "react"
import { InputImage } from "@julseb-lib/react"
import { cloudinaryService } from "api"
import type { IImageUploader } from "components/ImageUploader/types"

export const ImageUploader: FC<IImageUploader> = ({
    value,
    id,
    setImageUrl,
    setIsLoading,
    ...rest
}) => {
    const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()

        const uploadData = new FormData()
        setIsLoading(true)

        uploadData.append("imageUrl", e.target.files ? e.target.files[0] : "")

        cloudinaryService
            .uploadImage(uploadData)
            .then(res => {
                setImageUrl(res.secure_url)
                setIsLoading(false)
            })
            .catch(err => console.log(err))

        if (e.target.files && e.target.files[0]) {
            // @ts-expect-error
            setImageUrl(e.target.files[0])
            const reader = new FileReader()
            reader.addEventListener("load", () => {
                // @ts-expect-error
                setImageUrl(reader.result)
            })

            reader.readAsDataURL(e.target.files[0])
        }
    }

    return (
        <InputImage
            {...rest}
            id={id}
            value={value}
            onChange={(e: any) => handleImage(e)}
        />
    )
}
