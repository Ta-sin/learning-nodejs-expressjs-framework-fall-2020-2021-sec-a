//declaration
const express     = require('express');
const login       = require('./controller/login');
const home        = require('./controller/home');
const logout      = require('./controller/logout');
//dynamic page render known as view engine 'npm i ejs'
//const ejs = express('ejs'); //config this
const app = express();






//configuration
app.set('view engine', 'ejs');//change in routing


//middleware controller directory
app.use('/login', login);
app.use('/home', home);
app.use('/logout', logout);

//routing controller directory
app.get('/', (request, response)=>{
  response.send('This is index page');
});

//get post rqst goes to controller




//server startup
app.listen(3000, (error)=>{
  console.log('express server started at 3000 port');
});
