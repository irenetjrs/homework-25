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


