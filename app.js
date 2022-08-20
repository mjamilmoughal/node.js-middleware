const express = require("express");
const app = express();

//adding middleware
const headersVerificationMiddleware = require("./middleware");
app.use(headersVerificationMiddleware);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/users", (req, res) => {
  res.send("Users Page");
});

app.listen(3000, () => console.log(`Server is started at port 3000`));
