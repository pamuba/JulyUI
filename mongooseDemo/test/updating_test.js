const mongoose = require('mongoose')
const GameChar = require('../models/gameChar')
const assert = require('assert')


describe("Updating Records", ()=>{

    var char;
    beforeEach((done)=>{
        char = new GameChar({
            name:"John",
            weight:60
        })
       char.save().then(function(){
            assert(char.isNew === false);
            done();
        })
    })

    it("Updates a record in the database",(done)=>{
        GameChar.findOneAndUpdate({name:"John"},{name:"Jill"}).then(async ()=>{
            let result = await GameChar.findOne({_id:char._id})
            assert(result.name === 'Jill')
            done();
            }).catch(done)
    })    
})