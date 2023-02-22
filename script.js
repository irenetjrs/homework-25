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
