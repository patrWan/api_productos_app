const pool = require('../database/mysql');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getItems = (req, res) => {

    const page = req.query.page ? req.query.page : 1;
    const categoryName = req.query.category ? req.query.category : 'bebida energetica';
    const productName = req.query.product_name;

    const LIMIT = 9;
    const start = (page - 1) * LIMIT;

    console.log("query page => "+ req.query.page );
    console.log("query categoryName => "+req.query.category);
    console.log("query productName => "+req.query.product_name);
    
    var q = '';
    if(req.query.page === '' && req.query.category === ''){
        q = 'SELECT product.name, product.url_image, product.price, product.discount FROM product WHERE product.name LIKE "%' + productName + '%"';
    }else{
        q = 'SELECT product.name, product.url_image, product.price, product.discount FROM product, category WHERE category.name = "' + categoryName + '" AND product.category = category.id LIMIT ' + start + ',' + LIMIT + '';
    }

   

    let totalPages = 0;
    pool.query('SELECT COUNT(product.id) AS numberOfProducts FROM product, category WHERE category.name = "' + categoryName + '" AND product.category = category.id', (err, data) => {
        if (err) console.log(err);
        totalPages = data[0].numberOfProducts / LIMIT;

        
        pool.query(q, (err, data) => {
            if (err) console.log(err);
            res.send({
                numberOfPages: Math.ceil(totalPages),
                products: data,
            });
        });
    });



}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getItemByName = (req, res) => {
    const productName = req.query.product_name;

    const q = 'SELECT product.name, product.url_image, product.price, product.discount FROM product WHERE product.name LIKE "%' + productName + '%"';
    pool.query(q, (err, data) => {
        if (err) console.log(err);
        res.send({
            products: data,
        });
    });
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

module.exports = { getItems, getItemByName, createItem, updateItem, deleteItem };