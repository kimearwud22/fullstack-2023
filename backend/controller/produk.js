//controller produk
const db = require('../db');

//get data produk
exports.getproduk = (req, res) => {
    db.query('SELECT * FROM produk', (err, rows) => {
        if (err) throw err;
        res.status(200).json({
            message: 'Data get produk',
            data: rows
        });
    });
}

//get data produk by id
exports.getprodukbyid = (req, res) => {
    const produkId = req.params.id;
    const sql = `SELECT * FROM produk WHERE id = ${produkId}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).json({
            message: 'Data get produk by id',
            data: result
        });
    });
}

//post produk
exports.postproduk = (req, res) => {
    const {kd_produk, nama_produk, harga} = req.body;
    const sql = `INSERT INTO produk (kd_produk, nama_produk, harga) VALUES ('${kd_produk}', '${nama_produk}', '${harga}')`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(201).json({
            message: 'Data post produk',
            data: result
        });
    }
    );
}

//put produk
exports.putproduk = (req, res) => {
    const produkId = req.params.id;
    const {kd_produk, nama_produk, harga} = req.body;
    const sql = `UPDATE produk SET kd_produk = '${kd_produk}', nama_produk = '${nama_produk}', harga = '${harga}' WHERE id = ${produkId}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).json({
            message: 'Data put produk',
            data: result
        });
    });
}

//delete produk
exports.deleteproduk = (req, res) => {
    const produkId = req.params.id;
    const sql = `DELETE FROM produk WHERE id = ${produkId}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).json({
            message: 'Data delete produk',
            data: result
        });
    });
}
