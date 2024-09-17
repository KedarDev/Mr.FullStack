const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const express = require("express")
const app = express()
const cors = require("cors");

app.use(cors({
    origin: "*",
    credentials: true,
    methods: ['GET', "POST", "PUT", "DELETE", "HEAD"]
}))

app.put("/user", (req, res) => {
    res.json({name: "Kyle", favoriteFood: "Rice"})
})

app.listen(3000)
