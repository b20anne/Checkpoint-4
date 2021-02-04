require("dotenv").config();
const express = require("express");


const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const mainRouter = require("./routes");

app.use("/api", mainRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});