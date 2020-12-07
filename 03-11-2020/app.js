//decleration
//npm init   save all the decleration files in a file called package.json
//npm i express --save
//shob ek shaathe update korboh kivabey "npm install"
//npm init -y shortcut e shob gula file niye nibey
//npm i cookie-parser
const express          = require('express');
//const ejs = require('ejs');
const bodyParser       = require('body-parser');
const exSession        = require('express-session');
const cookieParser     = require('cookie-parser');

const login            = require('./controllers/login');
const home             = require('./controllers/home');
const logout           = require('./controllers/logout');
const user             = require('./controllers/user');
const app              = express();
const port             = 3000;

//config
app.set('view engine', 'ejs');



//middleware
//urlencoded maaney url er through tey data gula jaabey
//true means aami chailey json o nitey paarboh
//false maaney shudhu json o nitey paarboh
//secret e ja chai ditey paarboh eita encryption er jnnoh jatey hacker na pai
//saveUninitialized= prottekbar jeita deewa ache oita use korboh naaki notun
//true means overwrrite kora possible
//resave hocche prottekbar session e value create korar shomoy ki notun object create korboh?
//false maaney hocche bar bar create korboh nah
app.use('/assets', express.static('assets'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(exSession({secret:'my top secret value', saveUninitialized: true, resave: false}));
app.use(cookieParser());
app.use('/login', login);
app.use('/home', home);
app.use('/logout', logout);
app.use('/user', user);


//router
app.get('/', (req, res)=>{
  res.send('welcome');
});


//server startup
app.listen(3000, (error)=>{
  console.log('server started at'+port);
});


//url design
//adding middleware to app.js
//creating controller/router  example router.get(), router.post()
//creating views
//sending response -> json, ejss
