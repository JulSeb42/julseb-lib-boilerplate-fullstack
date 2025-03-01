/*=============================================== Image uploader ===============================================*/

import { useEffect, useRef } from "react"
import { Cloudinary } from "@cloudinary/url-gen"
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react"
import classNames from "classnames"
import { Icon, InputContainer, Image } from "@julseb-lib/react"
import { useAuthContext } from "context"
import { StyledImageUploader, HoverContainer } from "./styles"
import type { IImageUploader } from "./types"

const cloudName = import.meta.env.VITE_CLOUDINARY_NAME

export const ImageUploader = ({
    uwConfig,
    pictureData,
    setPictureData,
    label,
    labelComment,
    helper,
    helperBottom,
    icon = "user",
}: IImageUploader) => {
    const { user } = useAuthContext()

    const uploadWidgetRef = useRef(null)
    const uploadButtonRef = useRef<HTMLButtonElement>(null)

    const cld = new Cloudinary({
        cloud: {
            cloudName,
        },
    })

    useEffect(() => {
        const initializeUploadWidget = () => {
            // @ts-ignore
            if (window.cloudinary && uploadButtonRef.current) {
                // Create upload widget
                // @ts-ignore
                uploadWidgetRef.current = window.cloudinary.createUploadWidget(
                    uwConfig,
                    // @ts-ignore
                    (error, result) => {
                        if (!error && result && result.event === "success") {
                            console.log("Upload successful:", result.info)
                            setPictureData(result.info)
                        }
                    },
                )

                // Add click event to open widget
                const handleUploadClick = () => {
                    if (uploadWidgetRef.current) {
                        // @ts-ignore
                        uploadWidgetRef.current.open()
                    }
                }

                const buttonElement = uploadButtonRef.current
                // @ts-ignore
                buttonElement.addEventListener("click", handleUploadClick)

                // Cleanup
                return () => {
                    // @ts-ignore
                    buttonElement.removeEventListener(
                        "click",
                        handleUploadClick,
                    )
                }
            }
        }

        initializeUploadWidget()
    }, [uwConfig, setPictureData])

    return (
        <InputContainer
            label={label}
            labelComment={labelComment}
            helper={helper}
            helperBottom={helperBottom}
        >
            <StyledImageUploader ref={uploadButtonRef} type="button">
                {typeof icon === "string" ? (
                    <Icon
                        src={icon}
                        size={64}
                        color="primary"
                        className={classNames({
                            Visible: user ? user?.avatar !== undefined : false,
                        })}
                    />
                ) : (
                    icon
                )}

                {user?.avatar && <Image src={user.avatar} />}

                {pictureData && (
                    <AdvancedImage
                        cldImg={cld.image(pictureData.public_id)}
                        plugins={[responsive(), placeholder({ mode: "blur" })]}
                    />
                )}

                <HoverContainer>
                    <Icon src="edit" color="primary" size={48} />
                </HoverContainer>
            </StyledImageUploader>
        </InputContainer>
    )
}
