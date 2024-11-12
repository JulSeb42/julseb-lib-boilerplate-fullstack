/*=============================================== Generate generator ===============================================*/


import type { NodePlopAPI } from "plop"
import { toCamelCase } from "@julseb-lib/utils"

export default (plop: NodePlopAPI) => {
    const { setGenerator } = plop

    setGenerator("generator", {
        description: "Generate plop generators",
        prompts: [
            {
                type: "input",
                message: "Enter the name of your new generator",
                name: "name",
            },
        ],
        actions: data => {
            const actions = [
                {
                    type: "add",
                    path: "./generators/{{>kebabName}}.ts",
                    templateFile: "./templates/generator.hbs",
                },
                {
                    type: "modify",
                    path: "./generators/index.ts",
                    template: `export { default as {{ camelCase name }} } from "./{{>kebabName}}.js"\n$1`,
                    pattern: /(\/\* Prepend export - DO NOT REMOVE \*\/)/g,
                },
                {
                    type: "modify",
                    path: "./plopfile.ts",
                    template: `{{ camelCase name }},\n\t$1`,
                    pattern: /(\/\* Prepend import - DO NOT REMOVE \*\/)/g,
                },
                {
                    type: "modify",
                    path: "./plopfile.ts",
                    template: `${toCamelCase(data?.name)}(plop) // yarn plop:${data?.name[0]}\n\t$1`,
                    pattern: /(\/\* Prepend function - DO NOT REMOVE \*\/)/g,
                },
                "Don't forget to add the scripts in package.json :)",
            ]

            return actions
        }
    })
}
