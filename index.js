const express = require('express');
const app = express()
const port = 8000;

app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'ejs');
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap


app.get('', (req, res) => {
    res.render('index', { text: '' })
})

app.get('/about', (req, res) => {
   res.sendFile(__dirname + '/views/about.html')
})



app.listen(port, ()=> console.info(`App is listening on port ${port}`))
