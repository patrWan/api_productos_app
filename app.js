require("dotenv").config();

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

app.use("/api", require("./src/routes"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
