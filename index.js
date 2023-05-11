const express = require('express')
const cors = require('cors')
const apiRouter = require('./routes/api')
const app = express()
const port = 4000

require('./db')
app.use(cors())

app.use(express.json());

app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`http//localhost:${port}`)
})