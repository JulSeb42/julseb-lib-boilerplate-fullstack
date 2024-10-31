/*=============================================== Seed fake users ===============================================*/

require("dotenv/config")
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const { faker } = require("@faker-js/faker")
const {
    getRandomString,
    getRandomAvatar,
    convertToEmail,
    generateNumbers,
    getRandom,
} = require("@julseb-lib/utils")

// Convert TS model to JS model and add it to "./models"
const { UserModel } = require("./models/User.model")

// Hash password
const password = "Password42"
const salt = bcrypt.genSaltSync()
const hash = bcrypt.hashSync(password, salt)

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/react-rest"

mongoose.connect(MONGODB_URI)

const realUser = {
    fullName: "Julien Sebag",
    email: "julien.sebag@me.com",
    password: hash,
    verified: true,
    verifyToken: getRandomString(20),
    role: "admin",
}

const fakeUsers = generateNumbers(0, 98).map(() => {
    const gender = getRandom(["male", "female"])
    const fullName = faker.person.fullName(gender)

    return {
        fullName,
        email: convertToEmail(fullName),
        password: hash,
        verified: true,
        verifyToken: getRandomString(20),
        avatar: getRandomAvatar(gender),
        role: "user",
    }
})

UserModel.insertMany([realUser, ...fakeUsers])
    .then(users => {
        console.log(
            `Success, you added ${users.length} user${
                users.length > 1 ? "s" : ""
            } to the db`
        )
        mongoose.connection.close()
    })
    .catch(err => console.log(err))

// Run `node db/seed.js`
