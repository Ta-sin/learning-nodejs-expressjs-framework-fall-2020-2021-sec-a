const express = require ('express');
const router = express.Router();

router.get('*', (req, res, next)=>{
  if(req.cookies['uname'] == null){
    res.redirect('/login');
  }else{
    next();
  }
});

router.get('/', (req, res)=>{

//check its username or uname
  if(req.cookies['uname'] != null){
    res.render('home/index', {name: 'tasin', id: '123'});
  }else{
    res.redirect('/login');
  }

});

router.get('/userlist', (req, res, next)=>{
  if(req.cookies['uname'] == null){
    res.redirect('/login');
  }else{
    next();
  }
});

router.get('/userlist', (req, res)=>{

    var students = [
      ['1', 'tasin', 'email@gmail.com', '123'],
      ['2', 'dew', 'dew@gmail.com', '1234'],
      ['3', 'mahbuba', 'mahbub@gmail.com', '1234']
    ];
   res.render('home/userlist', {users: students});
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
