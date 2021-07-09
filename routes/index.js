var express = require('express');
var router = express.Router();
const sqlCon = require('../utils/conection');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Inicio' });
});


module.exports = router;


 
/* var express = require('express');
var router = express.Router();
const sqlCon = require('../utils/conection');
 */
/* GET home page. */
/* router.get('/', function(req, res, next) {
  //TODO: este codigo no deberia nunca devolver la contraseña al front
  sqlCon.query('SELECT * FROM usuarios', (err, result) => {
    if (err) {
      console.error(err);
      res.render('error');
    }
    console.log(result)
    res.render('index', { title: 'Express', persons: result });
  });
});

router.get('/new-user', (req, res) => {
  res.render('new-user');
});



router.get('/api', function(req, res) {
  res.json({ message: '' });
})

module.exports = router; */