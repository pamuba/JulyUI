// const mongoose = require('mongoose')
// const GameChar = require('../models/gameChar')
// const assert = require('assert')

// describe("Finding Records", function(){
//     beforeEach(function(done){
//         var char = new GameChar({
//             name:"Kim",
//             weight:60
//         })
//         char.save().then(function(){
//             assert(char.isNew === false);
//             done();
//         })
        
//     })

//     it("Finds a record in the database", async ()=>{
//             let result = await GameChar.findOne({name:"Kim"})
//             assert(result.name === 'Kim')
//         })
// })