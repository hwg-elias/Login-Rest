const express = require('express')
const mongoose = require('mongoose')
const homeRoutes = require('./routes/userRoutes')
const path = require('path')
require('dotenv').config()
const app = express()
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
const cookieParser = require('cookie-parser')
app.use(cookieParser())

const DB_KEY = process.env.DB_KEY
const PORT = process.env.PORT

mongoose.connect(DB_KEY)

const db = mongoose.connection

db.once('error', () => { console.log(`DataBase wasn't load!`) })
db.once('open', () => {
    app.use('/', homeRoutes)

    app.listen(PORT || 4552, () => { console.log(`App running on PORT: ${PORT}`) })
})

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'templates'))
