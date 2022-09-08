const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/trang-chu', (req, res) => {
    res.send('Tin tức trong ngày')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})