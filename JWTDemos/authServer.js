require('dotenv').config()
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json())

let refreshTokens = []

app.post('/token', (req, res)=>{
    const refreshToken = req.body.token
    if(refreshTokens == null) return res.sendStatus(401)
    if(!refreshTokens.includes(refreshToken)) return res.sendStatus(403)

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user)=>{
        if(err) return sendStatus(403)
        const accessToken = generateAccessToken({name:user.name})
        res.json({accessToken:accessToken});
    })
})

app.delete('/logout', (req, res)=>{
    refreshTokens = refreshTokens.filter(token => token != req.body.token)
    res.sendStatus(204)
})

app.post('/login', (req, res)=>{
    //Authentication is done

    //Implement the Authorization part
    const username = req.body.username;
    const user = {name: username};

    //craeted the jwt token
    const accessToken = generateAccessToken(user)
    //refresh token
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
    refreshTokens.push(refreshToken)
    res.json({accessToken:accessToken , refreshToken});
});

function generateAccessToken(user){
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '35s'})
}

app.listen(4000, ()=>{console.log("Server Started @4000")});