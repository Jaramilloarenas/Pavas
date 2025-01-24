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

module.exports = {getProductsData,getProductIdData,createProductData,udpdateProductData,deleteProductData};


