/*=============================================== BaseLayout component ===============================================*/

import { Helmet } from "@julseb-lib/react"
import { SITE_DATA } from "shared"

export const BaseLayout: FC<IBaseLayout> = ({
    children,
    title,
    description,
    keywords,
    cover,
}) => {
    return (
        <>
            <Helmet
                title={`${title} | ${SITE_DATA.NAME}`}
                description={description}
                keywords={[...SITE_DATA.KEYWORDS, keywords as any]}
                cover={cover}
                siteName={SITE_DATA.NAME}
                favicon={SITE_DATA.FAVICON}
                author={SITE_DATA.AUTHOR}
                type={SITE_DATA.TYPE}
                language={SITE_DATA.LANGUAGE}
            />

            {children}
        </>
    )
}

export interface IBaseLayout {
    children?: Children
    title: string
    description?: string
    keywords?: string | Array<string>
    cover?: string
}
