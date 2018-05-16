require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const port = process.env.PORT || 3001;
const app = express();
const ctrl = require("./controller");

//Database Connection Using Massive

// console.log(process.env.CONNECTION_STRING);
massive(process.env.CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(err => console.log(err));

app.use(json());

app.post(`/api/register`, ctrl.register);
app.post(`/api/login`, ctrl.login);

//Listening on Port 3001
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
