const express = require('express')
const mongoose = require('mongoose')
const homeRoutes = require('./routes/userRoutes')
const path  = require('path')
require('dotenv').config()
const app = express()
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
const cookieParser = require('cookie-parser')
app.use(cookieParser())

const DB_KEY = process.env.DB_KEY
const PORT = process.env.PORT

mongoose.connect(DB_KEY,{
    useNewUrlParser: true,
    useUnifiedTopology: true

})

let db = mongoose.connection

db.on('error',() => {{console.log(`Can't load the Data Base !`)}})
db.once('open', () => {console.log(`Data Base Loaded !`)})

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'templates'))


app.use('/', homeRoutes)

app.listen(PORT || 4552, () => {console.log(`App running on PORT: ${PORT}`)})