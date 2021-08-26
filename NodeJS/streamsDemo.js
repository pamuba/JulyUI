const http = require('http')
const fs = require('fs')

// console.log(__dirname)
// let readStream = fs.createReadStream(__dirname+'/data.txt', 'utf-8')

// readStream.on('data', function(chunk){
//     console.log("===============================CCCHHHUUUNNNKKKK=============================")
//     console.log(chunk )
// })

// process.on('exit',function(){
//     console.log("COMPLETED");
// })


let readStream = fs.createReadStream(__dirname+'/data.txt', 'utf-8')
let writeStream = fs.createWriteStream(__dirname+'/newdata.txt', 'utf-8')

// readStream.on('data', function(chunk){
//     console.log('New Chunk Received')
//     writeStream.write(chunk)
// })

readStream.pipe(writeStream);

