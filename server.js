const express = require("express");
const path = require("path");
const mongodb = require("mongodb");
const session = require("express-session");

const app = express();
//importing our routes
const routes = require("./routes")
//set up PORT
const PORT = process.env.PORT || 3000;

//use middleware
app.use(express.static("public"));
app.use(express.json());

// set up express-session
app.use(session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true
}));

// use routes
app.use(routes);

app.listen(PORT, () => {
    console.log(`app listening on: http://localhost:${PORT}`);
});