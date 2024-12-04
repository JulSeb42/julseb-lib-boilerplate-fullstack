/*=============================================== Generate component ===============================================*/

import { BASE_CLIENT_PATH, TEMPLATES_PATH } from "../utils/index.js"
import type { NodePlopAPI } from "plop"

export default (plop: NodePlopAPI) => {
    const { setGenerator } = plop

    setGenerator("component", {
        description: "React component",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Enter component's name",
            },
            {
                type: "input",
                name: "tag",
                message: "Enter HTML tag",
                default: "div",
            },
            {
                type: "confirm",
                name: "forward",
                message: "Add `forwardRef`?",
                default: false,
            },
            {
                type: "input",
                name: "attribute",
                message: "Enter HTML attribute",
                default: (data: { tag: string }) => data.tag,
                when: data => data.forward,
            },
            {
                type: "confirm",
                name: "export",
                message: "Export this component from components folder?",
                default: true,
            },
        ],
        actions: data => {
            const actions = [
                "Creating new files",
                {
                    type: "addMany",
                    destination: `${BASE_CLIENT_PATH}/components/{{ pascalCase name }}`,
                    templateFiles: `${TEMPLATES_PATH}/component/*.hbs`,
                    base: `${TEMPLATES_PATH}/component`,
                    verbose: false,
                },
            ]

            if (data?.export)
                actions.push("Exporting your new component", {
                    type: "modify",
                    // @ts-ignore
                    path: `${BASE_CLIENT_PATH}/components/index.ts`,
                    template: 'export * from "./{{ pascalCase name }}"\n$1',
                    pattern: /(\/\* Prepend - DO NOT REMOVE \*\/)/g,
                })

            return actions
        },
    })
}
