const router = require("express").Router()
const {chat} = require("../controllers/chat.controller")
const auth = require("../middlewares/auth.middleware")

router.post("/:id",auth,chat)

module.exports = router
