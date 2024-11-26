require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('shivanidotcom')
})

app.get('/login',(req,res)=>{
    res.send('<h1>hello shivani </h1>')
})
app.get('/loginsignup',(req,res)=>{
    res.send('<h1>Login has done....</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})