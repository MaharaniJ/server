const http = require('http')

const port = process.env.PORT || 1337

const server = http.createServer(function (req, res){
    res.end('Hello Guvi members, welcome to BW41-WD batch.');
})

server.listen(port);
console.log(`server listening on port $(port)`)