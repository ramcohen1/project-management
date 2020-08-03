const express = require('express')
require('./db/mongoose')

const projectRouter = require('./routers/project')
const taskRouter = require('./routers/task')
const workerRouter = require('./routers/worker')

const app = express()

app.use(express.json())
app.use(projectRouter)
app.use(taskRouter)
app.use(workerRouter)

module.exports = app