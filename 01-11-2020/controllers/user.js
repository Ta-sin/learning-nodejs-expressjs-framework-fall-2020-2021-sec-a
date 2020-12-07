const express = require ('express');
const router = express.Router();


router.get('/create', (req, res)=>{

  if(req.cookies['uname'] != ""){
    res.render('user/create');
  }else{
    res.redirect('/login');
  }
});

router.post('/create', (req, res)=>{

  if(req.cookies['uname'] != ""){
    res.send('success');
  }else{
    res.redirect('/login');
  }
});

router.get('/edit', (req, res)=>{

//check its username or uname
if(req.cookies['uname'] != ""){
  res.render('user/edit');
}else{
  res.redirect('/login');
}
});

router.post('/edit', (req, res)=>{

//check its username or uname
if(req.cookies['uname'] != ""){
  res.send('Updated!');
}else{
  res.redirect('/login');
}
});

router.get('/delete', (req, res)=>{
//check its username or uname
if(req.cookies['uname'] != ""){
  var user = {username: 'tasin', password: '123', email: 'email@gmail.com'};
  res.render('user/delete', user);
}else{
  res.redirect('/login');
}
});

router.post('/delete', (req, res)=>{
//check its username or uname
if(req.cookies['uname'] != ""){
  res.send('done!');
}else{
  res.redirect('/login');
}
});




router.get('/userlist', (req, res)=>{
  if(req.cookies['uname'] != ""){

    var students = [
      ['1', 'kief', 'kief@gmail.com', '1234'],
      ['2', 'dew', 'dew@gmail.com', '1234'],
      ['3', 'mahbuba', 'mahbub@gmail.com', '1234']
    ];

  //  var data = {users: students};
    res.render('home/userlist', {users: students});
  }else{
    res.redirect('/login');
  }
});

module.exports = router;


//url design
//adding middleware to app.js
//creating controller/router  example router.get(), router.post()
//creating views
//sending response -> json, ejs
/*<%
for(var i=0; i < users.length; i++){ %>

    <tr>
      <td><%= users[i][0] %></td>
      <td><%= users[i][1] %></td>
      <td><%= users[i][2] %></td>
      <td><%= users[i][3] %></td>
    </tr>

<%  } %>
*/
