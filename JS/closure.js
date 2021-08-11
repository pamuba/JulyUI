function outer(a,b){
    var outerA = 99;
    
    return function inner(){
        var c = 99;
        //captured 
        console.log(outerA)
        console.log(a)
        console.log(b)
        function inr(){
            console.log(outerA)
            console.log(a)
            console.log(b)
        }
        inr()
    }
    // inner()
}

var inr = outer(11,22)
setTimeout(
    ()=>{inr()}, 2000
)
