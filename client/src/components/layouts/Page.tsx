/*=============================================== Page ===============================================*/

import { PageLoading, Wrapper, Main } from "@julseb-lib/react"
import { Header } from "./Header"
import { BaseLayout, type IBaseLayout } from "./BaseLayout"
import type { LibMainSize } from "@julseb-lib/react/types"

export const Page: FC<IPage> = ({
    children,
    isLoading,
    mainSize,
    noWrapper,
    ...rest
}) => {
    return (
        <BaseLayout {...rest}>
            {isLoading ? (
                <PageLoading />
            ) : (
                <>
                    <Header />
                    {!noWrapper ? (
                        <Wrapper>
                            <Main size={mainSize}>{children}</Main>
                        </Wrapper>
                    ) : (
                        <Main size={mainSize}>{children}</Main>
                    )}
                </>
            )}
        </BaseLayout>
    )
}

interface IPage extends IBaseLayout {
    children?: Children
    isLoading?: boolean
    mainSize?: LibMainSize
    noWrapper?: boolean
}
