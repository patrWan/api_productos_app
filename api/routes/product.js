const express = require("express")
const router = express.Router()

const { getItems, getItemByName, createItem } = require("../controllers/productController")

router.get("/", getItems);

router.get("/search", getItemByName);

router.post("/", createItem);

module.exports = router