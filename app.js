const express = require("express");
const index = require("./index");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/", index);
app.listen(3000, () => console.log("running"));
