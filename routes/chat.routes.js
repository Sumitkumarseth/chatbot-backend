const router = require("express").Router()
const { chat } = require("../controllers/chat.controller")

router.post("/:id", chat)

module.exports = router
