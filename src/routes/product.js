const express = require("express")
const router = express.Router()

const { getItems } = require("../controllers/productController")

router.get("/", getItems);

router.get("/:id", );

router.post("/", );

module.exports = router