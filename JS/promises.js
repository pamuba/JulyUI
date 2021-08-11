//promise is a result in future, not immediately
//promise(resolve(value), reject(error))

let promise = new Promise(function(resolve, reject){
    setTimeout(
        ()=>reject("Not Done"),2000
    )
})

promise.then(
    result => console.log(result),
    // err => console.log("Error:",err)
).catch(
    err => console.log("Error:",err)
).finally(
    ()=>console.log("Always Runs")
)
