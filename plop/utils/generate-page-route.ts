/*=============================================== Generate page route ===============================================*/

export default (pageType: "protected" | "anon" | "undefined", isAdmin?: boolean | null) => {
    const pathName = `PATHS.${isAdmin ? "ADMIN_" : ""}{{ constantCase name }}`
    const elementComp = "<{{ pascalCase name }} />"

    let element: string

    if (pageType === "protected" || isAdmin) {
        element = `(\n\t\t\t<ProtectedRoute>\n\t\t\t\t${elementComp}\n\t\t\t</ProtectedRoute>\n\t\t),`
    } else if (pageType === "anon") {
        element = `(\n\t\t\t<AnonRoute>\n\t\t\t\t${elementComp}\n\t\t\t</AnonRoute>\n\t\t),`
    } else {
        element = elementComp
    }

    return `{\n\t\tpath: ${pathName},\n\t\telement: ${element}\n\t},\n\t$1`
}
