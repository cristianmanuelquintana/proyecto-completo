const express = require('express')
const router = express.Router();
const sqlCon = require('../utils/conection');

// Verbos http -> get / post / etc...
router.get('/', function(req,res){
    // send -> string
    // render -> archivos
    //res.send("Esta la seccion contacto!")
    res.render('contact.hbs',{title:"Contacto"});
})

router.post('/', (req, res) => {
    console.log('error')
    const persona = req.body;
    if (!persona.nombre) {
      return res.render('error');
    }
    
    //TODO: este codigo es vulnerable a sql injections, googlear como hacer consultas seguras con mysql2
    sqlCon.query(`
      INSERT INTO \`contactosproyecto\` (\`nombre\`, \`mail\`) 
      VALUES ('${persona.nombre}', '${persona.mail}');
      `,
      (err, result) => {
        if (err) {
          console.error(error);
          return res.render('error');
        }
        console.log(result);
        res.jsonp({success : true})
        //res.render('success', { nombre: persona.nombre, result });
      }
    );
  });

module.exports = router