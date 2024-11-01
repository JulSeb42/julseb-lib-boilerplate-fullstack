/*=============================================== DangerZone ===============================================*/

import { useState } from "react"
import { Button, Alert, Text, Flexbox } from "@julseb-lib/react"

export const DangerZone: FC<IDangerZone> = ({ texts, buttonPrimary }) => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <>
            {!isVisible && (
                <Button color="danger" onClick={() => setIsVisible(true)}>
                    {texts.buttonOpen}
                </Button>
            )}

            {isVisible && (
                <Alert alertColor="danger">
                    <Text>{texts.body}</Text>

                    <Flexbox alignItems="center" gap="xs">
                        <Button color="danger" onClick={buttonPrimary.onClick}>
                            {buttonPrimary.text}
                        </Button>

                        <Button
                            variant="transparent"
                            onClick={() => setIsVisible(false)}
                        >
                            {texts.buttonSecondary || "Cancel"}
                        </Button>
                    </Flexbox>
                </Alert>
            )}
        </>
    )
}

interface IDangerZone {
    texts: {
        buttonOpen: string
        body: string
        buttonSecondary?: string
    }

    buttonPrimary: {
        text: string
        onClick: () => void
    }
}
