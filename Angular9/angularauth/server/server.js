const express = require('express')

const PORT = 3000
const api = require('./routes/api')

const app = express()
app.use(express.json())

//localhost:3000 === /
//localhost:3000/api === /api
app.use('/api', api)
app.get('/', (req, res)=>{
    res.send("Hello From Server")
})

app.listen(PORT, function(){
    console.log(`Server Running on localhost:${PORT}`)
})