//declaration
const express  = require('express');
const router   = express.Router(); //only routing capability thaakbey

router.get('/', (request, response)=>{
  //render use korsi jatey views e file khujey pai
    response.render('login/index');
});

router.post('/', (request, response)=>{
//response.render('login/index');
response.redirect('/home');
});

//use for make it public
module.exports = router;
