// task 1

const user = {

};
Object.defineProperty(user, 'name',{
writable: true,
});
Object.defineProperty(user, 'age',{
   writable: true,

});
Object.defineProperty(user, 'id',{
   configurable: false,
});
// Object.isExtensible(user.name);
// Object.isExtensible(user.age);
// Object.isSealed(user.id);

// task 2

let dataBase = {
   dbName: 'user',
   dbType: 'MySQL'
}
let configurateDB = {
   token: '123',
   password: '567',
   user: 'admin'
}
Object.freeze(dataBase);
Object.seal(configurateDB);
console.log(Object.isFrozen(dataBase));
console.log(Object.isSealed(configurateDB));

// task 3

let salaries = {
   frontend: 2000,
   backend: 1500,
   design: 1000,
}
Object.defineProperty(salaries, 'sum', {
   get(){
      let sum = 0;
      for (salary in this){
         sum += this[salary];
      }
      console.log(sum);
   },
   enumerable: false,
});
Object.defineProperty(salaries, 'addSalaries', {
   set (value){
   for (let i = 0; i < value.length; i++){
      let newSalaries = value[i].split(':');
      console.log(newSalaries);
      this[newSalaries[0]] = +newSalaries[1];
   }
},
enumerable: false,
});

console.log(salaries);
salaries.sum
salaries.addSalaries = [
   'frontend: 2500',
   'backend: 1750', 
   'design: 1300', 
   'manager: 800',
];
console.log(salaries);
salaries.sum

// task 4

let userr = {
   name: 'Mike',
   surname: 'Davis',
   age: 25,
}
Object.defineProperty(userr, 'userInfo', {
   get(){
      let data = [];
      for(key in this){
         data.push(`${key} : ${this[key]}`);
      }
      return data.join(', ');
   },
   enumerable: false,
   configurtive: true,
});
console.log(userr.userInfo);
userr.login = 'MK-18';
console.log(userr.userInfo);