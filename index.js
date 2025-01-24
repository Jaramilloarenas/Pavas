const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes.js');

const errorMiddleware = require('./middlewares/errorMiddleware.js');

const app = express();
const port = process.env.PUERTO || 3000;
app.use(express.json());
app.use("/api", routes);

app.use(errorMiddleware);
  

app.delete("/", (req, res) => {
    res.send({"message": "index"});
});

app.listen(port, () => {
    console.log("Server working at port:", port);
  });