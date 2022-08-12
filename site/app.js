const express = require('express')
const path = require('path')
const app = express()
const port = 3030


let indexrouters = require('./routers/index');
let productsrouters = require('./routers/products');
let usersrouters = require('./routers/users');
let adminrouters = require('./routers/admin');

app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs')

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/',indexrouters)
app.use('/usuario',usersrouters)
app.use('/productos',productsrouters)
app.use('/admin',adminrouters)




app.listen(port,() => console.log(`Se levantó con éxito el servidor en http://localhost:${port}`))




