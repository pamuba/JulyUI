let express = require('express')
let mongojs = require('mongojs')

//configure mongojs
let db = mongojs('contactlist', ['contactlist'])

let app = express()
app.use(express.json())

//tell express about static folder
app.use(express.static(__dirname+'/public'))

app.get("/contactlist", function(req, res){
    console.log('Express got a request from the Controller')
    db.contactlist.find(function(err, docs){
      if(err === null){
        console.log(docs)
        res.json(docs)
      }
    })
})

app.post("/contactlist", function(req, res){
    console.log(req.body)
    db.contactlist.insert(req.body, function(err, doc){
        if(err === null){
            res.json(doc)
        } 
    })
})

app.delete("/contactlist/:id", function(req, res){
    var id = req.params.id;
    console.log(id)
    db.contactlist.remove({_id:mongojs.ObjectId(id)}, function(err, doc){
        res.json(doc)
    })
})

app.get("/contactlist/:id", function(req, res){
    var id = req.params.id;
    console.log(id)
    db.contactlist.findOne({_id:mongojs.ObjectId(id)}, function(err, doc){
        res.json(doc)
    })
})


app.put("/contactlist/:id", function(req, res){
    var id = req.params.id;
    console.log(req.params.body)

    db.contactlist.findAndModify({query:{_id:mongojs.ObjectId(id)}, 
        update: {$set:{name:req.body.name, email:req.body.email, number:req.body.number}},
        new:true}, function(err, doc){
            res.json(doc);
    })
})




app.listen("3000", "127.0.0.1", function(){
    console.log("Server listening @3000")
})