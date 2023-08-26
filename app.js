const express = require('express');
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')));

const start = () => {
    app.listen(PORT, () => {
        console.log('http://localhost:3000/')
    })
}
start()