// crud express untuk frontend input data rental laptop conect to dummy json dengan model, controller and router
// import express
const express = require('express');
const app = express();
const cors = require('cors');
const routerPelanggan = require('./router/pelanggan');
const routerAdmin = require('./router/admin');
const routerTestimoni = require('./router/testimoni');
const routerProduk = require('./router/produk')
const routerLogin = require('./router/login')

//authentication
const session = require('express-session');


app.use(session({
    secret: 'ayinapp',
    resave: false,
    saveUninitialized: false
}));
app.use(express.json());
app.use(cors());
app.use('/api', routerPelanggan);
app.use('/api', routerAdmin);
app.use('/api', routerTestimoni);
app.use('/api', routerProduk);
app.use('/api', routerLogin);

app.listen('3002', () => {
    console.log('Server started on port 3002');
});  