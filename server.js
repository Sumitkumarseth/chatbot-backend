require("dotenv").config()
const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")

const app = express()
app.use(cors())
app.use(express.json())

connectDB()

app.use("/api/auth", require("./routes/auth.routes"))
app.use("/api/project", require("./routes/project.routes"))
app.use("/api/chat", require("./routes/chat.routes"))

app.listen(5000, ()=>console.log("Server Started"))
