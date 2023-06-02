const db = require('../db');

//get data testimoni
exports.gettestimoni = (req, res) => {
    db.query('SELECT * FROM testimoni', (err, rows) => {
        if (err) throw err;
        res.status(200).json({
            message: 'Data get testimoni',
            data: rows
        });
    });
}

//get data testimoni by id
exports.gettestimonibyid = (req, res) => {
    const testimoniId = req.params.id;
    const sql = `SELECT * FROM testimoni WHERE id = ${testimoniId}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).json({
            message: 'Data get testimoni by id',
            data: result
        });
    });
}

// get data testimoni multiple join table
exports.gettestimonimultiple = (req, res) => {
    //testimoni join tabel pelanggan {isi testimoni = judul, isi}
    db.query('SELECT testimoni.id, testimoni.judul, testimoni.isi, pelanggan.nama FROM testimoni JOIN pelanggan ON testimoni.id_pelanggan = pelanggan.id', 
    (err, rows) => {
        if (err) throw err;
        res.status(200).json({
            message: 'Data get testimoni multiple',
            data: rows
        });
    }
    );
}