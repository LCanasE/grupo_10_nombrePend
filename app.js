const express = require("express");
const path = require('path');
const app = express();
const methodOverride = require('method-override');


const mainRoutes = require('./routers/mainRoutes');
const productRoutes = require('./routers/productRoutes');
const userRoutes = require('./routers/userRoutes');

app.set('view engine', 'ejs');
app.set('views', [
    path.join(__dirname, './views/main'),
    path.join(__dirname, './views/products'),
    path.join(__dirname, './views/users')
]), 

// MIDDLEWARES 
app.use(express.urlencoded({extended: true})); // para usar los datos que llegan de los formularios
app.use(express.json()); // Para leer archivos .JSON
app.use(methodOverride('_method')); // Para usar @PUT y @DELETE
app.use(express.static("public"));

// ROUTES
app.use(mainRoutes);
app.use('/products', productRoutes);
app.use('/users', userRoutes);

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));