const express = require("express");
const dbConnection = require("./config/db");
const routes = require("./routes/employees");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors({ origin: true, credentials: true }));  //security enhancement

//DB connection
dbConnection();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello Server is Running .."));
app.use("/api/employees", routes);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





