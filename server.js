const express = require('express')
const board = require('./board.json')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/board', (req, res)  => {
  res.send(board)
})

app.listen(port,  () => {
  console.log(`Example app listening on port ${port}!`)
})