const _ = require("lodash")

const val = _.VERSION
console.log(val)

// =======> Array

//Lodash first and last array elements
let arr = ['sky', 'wood', 'forest', 'falcon', 
    'pear', 'ocean', 'universe'];

let word1 = _.first(arr)
let word2 = _.last(arr)

console.log("first element in array: "+word1)
console.log("first element in array:"+word1)


let nums = [11,22,33,44,55,66,77,88,99]
console.log(`let num = [${nums}]`)
//find nth array elements
console.log(_.nth(nums,2))
console.log(_.nth(nums,-2))

//chunching array means split into subarray
console.log(_.chunk(nums,2))

//array slice 
let sliceNum = _.slice(nums,1,5)
console.log("New slice array ="+sliceNum)

//generate random element in array 
console.log("print random in between 10 to 20 = "+_.random(10,20))

//maximum and minimum
console.log(`minimum value = ${_.min(nums)}`)
console.log(`Maximum value = ${_.max(nums)}`)
console.log(`Maximum value in range (15,55) = ${_.max(_.range(15,55))}`)


let arr1 = ['yog', 'sanny', 'carry', 'marry'];
console.log(`let arr = [${arr1}]}`)
console.log(`print random element = ${_.sample(arr1)}`)
console.log(`print random element = ${_.sample(arr1)}`)

//shuffle element in array 
console.log(`shuffle element in array = ${_.shuffle(arr1)}`)
console.log(`shuffle element in array = ${_.shuffle(arr1)}`)




// =======> functions

//exicute functions n times
_.times(2,()=>{
    console.log("I am generating 2 times using .times method")
})

//delay in exicution
function msg() {
    console.log("Delay message")
}
console.log("Normal message");
// _.delay(msg,2000)


//range function
console.log(`using range generate array of num (start,end,step) = ${_.range(0,11,2)}`)

let arr2 = [-2, 0, 3, 7, -5, 1, 2];
console.log(`sum of the element in array = ${_.sum(arr2)}`)

//_.curry function multiple arguments into a sequence of nested functions with a single argument.
function add(a, b, c) {
    return a + b + c;
}
let curried = _.curry(add)
let res = curried(2)(3)(4)
console.log(`add using curry = ${res}`)

//pull function removes all given values from the array.
let arr4 = [1, 5, 3, 1, 5, 2, 4, 5, 3, 8];
_.pull(arr4,5,8)
console.log("pull array(remove item pass) actual array = "+arr4)

arr4 = [1, -2, 3, 4, -5, 6, 7, -8, -9]
//_.take function 
    //creates a slice of an array
let num1 = _.take(arr4, 2);
let num2 = _.takeRight(arr4, 3)

console.log(num1);
console.log(num2);

//_.takeWhile function 
   //creates a slice of an array with elements taken from the beginning

num1 = _.takeWhile(arr4, (n) => { return n < 5 });
num2 = _.takeRightWhile(arr4, (n) => { return n < 0 });

console.log(num1);
console.log(num2);

// partition operation splits the original collection into a pair of arrays
let [partition1, partition2] = _.partition(arr4, (val) => val < 0);
console.log("partition one = "+partition1)
console.log("partition two = "+partition2)

//filter function
let arr3 = [1,2,3,4,5,6,7,8,9]
let filterArray = _.filter(arr3,(val)=>val%2==0)
console.log(`let arr = [${arr3}]`)
console.log("filter array = "+filterArray)

//find function give first match
let find1 = _.find(arr3,(val)=>val%2==0)
console.log("find array = "+find1)

//reduce function
let sum = _.reduce(arr3,(total,next)=>{
    return total+next
})
console.log("Sum using reduce = "+sum)


let colours = ["red", "green", "white", "blue", "black"];
let res1 = _.reduceRight(colours, (next, total) => { return `${total}-*-${next}` });
console.log(res1);

let users = [
    { name: 'John', age: 25, occupation: 'gardener' },
    { name: 'Lenny', age: 51, occupation: 'programmer' },
    { name: 'Andrew', age: 43, occupation: 'teacher' },
    { name: 'Peter', age: 52, occupation: 'gardener' },
    { name: 'Anna', age: 43, occupation: 'teacher' },
    { name: 'Albert', age: 46, occupation: 'programmer' },
    { name: 'Adam', age: 47, occupation: 'teacher' },
    { name: 'Robert', age: 32, occupation: 'driver' }
];

let grouped = _.reduce(users, (result, user) => {
    (result[user.occupation] || (result[user.occupation] = [])).push(user);  
    return result;
}, {});

console.log(grouped);

//string case
let array = ["sky", "Sun", "Blue Island"];
console.log(_.map(array, _.camelCase));
console.log(_.map(array, _.capitalize));
console.log(_.map(array, _.kebabCase));
console.log(_.map(array, _.lowerCase));
console.log(_.map(array, _.upperCase));


//string padding
nums = [11, 122, 5555, 222, 9, 18];
nums.forEach( e => {
    console.log(_.padStart(e.toString(), 10, '.'));
});

//string trim
let word3 = '    traveller      '
console.log(word3)
console.log(_.trim(word3))
console.log(_.trimStart(word3))
console.log(_.trimEnd(word3))


//object key and values
let ob = {age: 24, name: "Rebecca", occupation: "teacher"};

console.log(_.keys(ob))
console.log(_.values(ob))
console.log(_.pick({ name: 'Janu', age: 25 }, 'name'));
console.log(_.pick({ name: 'Pankaj', age: 25 }, 'age'));

//at function returns the value at the given object path.

let ob1 = [
    { id: 1, name: 'John', about: { 'age': 25, 'colours': ['red', 'green'], } },
    { id: 2, name: 'Lenny', about: { 'age': 51, 'colours': ['blue'], } },
    { id: 3, name: 'Andy', about: { 'age': 43, 'colours': ['orange', 'steelblue'], } },
    { id: 4, name: 'Peter', about: { 'age': 52, 'colours': ['black'], } },
    { id: 5, name: 'Anna', about: { 'age': 43, 'colours': ['purple'], } },
];


let name = _.at(ob1[2], 'name');
console.log(name);

let colour = _.at(ob1[0], 'about.colours');
console.log(colour);

//set and get function
let data = { user: { name: "John Doe", age: 34, occupation: "gardener"} }

_.set(data,"user.age",36)
console.log(data)
console.log(_.get(data, "user.name", "unknown"));
console.log(_.get(data, "user.maritual_status", "unknown"));

_.forIn(ob1, (value, key) => {
    console.log(`${key}: ${value.name}`);
})