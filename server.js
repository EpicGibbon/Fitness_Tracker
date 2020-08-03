const express = require("express");
const mongoose = require("mongoose");
const db = require("./models")
//set up PORT
const PORT = process.env.PORT || 3000;

const app = express();
//importing our routes
const routes = require("./routes")

//use middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout_db", {
    useNewUrlParser: true,
    useFindAndModify: false
});



// use routes
app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));



app.listen(PORT, () => {
    console.log(`app listening on: http://localhost:${PORT}`);
});