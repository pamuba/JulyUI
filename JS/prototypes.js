// function Student(){
//     this.name = "Jonh",
//     this.gender = "Male"
// }

// Student.prototype.age = 15

// var stdObj1 = new Student();
// // stdObj1.age = 15;
// console.log(stdObj1.age)

// var stdObj2 = new Student()
// console.log(stdObj2.age.toString)

let dragon = {
    name : "Tanya",
    fire : true,
    fight(){
        return 9;
    },
    sing(){
        if(this.fire) return `I am ${this.name}, the breather of fire`;
    }
}
let lizard = {
    name: "Kiki",
    fight(){
        return 1;
    }
}

// we can borrow the sing method for lizard using bind
// const singLizard = dragon.sing.bind(lizard)
// console.log(singLizard())

//lizard should inherit all the props an methods from dragon
//___proto__
//prototpe
lizard.__proto__ = dragon
console.log(lizard.sing())
//what about fire
console.log(lizard.fire)
//fight fn
console.log(lizard.fight())

///prototype chain
console.log(lizard.__proto__)
