/*=============================================== Plopfile ===============================================*/

import type { NodePlopAPI } from "plop"
import welcome from "cli-welcome"
import { runCommand } from "./actions/index.js"
import {
    generateComponent,
    generateModel,
    generatePage,
    generateRoute,
    generateSingleComponent,
    generateType,
    generateGenerator,
    /* Prepend import - DO NOT REMOVE */
} from "./generators/index.js"
import {
    addOpenBrackets,
    addClosingBrackets,
    surroundBrackets,
} from "./utils/index.js"
import { pascalName, kebabName } from "./partials/index.js"

export default (plop: NodePlopAPI) => {
    const { load } = plop

    /*====================== Greetings ======================*/

    welcome({
        title: "Julseb CLI",
        tagLine: "A tool to generate React with TS apps",
        description: "",
        bgColor: "#ffffff",
        color: "#000000",
        bold: true,
        clear: true,
        version: "1.0.0",
    })

    /*====================== Actions ======================*/

    load("plop-pack-remove") // With this helper you can remove files in your project. Full doc here https://github.com/TheSharpieOne/plop-pack-remove
    runCommand(plop) // With this helper you can run commands in a terminal => { type: "runCommand", command: "console.log("hello world")" }

    /*====================== Partials ======================*/

    pascalName(plop) // Shortcut for {{ pascalCase name }}, use: {{>pascalName }}
    kebabName(plop) // Shortcut for {{ kebabCase name }}, use: {{>kebabName }}

    /*====================== Utils ======================*/

    surroundBrackets(plop) // Surround with brackets in templates when needed
    addOpenBrackets(plop) // Add double open brackets {{ where needed
    addClosingBrackets(plop) // Add double closing brackets }} where needed

    /*====================== Client ======================*/

    generateComponent(plop) // yarn plop:c
    generateSingleComponent(plop) // yarn plop:sc
    generatePage(plop) // yarn plop:p
    generateType(plop) // yarn plop:ty
    /* Prepend function - DO NOT REMOVE */

    /*====================== Server ======================*/

    generateRoute(plop) // yarn plop:r
    generateModel(plop) // yarn plop:m

    /*====================== Plop ======================*/

    generateGenerator(plop)
}
