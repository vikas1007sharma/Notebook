const express = require('express')
const mongoose = require('mongoose')

const app = express()
mongoose.connect(url).then().catch()
const userSchema = new mongoose.Schema({});
const User = mongoose.model('user', userSchema)


app.use(express.urlencoded({extended: false}))

app.get('/', async (req, res)=>{
    const user = await User.findByIdAndDelete(req.params.id)
    return res.send("Home page")
})

app.listen(8000, ()=>{
    console.log("Running on 8000")
})
