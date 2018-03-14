const express = require('express');

let app = express();

app.use(express.static(__dirname + '/public'))

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.listen(3000, () => {
  console.log('App started at port 3000')
})
