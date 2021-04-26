const Express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = Express()

const dotenv = require('dotenv');
dotenv.config();

app.use(cors())
app.use(bodyParser())
app.use(require('./routes/api'))

console.log("listening on port: " + process.env.PORT)
app.listen(process.env.PORT);


