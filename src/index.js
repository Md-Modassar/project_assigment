const express=require('express')
const mongoose=require('mongoose')
const app=express();

app.use(express.json())

mongoose.connect('mongodb+srv://modassar123:modassar1234@test.ahxnnau.mongodb.net/bonsoproject', {
    useNewUrlParser: true
}, mongoose.set('strictQuery', false))
    .then(() => console.log("mongoose is connected"))
    .catch(err => console.log(err))

app.listen(3000,()=>{
     console.log('sever running 3000')
 })



