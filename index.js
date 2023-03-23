const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4001;

app.use(express.static('public'));
app.use(express.json());

const commentRoutes = require('./routes/comments')
app.use(commentRoutes)

const contactRoutes = require('./routes/contacts')
app.use(contactRoutes)

const productRoutes = require('./routes/products')
app.use(productRoutes)

const vehicleRoutes = require('./routes/vehicles')
app.use(vehicleRoutes)

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});