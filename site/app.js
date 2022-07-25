const express = require('express')
const path = require('path')
const app = express()
const port = 3030

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req,res) => res.sendFile(path.resolve(__dirname,'views', 'index.html')))
app.get('/detalle',(req,res) => res.sendFile(path.resolve(__dirname,'views', 'detalle.html')))
app.get('/login', (req,res)=> res.sendFile(path.resolve(__dirname,'views', 'login.html')))
app.get('/register', (req,res)=> res.sendFile(path.resolve(__dirname,'views', 'register.html')))
app.get('/carrito', (req,res)=> res.sendFile(path.resolve(__dirname,'views', 'carrito.html')))


app.listen(port,() => console.log(`Se levantó con éxito el servidor en http://localhost:${port}`))

