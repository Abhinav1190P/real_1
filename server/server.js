const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const app = express();

app.use(bodyparser.json());
const {User} = require('./models/usermodel')
mongoose.connect('mongodb://localhost:27017/ptr')



app.post('/api/post',(req,res)=>{

const user = new User(req.body)

user.save((err,doc)=>{
    if(err) return res.status(400).json({
        joined: false
    });
    return res.status(200).json({
        joined: true
    });
})


})



const port = process.env.PORT || 3001

app.listen(port,()=>{
    console.log('Server on Port'+ port)
})

