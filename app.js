const express = require('express')
const path = require('path')
const app = express()
const port = 3030

app.use(express.static(path.join(__dirname, 'public')))

app.get('/home', (req,res) => res.sendFile(path.resolve(__dirname,'views', 'index.html')))

app.listen(port,() => console.log('Se levantó con éxito el servidor en http://localhost:${port}'))