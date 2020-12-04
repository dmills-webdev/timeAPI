const express = require('express')

const app = express()

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
