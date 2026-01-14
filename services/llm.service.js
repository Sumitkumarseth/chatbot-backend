const axios = require("axios")

exports.askLLM = async (prompt, msg) => {
  try {
    const res = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.1-8b-instant",   // ✅ WORKING MODEL
        messages: [
          { role: "system", content: prompt },
          { role: "user", content: msg }
        ],
        temperature: 0.7,
        max_tokens: 512
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENAI_KEY}`,
          "Content-Type": "application/json"
        }
      }
    )

    return res.data.choices[0].message.content

  } catch (err) {
    console.log("GROQ ERROR =>", err.response?.data || err.message)
    throw err
  }
}
