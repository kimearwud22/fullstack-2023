const db = require('../db');
//get data pelanggan
exports.getpelanggan = (req, res) => {
    db.query('SELECT * FROM pelanggan', (err, rows) => {
        if (err) throw err;
        res.status(200).json({
            message: 'Data get pelanggan',
            data: rows
        });
    });
}
//post data pelanggan
exports.createpelanggan = (req, res) => {
    const {id, nama, alamat, nohp, durasi, keterangan} = req.body;
    const data = {id, nama, alamat, nohp, durasi, keterangan};
    const sql = 'INSERT INTO pelanggan SET ?';
    db.query(sql, data, (err, result) => {
        if (err){
            console.log(err);
        }else{
            res.status(200).json({
                message: 'Data post pelanggan',
                data: result
            });
        }
    }); 
}

//put data pelanggan
exports.updatepelanggan = (req, res) => {
    const pelangganId = req.params.id;
    const pelangganData = req.body;
    const sql = 'UPDATE pelanggan SET ? WHERE id = ?';
    const data = [pelangganData, pelangganId];
    db.query(sql, data, (err, result) => {
        if (err){
            console.log(err);
        }else{
            res.status(200).json({
                message: 'Data put pelanggan',
                data: result
            });
        }
    });
}

//delete data pelanggan
exports.deletepelanggan = (req, res) => {
    const pelangganId = req.params.id;
    const sql = 'DELETE FROM pelanggan WHERE id = ?';
    db.query(sql, pelangganId, (err, result) => {
        if (err){
            console.log(err);
        }else{
            res.status(200).json({
                message: 'Data delete pelanggan',
                data: result
            });
        }
    });
}

