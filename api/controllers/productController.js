const pool = require('../database/mysql');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getItems = (req, res) => {

    const page = req.query.page ? req.query.page : 1;
    const categoryName = req.query.category ? req.query.category : 'bebida energetica';
    const orderByName = req.query.name ? req.query.name : 'ASC';

    const LIMIT = 9;
    const start = (page - 1) * LIMIT;

    var q = '';
    q = 'SELECT product.name, product.url_image, product.price, product.discount FROM product, category WHERE category.name = "' + categoryName + '" AND product.category = category.id ORDER BY product.name '+orderByName+' LIMIT ' + start + ',' + LIMIT + '';




    let totalPages = 0;
    pool.query('SELECT COUNT(product.id) AS numberOfProducts FROM product, category WHERE category.name = "' + categoryName + '" AND product.category = category.id', (err, data) => {
        if (err) console.log(err);
        totalPages = data[0].numberOfProducts / LIMIT;


        pool.query(q, (err, data) => {
            if (err) res.send('Ha ocurrido un error en el servidor, por favor contacte con el administrador.');
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
    const orderByName = req.query.name ? req.query.name : 'ASC';

    const q = 'SELECT product.name, product.url_image, product.price, product.discount FROM product WHERE product.name LIKE "%' + productName + '%" ORDER BY product.name '+orderByName+'';
    pool.query(q, (err, data) => {
        if (err) res.send('Ha ocurrido un error en el servidor, por favor contacte con el administrador.');
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