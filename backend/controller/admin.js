const db = require('../db');

//get data admin
exports.getadmin = (req, res) => {
    db.query('SELECT * FROM admin', (err, rows) => {
        if (err) throw err;
        res.status(200).json({
            message: 'Data get admin',
            data: rows
        });
    });
}

//get data admin by id
exports.getadminbyid = (req, res) => {
    const adminId = req.params.id;
    const sql = `SELECT * FROM admin WHERE id = ${adminId}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).json({
            message: 'Data get admin by id',
            data: result
        });
    });
}

//post data admin
exports.postadmin = (req, res) => {
    const { nama, username, password } = req.body;
    const sql = `INSERT INTO admin (nama, username, password) VALUES ('${nama}', '${username}', '${password}')`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(201).json({
            message: 'Data post admin',
            data: result
        });
    }
    );
}

//put data admin
exports.putadmin = (req, res) => {
    const adminId = req.params.id;
    const { nama, username, password } = req.body;
    const sql = `UPDATE admin SET nama = '${nama}', username = '${username}', password = '${password}' WHERE id = ${adminId}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).json({
            message: 'Data put admin',
            data: result
        });
    });
}

//delete data admin
exports.deleteadmin = (req, res) => {
    const adminId = req.params.id;
    const sql = `DELETE FROM admin WHERE id = ${adminId}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).json({
            message: 'Data delete admin',
            data: result
        });
    });
}
