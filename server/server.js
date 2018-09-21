const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const books = require("./books").books;

const app = express();

app.use(bodyParser.json());
app.use(cors());

//endpoints
app.get("/books", (request, response) => {
  response.status(200).send(books);
});

app.post("/add-books", (request, response) => {
  //console.log(request.body);
  books.push(request.body);
  response.status(200).send(books);
});

app.listen(3005, () => {
  console.log("listinging on 3005");
});
