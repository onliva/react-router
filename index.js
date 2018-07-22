var express = require("express");
var app = express();
const bodyparser = require("body-parser");
const jsonparser = bodyparser.json();
const session = require("express-session");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
app.use(
    session({
        secret: "qweqweqwe",
        resave: false,
        saveUninitialized: true,
        cookies: {
            maxAge: 1000 * 60 * 60 * 24
        }
    })
);
app.listen(3000, () => console.log("Server started"));
app.get("/", (req, res) => res.render("home"));

app.get("/try", (req, res) => {
    res.send("server axios");
});
app.post("/try", jsonparser, (req, res) => {
    res.send(req.body);
});
app.post("/sign", jsonparser, (req, res) => {
    if (req.body.username === "test" && req.body.password === "123") {
        req.session.username = req.body.username;
        return res.send("SIGN_SUCCESS");
    }
    res.send("SIGN_FALSE");
});
app.get("/getinfo", (req, res) => {
    if (req.session.username) {
        return res.send(req.session.username);
    }
});
