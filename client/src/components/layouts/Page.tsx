/*=============================================== Page ===============================================*/

import { PageLayout, ResetScroll } from "@julseb-lib/react"
import type { LibMainSize } from "@julseb-lib/react/types"
import type { ILibPageLayout } from "@julseb-lib/react/component-props"
import { SITE_DATA } from "shared"
import { PATHS } from "routes"
import { Nav } from "./Nav"

export const Page: FC<IPage> = ({
    children,
    isLoading,
    title,
    description,
    keywords,
    cover,
    mainWidth = "default",
}) => {
    return (
        <PageLayout
            isLoading={isLoading}
            helmet={{
                title: `${title} | ${SITE_DATA.NAME}`,
                description,
                keywords: [...SITE_DATA.KEYWORDS, keywords] as Array<string>,
                cover: cover || SITE_DATA.COVER,
                siteName: SITE_DATA.NAME,
                favicon: SITE_DATA.FAVICON,
                author: SITE_DATA.AUTHOR,
                type: SITE_DATA.TYPE,
                language: SITE_DATA.LANGUAGE,
            }}
            header={{
                logo: { text: SITE_DATA.NAME, to: PATHS.ROOT },
                nav: <Nav />,
            }}
            main={{ size: mainWidth }}
        >
            {children}

            <ResetScroll />
        </PageLayout>
    )
}

type IPage = ILibPageLayout & {
    title: string
    description?: string
    keywords?: string | Array<string>
    cover?: string
    mainWidth?: LibMainSize
}
