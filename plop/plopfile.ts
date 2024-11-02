/*=============================================== Plopfile ===============================================*/

import type { NodePlopAPI } from "plop"
import chalk from "chalk"
import figlet from "figlet"
import { runCommand } from "./actions/index.js"
import {
    generateComponent,
    generateModel,
    generatePage,
    generateRoute,
    generateSingleComponent,
    generateType,
} from "./generators/index.js"
import {
    addOpenBrackets,
    addClosingBrackets,
    generatePageRoute,
    surroundBrackets,
} from "./utils/index.js"
import { pascalName } from "./partials/index.js"

// Generate components, etc.

export default (plop: NodePlopAPI) => {
    console.log(
        chalk.blueBright(
            figlet.textSync("JulSeb CLI", { horizontalLayout: "full" })
        )
    )

    /*====================== Actions ======================*/

    runCommand(plop) // With this helper you can run commands in a terminal => { type: "runCommand", command: "console.log("hello world")" }

    /*====================== Utils ======================*/

    generatePageRoute("undefined", null) // Generate a client route as anon, protected or none of those
    surroundBrackets(plop) // Surround with brackets in templates when needed
    addOpenBrackets(plop) // Add double open brackets {{ where needed
    addClosingBrackets(plop) // Add double closing brackets }} where needed

    /*====================== Partials ======================*/

    pascalName(plop) // Shortcut for {{ pascalCase name }}, use: {{>pascalName }}

    /*====================== Client ======================*/

    generateComponent(plop) // yarn plop:c
    generateSingleComponent(plop) // yarn plop:sc
    generatePage(plop) // yarn plop:p
    generateType(plop) // yarn plop:ty

    /*====================== Server ======================*/

    generateRoute(plop) // yarn plop:r
    generateModel(plop) // yarn plop:m
}
