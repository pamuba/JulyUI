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

    
    //     fs.readFile(__dirname+'/data1.txt', (err, data) => {
    //         if (err) {
    //             console.log("Error")
    //         }
    //         else
    //             console.log(data);
    //       });
        
    
    // console.log("Last one")


    //Events

    //Event Emitter way

// const EventEmitter = require('events');

// function doSomeAsynchronousOperation() {
//     let myEvent = new EventEmitter();

//     // runs asynchronously
//     setTimeout(function(){
//         myEvent.emit('error', new Error('User Name cannot be empty'));
//     }, 1000);

//     return myEvent;
// }

// // Invoke the function
// let event = doSomeAsynchronousOperation();

// event.on('error', function(err) {
//     console.log(err.message);
// });

// event.on('done', function(result) {
//     console.log(result); // true
// });


//Domain

// var http = require('http');
// var domain = require('domain');

// http.createServer(function (req, res) {
//     var d = domain.create();
//     d.once('error', function(err) {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write('<head><meta charset="utf-8"/></head>');
//                  res.write('The following error occurred when the server received the client request:');
//         res.end(err.message);
//     });
//     d.run(function() {
//         if(req.url!=="/favicon.ico"){
//             noneexist();
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             res.write('<head><meta charset="utf-8"/></head>');
//                          res.end('Hello\n');
//         }
//     });
// }).listen(1337, "127.0.0.1");

//Logic
// var divideSync = function(x,y){
//     if(y === 0)
//     {
//         return new Error('Cant divide by zero')
//     }
//     else{
//         return x/y;
//     }
// }

// //Divide 4/2
// var result = divideSync(4,2)
// //did any error occour
// if( result instanceof Error){
//     //handlethe error safely
//     console.log('4/2 error', result.message)
// }
// else{
//     console.log('4/2 = ', result)
// }

// Divide 4/0
// var result = divideSync(4,0)
// //did any error occour
// if( result instanceof Error){
//     //handlethe error safely
//     console.log('4/0 error', result.message)
// }
// else{
//     console.log('4/0 = ', result)
// }


var divide = function(x,y,next){
    if(y === 0)
    {
        next(new Error('Cant divide by zero'), null)
    }
    else{
        next(null, x/y);
    }
}

divide(4,2, function(err, result){
    if(err)
    {
        console.log('4/2 error', err);
    }
    else{
        console.log('4/2 = ', result);
    }
})

divide(4,0, function(err, result){
    if(err)
    {console.log('4/0 error', err.message);}
    else{console.log('4/0 = ', result)}
})