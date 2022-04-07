const pool  = require('../database/mysql');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    const LIMIT = 9;
    const page = req.query.page ? req.query.page : 1;

    const categoryName = req.query.category ? req.query.category : 'bebida energetica';

    const start = (page - 1) * LIMIT;

    const q = 'SELECT product.name, product.url_image, product.price, product.discount FROM product, category WHERE category.name = "'+categoryName+'" AND product.category = category.id LIMIT '+start+','+LIMIT+'';

    pool.query(q, (err, data) => {
        if (err) console.log(err);
        res.send(data);
    });

    
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res) => { 
    console.log(req.params.id);
    const numberPage = req.query.page;
    

    res.send({page : numberPage});
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    const { body } = req

    const data = body;

    res.send(data);
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res) => { }

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req, res) => { }

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };