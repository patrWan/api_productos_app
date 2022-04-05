const express = require("express")
const router = express.Router()

const {  getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/categoryController")

router.get("/", getItems);

router.get("/:id", );

router.post("/", );

module.exports = router