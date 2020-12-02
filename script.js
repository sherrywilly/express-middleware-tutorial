const express = require('express')
const app = express()
const Token = require('./middleware/Token')
const Validation = require('./middleware/Validation')

const Middleware = [Token,Validation]


// loads for all routes
app.use(Dategen)


const token = "123"

//middleware implemented with spread operator
app.get('/',[...Middleware],(req,res)=>{
    console.log("user logined success fully")
res.send("success")
})

//defining date genarate function
function Dategen(req,res,next){
    console.log(req.url)
    console.log(new Date)
    next()
}


const PORT = process.env.PORT||3002;

app.listen(PORT,()=>{
    console.log(`server is running in ${PORT}`)
})