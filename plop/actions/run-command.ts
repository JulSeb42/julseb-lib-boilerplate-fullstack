/*=============================================== Run command action ===============================================*/

import { exec } from "child_process"
import type { NodePlopAPI } from "plop"

export default (plop: NodePlopAPI) => {
    const { setActionType } = plop

    setActionType(
        "runCommand",
        (_, config) =>
            new Promise((resolve, reject) => {
                exec(config.command, (error, stdout) => {
                    if (error) {
                        console.error(error.message)
                        reject(error)
                    }

                    resolve(stdout)
                })
            })
    )
}

// const runCommand = (command: string) =>
//     new Promise((resolve, reject) => {
//         exec(command, (err, stdout) => {
//             if (err) {
//                 console.error(err.message)
//                 reject(err)
//             }

//             resolve(stdout)
//         })
//     })
