const express = require('express');
const bodyParser = require('body-parser');
const {getProducts, getProductsById, createProduct, updateProduct, deleteProduct} = require('./Controllers/ProductController.js');
const {getCategories, getCategoryById, createCategory, updateCategory, deleteCategory} = require('./Controllers/CategoryController.js');
const app = express();
const port = process.env.PUERTO || 3000;
app.use(express.json());

app.get("/products", getProducts);
app.get("/products/:id", getProductsById);
app.post("/products", createProduct);
app.put("/products/:id", updateProduct);
app.delete("/products/:id", deleteProduct);

app.get("/categories", getCategories);
app.get("/category/:id", getCategoryById);
app.post("/category", createCategory);
app.put("/category/:id", updateCategory);
app.delete("/category/:id", deleteCategory);

app.delete("/", (req, res) => {
    res.send({"message": "index"});
});


app.listen(port, () => {
    console.log("Server working at port:", port);
  });