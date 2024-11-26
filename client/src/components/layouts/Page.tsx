/*=============================================== Page ===============================================*/

import { PageLoading, Wrapper, Main } from "@julseb-lib/react"
import { Header } from "./Header"
import { SITE_DATA } from "shared"
import { PATHS } from "routes"
import { BaseLayout, type IBaseLayout } from "./BaseLayout"
import { Nav } from "./Nav"
import type { LibMainSize } from "@julseb-lib/react/types"
import type { ILibPageLayout } from "@julseb-lib/react/component-props"

// export const Page: FC<IPage> = ({
//     children,
//     isLoading,
//     title,
//     description,
//     keywords,
//     cover,
//     mainWidth = "default",
// }) => {
//     return (
//         <PageLayout
//             isLoading={isLoading}
//             helmet={{
// title: `${title} | ${SITE_DATA.NAME}`,
// description,
// keywords: [...SITE_DATA.KEYWORDS, keywords] as Array<string>,
// cover: cover || SITE_DATA.COVER,
// siteName: SITE_DATA.NAME,
// favicon: SITE_DATA.FAVICON,
// author: SITE_DATA.AUTHOR,
// type: SITE_DATA.TYPE,
// language: SITE_DATA.LANGUAGE,
//             }}
//             main={{ size: mainWidth }}
//             header={{
//                 logo: SITE_DATA.NAME,
//                 nav: <Nav />,
//             }}
//         >
//             {children}
//         </PageLayout>
//     )
// }

export const Page: FC<IPage> = ({ children, isLoading, mainSize, ...rest }) => {
    return (
        <BaseLayout {...rest}>
            {isLoading ? (
                <PageLoading />
            ) : (
                <>
                    <Header />
                    <Wrapper>
                        <Main size={mainSize}>{children}</Main>
                    </Wrapper>
                </>
            )}
        </BaseLayout>
    )
}

interface IPage extends IBaseLayout {
    children?: Children
    isLoading?: boolean
    mainSize?: LibMainSize
}
