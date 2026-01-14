const router = require("express").Router()
const Project = require("../models/Project")
const auth = require("../middlewares/auth.middleware")

router.post("/",auth, async(req,res)=>{
 const project = await Project.create({
   userId:req.userId,
   name:req.body.name,
   systemPrompt:req.body.systemPrompt
 })
 res.json(project)
})

router.get("/",auth, async(req,res)=>{
 const data = await Project.find({userId:req.userId})
 res.json(data)
})

module.exports = router
