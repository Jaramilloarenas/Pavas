const db = require('../Config/database.js')

const getEntityData = (entity, callback) => {
    db.query(`SELECT * FROM ${entity}`, callback);
};

const getEntityIdData = (entity, id, callback) => {
    console.log("Identifier", id)
    db.query(`SELECT * FROM ${entity} WHERE id = ?`, [id], callback);
};

const createEntityData = (entity, data, callback) => {
    let res = "";
    db.query(`INSERT INTO ${entity} SET ?`, data, callback);
};  

const udpdateEntityData = (entity, id, data, callback) => {
    db.query(`UPDATE ${entity} SET ? WHERE id = ?`, [data, id], callback);
};

const deleteEntityData = (entity, id, callback) => {
    db.query(`DELETE FROM ${entity} WHERE id = ?`, [id], callback);
};

module.exports ={getEntityData, getEntityIdData, createEntityData, udpdateEntityData, deleteEntityData}
