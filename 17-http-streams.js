var http = require('http')
var fs = require('fs')

http
    .createServer(function (req, res) {
        // const text = fs.readFileSync('./content/big.txt', 'utf-8')
        // res.end(text)
        const fileStream = fs.createReadStream('./content/big.txt', 'utf-8')
        fileStream.on('open', () => {
            fileStream.pipe(res) //pushing from the read stream into the write stream, instead of sending the file in one large instance we are sending it back into chunked
        })
        fileStream.on('error', (err) => {
            res.end(err)
        })
    })
    .listen(5000)