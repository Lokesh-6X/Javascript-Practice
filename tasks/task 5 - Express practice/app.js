const express = require("express");
const mongoose = require("mongoose");
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

const connectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(`Database Connection Sucessfull`);
        console.log(`Host: ${connect.connection.host}`);
        console.log(`Name: ${connect.connection.name}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

connectDB();

app.listen(port, () => {
    console.log(`Server running at ${port}`);
});
