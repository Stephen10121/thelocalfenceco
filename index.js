const express = require("express");
const http = require('http');

const app = express();
const PORT = 7400 || process.env.PORT;
const server = http.createServer(app);

app.use(express.static('public'))

app.use((_req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});

app.use(express.json(), express.urlencoded({ extended: true }));

app.get("/auth", async (req, res) => {
    res.json({ msg: "Hello World" });
});


server.listen(PORT, () => {
    console.log(`[server] Server running on port ${PORT}`);
});
