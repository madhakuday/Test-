
require("dotenv").config()
const express = require("express");
const app = express()
const cookieparser = require("cookie-parser")
const path = require("path")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieparser())

const port = process.env.PORT || 5000
//database
require("./db/db")

const router = require("./router/router");
app.use("/", router)


//** deply */
__dirname = path.resolve()
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/build")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../", "frontend", "build", "index.html"))
    })
} else {
    app.get("/", (req, res) => {
        res.send("app is not working")

    })
}
//** deply */



app.listen(port, () => {
    console.log(`port is listen at ${port}`);
})