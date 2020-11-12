const express = require('express')
const app = express()

const {REACT_HOTRELOAD_SERVER_PORT: port = 3000} = process.env
app.get('/', (req, res) => {
    res.send('React.js hotreload server')
})
app.listen(port, () => {
    console.log(`React.js hotreload server listening at http://localhost:${port}`)
})