const express = require('express');
const app = express()
const path = require('path')
const port = 3030;

app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/home.html"))
})
app.get('/register', (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/register.html"))
})

app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/login.html"))
})

app.get('/home', (req, res)=>{
    res.redirect('/')
})








app.listen(port, ()=> console.log(`htt://localhost: ${port}`))