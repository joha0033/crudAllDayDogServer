const express = require('express')
const app = express()
const dogs = require('./routes/breed_router')
const port = process.env.PORT || 3000

app.use(dogs)

app.listen(port, () => {
    console.log("listening on port " + port);
  })
