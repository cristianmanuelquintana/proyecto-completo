var express = require('express');
var router = express.Router();
const sqlCon = require('../utils/conection');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'Acerca de mi' });
});


module.exports = router;

