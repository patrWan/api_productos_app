const pool  = require('../database/mysql');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {

    const q = 'SELECT * FROM product';

    pool.query(q, (err, data) => {
        if (err) console.log(err);
        res.send({data});
    });

    
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res) => { }

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    const { body } = req

    res.send({ data });
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