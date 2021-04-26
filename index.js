const Express = require('express')
const bodyParser = require('body-parser')

const app = Express()

const dotenv = require('dotenv');
dotenv.config();

app.use(bodyParser())
app.use(require('./routes/api'))
app.use(require('./routes/blink'))

console.log("listening on port: " + process.env.PORT)
app.listen(process.env.PORT);