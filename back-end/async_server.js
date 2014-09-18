var app = require('express')()

function the_callback (req, res) {
    res.sendFile('index.html')
}

app.get('/', the_callback)

app.get('/jquery', function (request, response) {
    response.sendFile('jquery.min.js')
})

app.post('/route', function (req, res) {
    res.send('heres some data')
})

app.listen(3000)