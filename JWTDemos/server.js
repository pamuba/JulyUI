require('dotenv').config()
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json())

//gets some data from the database
const posts = [
    {
        username: 'John',
        title:  'Post 1'
    },
    {
        username: 'Jill',
        title:  'Post 2'
    },
]

app.get('/posts', authenticateToken, (req, res)=>{
    // res.json(posts)

    res.json(posts.filter(posts => posts.username === req.user.name))
})

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1];

    if(token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

app.listen(3000, ()=>{console.log("Server Started @3000")});