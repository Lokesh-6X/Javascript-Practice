const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000;

const userRoutes = require("./routes/userRoute");

app.use("/user", userRoutes);

app.get("/", (req,res) => {
    res.send("Hello World");
});


app.listen(port, () => {
    console.log(`Server running at ${port}`);
});
