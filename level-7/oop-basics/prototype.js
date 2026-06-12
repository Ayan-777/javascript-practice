class User{
    constructor(name, age){
        this.name = name ;
        this.age = age
    }

    greet(){
        console.log(`My name is ${this.name} and my age is ${this.age} old`)
    }
}

let user1 = new User('Ayan',50);
let user2 = new User('sam', 50)

user1.greet();
user2.greet();

console.log(user1.hasOwnProperty('name'));   // true or false?
console.log(User.prototype.hasOwnProperty('greet'));  // true or false?
console.log(User.prototype);
console.log(User.prototype.greet);