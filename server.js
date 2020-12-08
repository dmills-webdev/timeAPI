const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get(
  '/', function(req, res) {
    const currentTime = Date.now().toString()
    res.send(currentTime)
  }
)

const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log(`timeAPI server listening on ${PORT}!`)
})
