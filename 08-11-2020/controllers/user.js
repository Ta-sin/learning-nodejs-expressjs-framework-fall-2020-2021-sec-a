const express = require ('express');
const router = express.Router();

router.get('*', (req, res, next)=>{
  if(req.cookies['uname'] == null){
    res.redirect('/login');
  }else{
    next();
  }
});

router.get('/create', (req, res)=>{
  res.render('user/create');
});


router.post('/create', (req, res)=>{
  res.send('New user info:'+
  "<br> Username: "+req.body.username+
  "<br> Password: "+req.body.password+
  "<br> Email: "+req.body.email);
});


router.get('/edit/:id', (req, res)=>{

  var user = {
    username: 'test',
    password: 'test',
    email: 'abc@gmail.com'
  };
  res.render('user/edit', user);
});

router.post('/edit/:id', (req, res)=>{
res.redirect('/home/userlist');
});

router.get('/delete/:id', (req, res)=>{
  var user = {username: 'tasin', password: '123', email: 'email@gmail.com'};
  res.render('user/delete', user);
});

router.post('/delete/:id', (req, res)=>{
//check its username or uname
  res.redirect('/home/userlist');
});


module.exports = router;
