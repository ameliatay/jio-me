const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors(
    {
        origin: ["https://letsgo.vercel.app", "http://localhost:3000"],
        methods: ['POST', 'GET'],
        credentials: true
    }
))
app.use(express.json())

mongoose.connect('mongodb+srv://ameliataylijia:test123@cluster0.hkcpq4w.mongodb.net/letsgo?retryWrites=true&w=majority')

const EventRoute = require('./routes/Event')
app.use('/event',EventRoute)

app.listen(3001, console.log('Server is running on PORT 3001'))