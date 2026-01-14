const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
 userId:mongoose.Schema.Types.ObjectId,
 name:String,
 systemPrompt:String
})

module.exports = mongoose.model("Project",projectSchema)
