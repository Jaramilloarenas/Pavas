
const {getCategoryData, getCategoryIdData, createCategoryData, udpdateCategoryData, deleteCategoryData} = require('./../Database/Queries.js');

const getCategories = async (req, res) =>{
    getCategoryData((err, data) => {
        if (err) 
            return res.status(500).send({"Error":  err});
        return res.status(200).json(data);
    });
};

const getCategoryById = (req, res) =>{
    console.log("Inside getCategoryById");
    getCategoryIdData(req.params.id, (err, data) => {
        if (err) 
            return res.status(500).send({"Error":  err});
        return res.status(200).json(data);
    });
};

const createCategory = (req, res) =>{
    console.log("Inside createCategory");
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
    console.log("Inside updateCategory");
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
    deleteCategoryData(req.params.id, (err, result) => {
        if(err) 
            return  res.status(500).send({"Error":  err});
        return res.status(200).json({ message: 'Deleted successfully' });
    });
};

module.exports = {getCategories, getCategoryById, createCategory, updateCategory, deleteCategory};