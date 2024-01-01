const express = require("express")
const app = express()

const PORT = process.env.PORT | 3001;
app.get("/", (req, res) => {
    res.send(`This is express app. I am on Port ${PORT}`)
})


app.listen(PORT, '0.0.0.0', () => console.log(`Listening on port ${PORT}`))