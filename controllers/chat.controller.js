const Project = require("../models/Project")   // 👈 THIS WAS MISSING
const { askLLM } = require("../services/llm.service")

exports.chat = async (req, res) => {
  try {
    const id = req.params.id.trim()

    const project = await Project.findById(id)
    if (!project) {
      return res.status(404).json({ message: "Project not found" })
    }

    const reply = await askLLM(
      project.systemPrompt,
      req.body.message
    )

    res.json({ reply })

  } catch (err) {
    console.error(err)
    res.status(500).json({ error: err.message })
  }
}
