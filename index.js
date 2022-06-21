const test = "node is running";
console.log(test);

const express = require("express");
const app = express();

app.listen(4000, () => console.log("Port 4000 is listening for requests"));

app.use(express.static('public'));



