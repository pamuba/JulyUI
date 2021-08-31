let express = require('express')
let mongojs = require('mongojs')

//configure mongojs
let db = mongojs('contactlist', ['contactlist'])

let app = express()


app.get("/contactlist", function(req, res){
    console.log('Express got a request from the Controller')
    db.contactlist.find(function(err, docs){
      if(err === null){
        console.log(docs)
        res.json(docs)
      }
    })
})

//tell express about static folder
app.use(express.static(__dirname+'/public'))

app.listen("3000", "127.0.0.1", function(){
    console.log("Server listening @3000")
})