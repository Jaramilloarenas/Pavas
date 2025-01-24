const {getCategoryData, getCategoryIdData, createCategoryData, udpdateCategoryData, deleteCategoryData} = require('./../Database/CategoryQueries.js');
const {validateDataCategory, validateId} = require('./../utils/validation.js')

const messageEmptyFields = "No se han proporcionado todos los datos para procesar la solicitud";
const message = "No ha proporcionado un id de producto para consultar";


const getCategories = async (req, res) =>{
    console.log("Inside Category");
    getCategoryData((err, data) => {
        if (err) 
            return res.status(500).send({"Error":  err});
        return res.status(200).json(data);
    });
};

const getCategoryById = (req, res) =>{
    if(!validateId(req.params))
        return res.status(400).json({"message" : message});
    getCategoryIdData(req.params.id, (err, data) => {
        if (err) 
            return res.status(500).send({"Error":  err});
        return res.status(200).json(data);
    });
};

const createCategory = (req, res) =>{
    if(!validateDataCategory(req.body))
        return res.status(400).json({"message" : messageEmptyFields});
    const data = {
        name: req.body.name,
    };
    createCategoryData(data, (err, result) => {
        if (err) 
            return res.status(500).send({"Error":  err});
        return  res.status(200).json({ message:'Category created successfully' });
    });
};

const updateCategory = (req, res) =>{
    if(!validateId(req.params))
        return res.status(400).json({"message" : message});
    if(!validateDataCategory(req.body))
        return res.status(400).json({"message" : messageEmptyFields});
    const data = {
        name: req.body.name,
    };
    udpdateCategoryData(req.params.id, data, (err, result) => {
        if(err) 
            return  res.status(500).send({"Error":  err});
        return  res.status(200).json({ message: 'Updated successfully' });
    });
};

const deleteCategory = (req, res) =>{
    console.log("Inside deleteCategory");
    if(!validateId(req.params))
        return res.status(400).json({"message" : message});
    deleteCategoryData(req.params.id, (err, result) => {
        if(err) 
            return  res.status(500).send({"Error":  err});
        return res.status(200).json({ message: 'Deleted successfully' });
    });
};

module.exports = {getCategories, getCategoryById, createCategory, updateCategory, deleteCategory};