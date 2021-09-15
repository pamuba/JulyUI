const express = require('express')

const PORT = 3000

const app = express()
app.use(express.json())

app.get('/', (req, res)=>{
    res.send("Hello From Server")
})

app.listen(PORT, function(){
    console.log(`Server Running on localhost:${PORT}`)
})