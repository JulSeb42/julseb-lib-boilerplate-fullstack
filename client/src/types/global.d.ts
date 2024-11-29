/*=============================================== Global types ===============================================*/

import type {
    FunctionComponent,
    ElementType as ElType,
    ChangeEvent as Change,
    FormEvent as Form,
} from "react"
import "styled-components"
import type {
    ReactChildren,
    DispatchState as DispatchType,
} from "@julseb-lib/react/types"

declare global {
    type Children = ReactChildren
    type DispatchState<T> = DispatchType<T>
    type FC<T = FunctionComponent> = FunctionComponent<T>
    type ElementType = ElType
    type ChangeEvent<T> = Change<T>
    type FormEvent = Form<HTMLFormElement>
}
