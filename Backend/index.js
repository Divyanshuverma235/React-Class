const express = require("express");
const module1 = require("./function/primarytest");
const app = express();
const port = 4567;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/db/users/insert", module1.FunctInsert);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

