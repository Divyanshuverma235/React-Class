const express = require("express");
const module1 = require("./function/primarytest");
const app = express();
const port = 4567;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, world!");
});
app.get("/test1", (req, res) => {
  res.send("This is a test!");
});
app.get("/r1/*", module1.funct2);
app.get("/test3/:p1", module1.funct1);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

