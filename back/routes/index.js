const router = require("express").Router();
const artiste = require('./artiste');

router.use('/artiste', artiste);

module.exports = router;