const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Chú trọng đẹp trai thế nhỉ? Ma sao thang debug no eo chay ta?')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})