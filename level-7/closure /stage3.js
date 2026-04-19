// #1: createBankAccount()
// Requirements:

// Create a function that returns an object
// The object has methods: deposit(amount), withdraw(amount), getBalance()
// The balance is private — you can't access it directly from outside
// You can only change it through the methods

// function  createBankAccount(){

//     let balance = 0;

//     return{
//         deposit(ag){
//             balance += ag
//         },

//         withdraw(ag){
//             balance -= ag
//         },

//         getBalance(){
//             return balance
//         }
//     }
// }

// let account = createBankAccount();

// account.deposit(100);
// account.withdraw(30);
// console.log(account.getBalance()); // 70
// ░▒▓   …/my-all-coding-main/level-7/closure    main ✘!?   v22.22.0   22:20 
// ❯ node stage3.js
// 70

// 2: createTodoManager()
// Requirements:

// Returns an object with methods: addTodo(task), removeTodo(index), getTodos()
// Todos are stored in a private array
// You can add, remove, and view todos only through the methods

// function createTodoManager() {
//   let todos = [];

//   return {
//     addTodo(item) {
//       todos.push(item);
//     },

//     removeTodo(index) {
//       todos.splice(index, 1);
//     },

//     getTodos() {
//       return todos;
//     },
//   };
// }

// let todos = createTodoManager();
// todos.addTodo("Learn closures");
// todos.addTodo("Build projects");
// todos.removeTodo(0);
// console.log(todos.getTodos()); // ['Build projects']

// ░▒▓   …/my-all-coding-main/level-7/closure    main ✘!?   v22.22.0   22:38 
// ❯ node stage3.js
// [ 'Build projects' ]



// #3: createLoginSystem()
// Requirements:

// Returns an object with methods: register(username, password), login(username, password), isLoggedIn()
// Store users in a private object/array with usernames and passwords
// register() adds a new user (check if username already exists)
// login() checks credentials and sets a logged-in state
// isLoggedIn() returns true/false

// function createLoginSystem(){
//     let users = {};
//     let currentUser = null;


//     return {
//         register(username,password){
//             users[username] = password
//         },

//         login(username,password){
//             if(username in users){
//                 if(password === users[username]){
//                     currentUser = username
//                 }else currentUser = null
//             }else currentUser = null
//         },

//         isLoggedIn (){
//            return currentUser !== null
//         }

//     }
// }


// let auth = createLoginSystem();
// auth.register('john', 'pass123');
// auth.login('john', 'pass123');
// console.log(auth.isLoggedIn()); // true
// auth.login('john', 'wrongpass');
// console.log(auth.isLoggedIn()); // false

// ░▒▓   …/my-all-coding-main/level-7/closure    main ✘!?   v22.22.0   00:12  
// ❯ node stage3.js 
// true
// false