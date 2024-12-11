/*=============================================== ImageUploader types ===============================================*/

import type { ILibInputContainer } from "@julseb-lib/react/component-props"
import type { PictureData } from "types"

export interface IImageUploader
    extends Omit<
        ILibInputContainer,
        | "children"
        | "value"
        | "counter"
        | "maxLength"
        | "hasListOpen"
        | "iconBaseUrl"
    > {
    uwConfig: {
        cloudName: string
        uploadPreset: string
        cropping?: boolean
        showAdvancedOptions?: boolean
        sources?: Array<string>
        multiple?: boolean
        folder?: string
        tags?: Array<string>
        context?: { alt: string }
        clientAllowedFormats?: Array<string>
        maxImageFileSize?: number
        maxImageWidth?: number
        theme?: string
    }
    pictureData: PictureData
    setPictureData: DispatchState<PictureData>
}
