var express = require('express')
var app = express()
var port = 3000

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/first', (req, res) => {
    res.render('pages/first', { title: 'First page' })
})

app.get('/second', (req, res) => {
    res.render('pages/second', { title: 'Second page' })
})

app.get("*", (req, res) => {
    res.status(404).send('Page not Found')
});

app.listen(port, (error) => {
    if (error) console.log(error)
    console.log('Server init on: http://localhost:' + port + '/')
})