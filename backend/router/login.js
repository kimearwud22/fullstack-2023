const db = require('../db');
const express = require('express')
const router = express.Router()
router.use(express.urlencoded({extended: true}));
router.use(express.json())

router.post('/login', (req, res) => {
    const {username, password} = req.body;
    db.query(
        'SELECT * FROM login WHERE username = ? AND password = ?',
        [username, password],
        (err, result) => {
            if (err) throw err;
            if (Array.isArray(result) && result.length > 0) {
                req.session.loggedin = true;
                req.session.username = username;
                res.send({
                    status: 200,
                    message: 'Login success'
                })
            } else {
                res.send({
                    status: 400,
                    message: 'Incorrect username or password'
                })
            }
        }
    )
})


module.exports = router;