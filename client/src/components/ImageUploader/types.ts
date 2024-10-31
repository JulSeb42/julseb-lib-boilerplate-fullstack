/*=============================================== ImageUploader types ===============================================*/

import type { ILibInputImage } from "@julseb-lib/react/component-props"

export interface IImageUploader extends ILibInputImage {
    setImageUrl: (imageUrl: string) => void
    setIsLoading: (isLoading: boolean) => void
}
