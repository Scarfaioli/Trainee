const express = require("express");
const app = express();

app.use(express.json());

app.listen(3333);

app.get("/", (request, response) => {
  return response.json({
    helloWord: "Hello Word",
    App: "NodeJs App"
  });
});

function sum(a, b){
  return a + b;
}

module.exports = {sum};