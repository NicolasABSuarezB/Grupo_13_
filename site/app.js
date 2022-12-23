require('dotenv').config()


const express = require('express')
const path = require('path')
const methodOverrive= require('method-override')
const app = express()
const session = require('express-session')
const cookie = require('cookie-parser')
const userLogin = require('./middlewares/userlogin.js')
const port = 3030


let indexrouters = require('./routers/index');
let productsrouters = require('./routers/products');
let usersrouters = require('./routers/users');
let adminrouters = require('./routers/admin');
const apiRouter = require('./routers/api/prueba');
const apiRouter2 = require('./routers/api/prueba2');
const productos = require('./routers/api/productos');
const apiCarrito = require('./routers/api/caritto');

app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookie());

app.use(session({
    secret: "La Comision 17"
  }))
  
  app.use(userLogin)

app.use(methodOverrive('_method'))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/',indexrouters)
app.use('/',usersrouters)
app.use('/',productsrouters)
app.use('/admin',adminrouters)
app.use('/api',apiRouter);
app.use('/api',apiRouter2);
app.use('/api',productos);
app.use('/api',apiCarrito);



app.listen(port,() => console.log(`Se levantó con éxito el servidor en http://localhost:${port}`))




