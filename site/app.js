const express = require('express')
const path = require('path')
const methodOverrive= require('method-override')
const cookieParser = require('cookie-parser');
const session =require('express-session')
const logger = require('morgan')
const app = express()
const port = 3030


let indexrouters = require('./routers/index');
let productsrouters = require('./routers/products');
let usersrouters = require('./routers/users');
let adminrouters = require('./routers/admin');

app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs')

const logeado= require('./middleware/chekearlogin')

app.use(session({secret:'pato'}))
app.use(logeado)
app.use(express.json())
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.urlencoded({extended:false}))

app.use(methodOverrive('_method'))
app.use(express.static(path.join(__dirname, 'public')))



app.use('/',indexrouters)
app.use('/',usersrouters)
app.use('/',productsrouters)
app.use('/admin',adminrouters)



app.listen(port,() => console.log(`Se levantó con éxito el servidor en http://localhost:${port}`))




