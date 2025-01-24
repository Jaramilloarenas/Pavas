const {getProductsData, getProductIdData, udpdateProductData, deleteProductData, createProductData, } = require('./../Database/Queries.js');
const {getEntityData} = require('../Database/QueriesV2.js');
const {validateDataProduct, validateId} = require('./../utils/validation.js')

const messageEmptyFields = "No se han proporcionado todos los datos para procesar la solicitud";
const message = "No ha proporcionado un id de producto para consultar";

const getProducts = (req, res) =>{
    console.log("Inside getProduct");
    getProductsData((err, data) => {
        if (err) 
            return res.status(500).send({"Error":  err});
        return res.status(200).json(data);
    });
};

const getProductsById = (req, res) =>{
    if(!validateId(req.params))
        return res.status(400).json({"message" : message});
    getProductIdData(req.params.id, (err, data) => {
        if (err) 
            return res.status(500).send({"Error":  err});
        return res.status(200).json(data);
    });
};

const createProduct = (req, res) =>{
    if(!validateDataProduct(req.body))
        return res.status(400).json({"message" : messageEmptyFields});
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
    if(!validateId(req.params))
    return res.status(400).json({"message" : message});
    if(!validateDataProduct(req.body))
        return res.status(400).json({"message" : messageEmptyFields});
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
    if(!validateId)
        return res.status(400).json({"message" : message});
    deleteProductData(req.params.id, (err, result) => {
        if(err) 
            return res.status(500).send({"Error":  err});
        return res.status(200).json({ message: 'Deleted successfully' });
    });
};

/*endpoint de prueba*/
const testQueriesV2 = (req, res) =>{
    console.log("Inside Test");
    try{
        getEntityData("Caterorias", (err, data) => {
            if (err) 
                throw err;
            return res.status(200).json(data);
        });
    }
    catch(ex){
        return res.status(500).json({"error" : true, "message" : "Error al realizar la consulta: " + ex});;
    }
};

module.exports = {getProducts, getProductsById, createProduct, updateProduct, deleteProduct, testQueriesV2};