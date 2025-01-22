const {getProductsData, getProductIdData, udpdateProductData, deleteProductData, createProductData} = require('./../Database/Queries.js');

const getProducts = (req, res) =>{
    console.log("Inside getProduct");
    getProductsData((err, data) => {
        if (err) 
            return res.status(500).send({"Error":  err});
        return res.status(200).json(data);
    });
};

const getProductsById = (req, res) =>{
    console.log("Inside getProductById");
    getProductIdData(req.params.id, (err, data) => {
        if (err) 
            return res.status(500).send({"Error":  err});
        return res.status(200).json(data);
    });
};

const createProduct = (req, res) =>{
    const data = {
        name: req.body.name,
        price :  req.body.price,
        description : req.body.description, 
        category_id : req.body.category, 
    };
    createProductData(data, (err, result) => {
        if (err) 
            return res.status(500).send({"Error":  err});
        return res.status(200).json({ message:'Category created successfully' });
    });
};

const updateProduct = (req, res) =>{
    console.log("Inside updateProduct");
    const data = {
        name: req.body.name,
        price :  req.body.price,
        description : req.body.description, 
        category_id : req.body.category, 
    };
    udpdateProductData(req.params.id, data, (err, result) => {
        if(err) 
            return res.status(500).send({"Error":  err});
        return res.status(200).json({ message: 'Updated successfully' });
    });
};

const deleteProduct = (req, res) =>{
    console.log("Inside deleteProduct");
    deleteProductData(req.params.id, (err, result) => {
        if(err) 
            return res.status(500).send({"Error":  err});
        return res.status(200).json({ message: 'Deleted successfully' });
    });
};

module.exports = {getProducts, getProductsById, createProduct, updateProduct, deleteProduct};