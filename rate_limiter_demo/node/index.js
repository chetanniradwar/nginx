const express = require("express")
const app = express()

const PORT = process.env.PORT | 5001;
app.get("/", (req, res) => {
    res.send(`This is express app. I am on Port ${PORT}`)
})

app.get("/no_rate_limit/", (req, res) => {
    res.send(`This page has no rate limit`)
})

app.get("/rate_limit/", (req, res) => {
    res.send(`This page has rate limit`)
})

app.get("/rate_limit_with_burst/", (req, res) => {
    res.send(`This page has rate limit with burst`)
})
app.listen(PORT, '0.0.0.0', () => console.log(`Listening on port ${PORT}`))