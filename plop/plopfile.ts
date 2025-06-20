import type { NodePlopAPI } from "plop"
import figlet from "figlet"
import chalk from "chalk"
import { runCommand } from "./actions/index.js"
import {
	generateComponent,
	generateModel,
	generatePage,
	generateRoute,
	generateSingleComponent,
	generateType,
	generateGenerator,
	generateContext,
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

	console.log(
		chalk.blueBright(
			figlet.textSync("JulSeb CLI", { horizontalLayout: "full" })
		)
	),
		load("plop-pack-remove") // With this helper you can remove files in your project. Full doc here https://github.com/TheSharpieOne/plop-pack-remove
	runCommand(plop) // With this helper you can run commands in a terminal => { type: "runCommand", command: "console.log("hello world")" }

	pascalName(plop) // Shortcut for {{ pascalCase name }}, use: {{>pascalName }}
	kebabName(plop) // Shortcut for {{ kebabCase name }}, use: {{>kebabName }}

	surroundBrackets(plop) // Surround with brackets in templates when needed
	addOpenBrackets(plop) // Add double open brackets {{ where needed
	addClosingBrackets(plop) // Add double closing brackets }} where needed

	generateComponent(plop) // yarn plop:c
	generateSingleComponent(plop) // yarn plop:sc
	generatePage(plop) // yarn plop:p
	generateType(plop) // yarn plop:ty
	generateContext(plop) // yarn plop:co
	/* Prepend function - DO NOT REMOVE */

	generateRoute(plop) // yarn plop:r
	generateModel(plop) // yarn plop:m

	generateGenerator(plop) // yarn plop:g
}
