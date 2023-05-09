const express = require('express')
const apiRouter = require('./routes/api')
const app = express()
const port = 3000

require('./db')
app.use(express.json());

app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`http//localhost:${port}`)
})