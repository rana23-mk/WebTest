
const express = require('express');
const app = express();
const storeInfo = require('./data');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/customers', (req, res) => {
  res.render('customers', { users: storeInfo.customers });
});

app.get('/inventory', (req, res) => {
  res.render('inventory', { products: storeInfo.inventory });
});

app.get('/inventory-filtered', (req, res) => {
  const filteredProducts = storeInfo.inventory.filter(item => item.productID > 20);
  res.render('inventory_filtered', { products: filteredProducts });
});

app.use(express.static('public'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
