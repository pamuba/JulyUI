var fs = require('fs');


//sync

// try{
//     var readMe = fs.readFileSync('data1.txt', 'utf-8')
//     fs.writeFileSync('writeMe.txt', readMe)
//     console.log(readMe)
// }
// catch(er){
//     console.log(er.message)
// }


//async

// fs.readFile('data.txt', 'utf-8', function(err, data){
//     if(err != null){
//         console.log(er.message)
//     }
//     else{
//         fs.writeFile('writeMe.txt', data, (err)=>{
//             if(err != null){
//                 console.log(er.message)
//             }
//             else{
//                 console.log("Data Written Successfully")
//             }
//         })
//     }
// })

//
// fs.unlink('writeMe.txt', (err)=>{
//     if(err != null){
//         console.log(err.message)
//     }
//     else{
//         console.log("File Deleted")
//     }
// })

// fs.mkdirSync('dummy')
fs.rmdirSync('dummy')