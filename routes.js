const express = require('express');
const router = express.Router();
const {getProducts, getProductsById, createProduct, updateProduct, deleteProduct, testQueriesV2} = require('./Controllers/ProductController.js');
const {getCategories, getCategoryById, createCategory, updateCategory, deleteCategory} = require('./Controllers/CategoryController.js');

router.get("/products", getProducts);
router.get("/products/:id", getProductsById);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

router.get("/all-products", testQueriesV2);

router.get("/categories", getCategories);
router.get("/category/:id", getCategoryById);
router.post("/category", createCategory);
router.put("/category/:id", updateCategory);
router.delete("/category/:id", deleteCategory);

router.use((req, res, next) => {
    res.status(404).send('Página no encontrada');
  });

module.exports = router;