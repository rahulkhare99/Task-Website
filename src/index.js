const express = require('express');
require('./db/mongoose')
const app = express()
const port = process.env.PORT || 3000
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const myFunction = async () => {
    const token = jwt.sign({ _id: 'abc123' }, 'thisismynewproject', { expiresIn: '7 days'})
    const data = jwt.verify(token, 'thisismynewproject')
}

myFunction()

const Task = require('./models/tasks')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('5ffae7d463a0cb0eb031b6d2')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner);
    const user = await User.findById('5ffae79c63a0cb0eb031b6cf')
    await user.populate('tasks').execPopulate()
}

main()