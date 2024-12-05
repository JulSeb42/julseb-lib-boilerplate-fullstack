/*=============================================== Generate Context ===============================================*/

import { BASE_CLIENT_PATH, TEMPLATES_PATH } from "../utils/index.js"
import type { NodePlopAPI } from "plop"

export default (plop: NodePlopAPI) => {
    const { setGenerator } = plop

    setGenerator("context", {
        description: "Generates React context",
        prompts: [
            { type: "input", message: "Enter context's name", name: "name" },
        ],
        actions: [
            {
                type: "addMany",
                destination: `${BASE_CLIENT_PATH}/context/{{>kebabName}}`,
                templateFiles: `${TEMPLATES_PATH}/context/*.hbs`,
                base: `${TEMPLATES_PATH}/context`,
                verbose: false,
            },
            {
                type: "modify",
                path: `${BASE_CLIENT_PATH}/context/index.ts`,
                template: `export * from "./{{>kebabName}}"\n$1`,
                pattern: /(\/\* Prepend export - DO NOT REMOVE \*\/)/g,
            },
            {
                type: "modify",
                path: `${BASE_CLIENT_PATH}/main.tsx`,
                template: ` {{>pascalName}}ProviderWrapper,\n\t$1`,
                pattern: /(\/\* Prepend import - DO NOT REMOVE \*\/)/g,
            },
            {
                type: "modify",
                path: `${BASE_CLIENT_PATH}/main.tsx`,
                template: `<{{>pascalName}}ProviderWrapper>\n\t\t\t\t$1`,
                pattern:
                    /(\{\/\* Prepend context open - DO NOT REMOVE \*\/\})/g,
            },
            {
                type: "modify",
                path: `${BASE_CLIENT_PATH}/main.tsx`,
                template: `</{{>pascalName}}ProviderWrapper>\n\t\t\t$1`,
                pattern:
                    /(\{\/\* Prepend context close - DO NOT REMOVE \*\/\})/g,
            },
            "Don't forget to add it in your main.tsx!",
        ],
    })
}
