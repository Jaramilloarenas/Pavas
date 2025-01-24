
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

module.exports = {getCategoryData, getCategoryIdData, createCategoryData, udpdateCategoryData, deleteCategoryData}