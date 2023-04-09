// Завдання 1
// const user = {}
// Object.defineProperty(user, 'name', {
//     value: 'Mike',
//     writable: false
// })
// Object.defineProperty(user, 'age',{
//     value: '25',
//     writable: false
// })
// Object.defineProperty(user, 'id', {
//     value: '333',
//     writable: false,
//     configurable:false
// })
// console.log(user.name)
// user.name = 'nic'
// console.log(user.name)

// console.log(user.age)

// console.log(user.id)
// delete user.id
// console.log(user.id)
// console.log(user)

// Завдання 2
// let dataBase={
//     dbName:'user',
//     dbType: 'MySQL'
// }
// let configurateDB ={
//     token:'123',
//     password: '567',
//     user:'admin'
// }
// Object.freeze(dataBase)
// Object.seal(configurateDB)



// Завдання 3 :(
// let a = ['a:1', 'b:2', 'c:3']
// let b = []
// function art(arg, index){
//     let pos = arg[index].split(':')
//     console.log(pos)
//     b[pos[0]] = pos[1]
//     console.log(b)
//     art(arg,++index)
// }
// art(a,0)

// let salaries = {
//     frontend: 2000,
//     backend: 1500,
//     design: 1000,
//     set addSalaries(value) {
//         function art(value, index){
//             let demo = value[index].split(':')
//             salaries[demo[0]] = demo[1]
//             art(value,++index)
//         }
//     }}

// Object.defineProperty(salaries, 'sum', {
//     enumarable: false,
//     get() {
//         let sum = 0;
//         for (salary in this) {
//             sum += this[salary];
//         }
//         console.log(sum)
//     },

// })
// salaries.addSalaries = ['frontend:2500', 'backend:1750', 'design:1300', 'manager:800']
// console.log(salaries)

// Завдання 4 :(

//  let nnKey = prompt('Name new key')
//             let nnKeyValue = prompt("Value new key")
// let user = {
//     name: 'Mike',
//     surname: 'Davis',
//     age: 25,
//     nnKey: nnKeyValue,
//     get userInfo() {
//         console.log(`${this.name} : ${user.name}, ${nnKey} : ${nnKeyValue}`);
//     },
//     set userInfo(value) {
//         function rec() {
    
//             if(nnKeyValue != ' '){
//                 nnKey = 'Null'
//             }
//             if(nnKey != ' '){
//                 alert('Error. Enter key!')
//                 rec()
//             }
//             else{

//             }
//         }
//     }
// }

// user.userInfo // name: Mike, surname: Davis, age: 25

// // user.login = 'MK_25'
// console.log(user.userInfo(Naviga))