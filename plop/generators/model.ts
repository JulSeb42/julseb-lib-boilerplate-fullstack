/*=============================================== Generate model & type ===============================================*/

import {
    BASE_SERVER_PATH,
    BASE_SHARED_PATH,
    TEMPLATES_PATH,
} from "../utils/index.js"
import type { NodePlopAPI } from "plop"

export default (plop: NodePlopAPI) => {
    const { setGenerator } = plop

    setGenerator("model", {
        description: "Generate a mongoose model with its corresponding type",
        prompts: [
            { type: "input", name: "name", message: "Enter model's name" },
        ],
        actions: [
            "Creating your new model",
            {
                type: "add",
                path: `${BASE_SERVER_PATH}/models/{{ pascalCase name }}.model.ts`,
                templateFile: `${TEMPLATES_PATH}/model.hbs`,
            },
            "Exporting your new file from the model's index.ts",
            {
                type: "modify",
                path: `${BASE_SERVER_PATH}/models/index.ts`,
                template: 'export * from "./{{ pascalCase name }}.model"\n$1',
                pattern: /(\/\* Prepend - DO NOT REMOVE \*\/)/g,
            },
            "Creating a type for your new model",
            {
                type: "add",
                path: `${BASE_SHARED_PATH}/types/{{ pascalCase name }}.type.ts`,
                templateFile: `${TEMPLATES_PATH}/types/type.hbs`,
            },
            "Exporting your new type from types index.ts",
            {
                type: "modify",
                path: `${BASE_SHARED_PATH}/types/index.ts`,
                template: 'export * from "./{{ pascalCase name }}.type"\n$1',
                pattern: /(\/\* Prepend - DO NOT REMOVE \*\/)/g,
            },
        ],
    })
}
