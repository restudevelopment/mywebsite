const express = require("express")
const helmet = require("helmet")
const path = require("path")
require("dotenv").config()

const PORT = process.env.PORT
const app = express()

app.use(helmet())

app.use(express.json())

app.use(express.static(path.join(__dirname, "./public")))
app.use(express.static(path.join(__dirname, "./node_modules/aos/dist")))
app.use(express.static(path.join(__dirname, "./node_modules/aos/dist")))

app.set("views", path.join(__dirname, "./src/views"))
app.set("view engine", "ejs")

app.get("/", (_, res) => {
    res.render("index")
})

app.listen(PORT, () => {
    console.log(`Server run on http://localhost:${PORT}`)
})
