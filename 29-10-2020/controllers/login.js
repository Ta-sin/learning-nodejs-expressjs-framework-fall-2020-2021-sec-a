const express = require ('express');
const router = express.Router();


router.get('/', (req, res)=>{
  res.render('login/index');

});

router.post('/', (req, res)=>{


//console.log(req.body.username);
//console.log(req.body.pass);

   if(req.body.username == req.body.password){
     res.redirect('/home');
   }else{
     res.redirect('/login');
   }
});


module.exports = router;
