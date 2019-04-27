const express = require('express')
const app = express()
const port = 9080

app.get('/', (req, res) =>
  res.send('Greetings from yuwanut...')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
