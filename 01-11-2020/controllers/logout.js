const express = require ('express');
const router = express.Router();


router.get('/', (req, res)=>{
  res.cookie['username'] = "";
  res.redirect('/login');
});


module.exports = router;
