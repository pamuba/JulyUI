const fs = require('fs');


//Sync Code
// try{
//     let data = fs.readFileSync(__dirname+'/data1.txt', 'utf-8')
// if( data !== null)
//     console.log(data)
// else
//     console.log('Wrong File')
// }
// catch(err){
//     console.log(err.message)
// }
// console.log("Last one")


//async code 

    
        fs.readFile(__dirname+'/data1.txt', (err, data) => {
            if (err) {
                console.log("Error")
            }
            else
                console.log(data);
          });
        
    
    console.log("Last one")
