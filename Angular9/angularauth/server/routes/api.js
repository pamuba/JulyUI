const express = require('express')
const router = express.Router()

// localhost:3000/api === /
router.get('/', (req, res)=>{
    res.send('From Api route')
})

module.exports = router
