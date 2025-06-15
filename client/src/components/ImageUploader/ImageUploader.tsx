import { useEffect, useRef, useState } from "react"
import { Cloudinary } from "@cloudinary/url-gen/index"
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react"
import classNames from "classnames"
import {
	Icon,
	InputContainer,
	Image,
	Modal,
	Alert,
	Text,
	Flexbox,
	Button,
} from "@julseb-lib/react"
import { useAuthContext } from "context"
import { StyledImageUploader, HoverContainer, StyledButton } from "./styles"
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
	const [currentImg, setCurrentImg] = useState(
		(user?.avatar || pictureData?.public_id) ?? "",
	)

	const cld = new Cloudinary({ cloud: { cloudName } })

	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		const initializeUploadWidget = () => {
			if ((window as any).cloudinary && uploadButtonRef?.current) {
				// Create upload widget
				uploadWidgetRef.current = (
					window as any
				).cloudinary.createUploadWidget(
					uwConfig,
					(error: any, result: any) => {
						if (!error && result && result.event === "success") {
							console.log("Upload successful:", result.info)
							console.log({ result })
							setPictureData(result.info)
							setCurrentImg(result.info.secure_url)
						}
					},
				)

				// Add click event to open widget
				const handleUploadClick = () => {
					if (uploadWidgetRef.current) {
						;(uploadWidgetRef as any).current.open()
					}
				}

				const buttonElement = uploadButtonRef.current
				buttonElement.addEventListener("click", handleUploadClick)

				// Cleanup
				return () => {
					buttonElement.removeEventListener(
						"click",
						handleUploadClick,
					)
				}
			}
		}

		initializeUploadWidget()
	}, [pictureData, uwConfig, setPictureData, currentImg])

	return (
		<>
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
								Visible: user
									? user?.avatar !== undefined
									: false,
							})}
						/>
					) : (
						icon
					)}

					{currentImg && <Image src={currentImg} borderRadius="m" />}

					{pictureData && (
						<AdvancedImage
							cldImg={cld.image(currentImg)}
							plugins={[
								responsive(),
								placeholder({ mode: "blur" }),
							]}
						/>
					)}

					<HoverContainer>
						<Icon src="edit" color="primary" size={48} />
					</HoverContainer>
				</StyledImageUploader>

				{currentImg && (
					// @ts-ignore
					<StyledButton
						icon="close"
						type="button"
						onClick={() => setIsOpen(true)}
					/>
				)}
			</InputContainer>

			<Modal isOpen={isOpen} setIsOpen={setIsOpen} hideCloseButton>
				<Alert alertColor="danger" maxWidth={600}>
					<Text>
						Are you sure you want to delete your profile picture?
					</Text>

					<Flexbox gap="xs">
						<Button
							color="danger"
							onClick={() => {
								setCurrentImg("")
								setPictureData(undefined as any)
								setIsOpen(false)
							}}
							type="button"
						>
							Yes, delete picture
						</Button>

						<Button
							variant="transparent"
							onClick={() => setIsOpen(false)}
						>
							No, cancel
						</Button>
					</Flexbox>
				</Alert>
			</Modal>
		</>
	)
}
