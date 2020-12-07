//declaration
const express  = require('express');
const router   = express.Router();

router.get('/', (request, response)=>{
  var user = {name: 'alamin', id: '12112'};
  response.render('home/index', user); //create view folder
});


module.exports = router;
