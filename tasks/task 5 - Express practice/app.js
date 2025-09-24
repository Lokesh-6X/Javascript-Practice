const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000;

const userRoutes = require("./routes/userRoute");
const logger = require("./middleware/logger");

app.use(logger);
app.use(express.json());

app.use("/user", userRoutes);

app.get("/", (req,res) => {
    res.send("Hello World");
});

app.use((req, res) => {
    res.status(404).send("404 - Route Not Found");
});

app.listen(port, () => {
    console.log(`Server running at ${port}`);
});
