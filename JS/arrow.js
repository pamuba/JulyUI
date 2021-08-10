//1. Doesnt have this keyword, can borrow this from outer scope
let group = {
    title: "Our Group",
    students: ["John", "Jill", "Jimmy"],

    showList(){
        console.log(this)
        this.students.forEach(
           
            // function(student){
            //     console.log(this.title+ ':'+student)
            // }
            (student)=>{
                console.log(this.title+ ':'+student)
            }

        )
    }
}

group.showList();

//2. cannot use with new
//3. no arguments
//4. super




