const db = require('./../Config/database.js')

const getCategoryData = (callback) => {
    db.query('SELECT * FROM Caterorias', callback);
};

const getCategoryIdData = (id, callback) => {
    console.log("Identifier", id)
    db.query('SELECT * FROM Caterorias WHERE id = ?', [id], callback);
};

const createCategoryData = (data, callback) => {
    let res = "";
    db.query('INSERT INTO Caterorias SET ?', data, callback);
};

const udpdateCategoryData = (id, data, callback) => {
    db.query('UPDATE Caterorias SET ? WHERE id = ?', [data, id], callback);
};

const deleteCategoryData = (id, callback) => {
    db.query('DELETE FROM Caterorias WHERE id = ?', [id], callback);
};


const getProductsData = (callback) => {
    db.query('SELECT * FROM Productos', callback);
};

const getProductIdData = (id, callback) => {
    db.query('SELECT * FROM Productos WHERE id = ?', [id], callback);
};

const createProductData = (data, callback) => {
    let res = "";
    db.query('INSERT INTO Productos SET ?', data, callback);
};

const udpdateProductData = (id, data, callback) => {
    db.query('UPDATE Productos SET ? WHERE id = ?', [data, id], callback);
};

const deleteProductData = (id, callback) => {
    db.query('DELETE FROM Productos WHERE id = ?', [id], callback);
};

module.exports = {
    getCategoryData, 
    getCategoryIdData, 
    createCategoryData, 
    udpdateCategoryData, 
    deleteCategoryData, 
    getProductsData,
    getProductIdData,
    createProductData,
    udpdateProductData,
    deleteProductData
}