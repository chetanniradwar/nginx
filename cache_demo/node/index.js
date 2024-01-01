const express = require("express")
const app = express()

const PORT = process.env.PORT | 4001;
app.get("/", (req, res) => {
    res.send(`This is express app. I am on Port ${PORT}`)
})

app.get("/no_cache/", (req, res) => {
    res.send(`This page is not cached`)
})

app.get("/cache/", (req, res) => {
    res.send(`This page is cached`)
})

app.get("/cache_enable_after_5_hits/", (req, res) => {
    res.send(`This page is cache will be enabled after 5 hits`)
})

app.get("/cache_expire_after_5_seconds/", (req, res) => {
    res.send(`This page is cache will expire after 5 seconds`)
})

app.get("/cache_expire_after_5_seconds/", (req, res) => {
    res.send(`This page is cache will expire after 5 seconds`)
})





app.listen(PORT, '0.0.0.0', () => console.log(`Listening on port ${PORT}`))