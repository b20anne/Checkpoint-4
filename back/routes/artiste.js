const router = require ('express').Router();
const connection = require('../db_connection');


router.get('/', (req,res) => {
    const sql= 'SELECT * FROM artiste JOIN album ON artiste.album_id=album.id JOIN concert ON artiste.concert_id=concert.id ORDER BY artiste.nom DESC';
    connection.query(sql, (err, result)=> {
        if (err) {
            res.status(500).json({ errorMessage: 'Error 500' });
          } else {
            res.status(200).json(result);
          }
    });
});

module.exports = router;