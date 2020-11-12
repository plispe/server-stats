const path = require('path')
const express = require('express')
const app = express()
app.use(express.static(path.join(__dirname, '/public')))

const {HTTP_SERVER_PORT: port = 3001} = process.env
app.get('/api', (req, res) => {
    res.send('API call')
})
app.listen(port, () => {
    console.log(`HTTP server listening at http://localhost:${port}`)
})