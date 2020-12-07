const express = require ('express');
const router = express.Router();


router.get('/', (req, res)=>{
  res.render('home/index', {name: 'tasin', id: '123'});

});



module.exports = router;


//url design
//adding middleware to app.js
//creating controller/router  example router.get(), router.post()
//creating views
//sending response -> json, ejs
