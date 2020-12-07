const express = require ('express');
const router = express.Router();


  router.get('/', (req, res)=>{


/*  if(req.body.username != ""){
    res.redirect('home/index', {name: 'tasin', id: '123'});
  }else{
    res.redirect('/login');
  }
*/
//check its username or uname
  if(req.cookies['uname'] != ""){
    res.render('home/index', {name: 'tasin', id: '123'});
  }else{
    res.redirect('/login');
  }

});


router.get('/userlist', (req, res)=>{
  if(req.cookies['uname'] != ""){

    var students = [
      ['1', 'tasin', 'email@gmail.com', '123'],
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
