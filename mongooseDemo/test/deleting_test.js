// const mongoose = require('mongoose')
// const GameChar = require('../models/gameChar')
// const assert = require('assert')

// describe('Deleting Records', function(){
   
//     beforeEach(function(done){
//         var char = new GameChar({
//             name:"Sally",
//             weight:60
//         })
//         char.save().then(function(){
//             assert(char.isNew === false);
//             done();
//         })
    
//     })
//     it("Deletes one record from the database", function(done){
//         GameChar.findOneAndRemove({name:'Sally'}).then(async()=>{
//             let result = await GameChar.findOne({name:'Sally'})
//             assert(result === null)
//             done()
//         }).catch(done)
//     })
// })