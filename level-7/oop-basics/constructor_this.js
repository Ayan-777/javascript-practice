// let user1 = {
//   name: 'John',
//   age: 25,
//   greet() {
//     console.log('Hi, I am ' + this.name);
//   }
// }

// let user2 = {
//   name: 'Ayan',
//   age: 20,
//   greet() {
//     console.log('Hi, I am ' + this.name);
//   }
// }


// let user3 = {
//   name: 'sonic',
//   age: 45,
//   greet() {
//     console.log('Hi, I am ' + this.name);
//   }
// }


// class User {
//     constructor(name, age, car){
//         this.name = name;
//         this.age = age
//         this.car = car
//     }
//     greet(){
//         console.log(`Hi, I am ${this.name} and I am ${this.age} year old and i like ${this.car}`)
//     }
// }

// class Admin extends User {
//     constructor(name, age, car,role){
//         super(name, age, car)
//         this.role = role
//     }

//     adminname(ad){
//         console.log(`I am admid ${ad}`)
//     }

//     deleteuser(name){
//         console.log(`Deleted user: ${name}`)
//     }
// }



// let user1 = new User('John', 25, 'BMW M4');
// let user2 = new User('Ayan', 20,'Porsche 911');
// let user3 = new User('sonic', 45,'Lamborghini Urus');

// user1.greet();
// user2.greet();
// user3.greet();

// let admin = new Admin('Ayan', 20, 'Porsche 911')
// admin.adminname('ayan')
// admin.deleteuser('John');








class User {
  constructor(name) {
    this.name = name;
  }
  greet() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
}

let user1 = new User('John');
user1.greet();


