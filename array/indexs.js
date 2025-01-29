// reduce 

let num = [1,2,3,4];
let add = num.reduce((initialValue, totalArray) => {
    return initialValue + totalArray;
})

console.log(add) 


const obj = [
    {
        name  : "Alice Wonder",
        age : 28,
        occupation : "Software Developer" ,
        accountBalance : 1265,
        hobbies : ["reading", "coding", "traveling"],
        isMarried : true,
    },
    {
        name  : "Alice Wonder",
        age : 28,
        occupation : "Software Developer" ,
        accountBalance : 1268,
        hobbies : ["reading", "coding", "traveling"],
        isMarried : false,
    },
    {
        name  : "Grace",
        age : 28,
        occupation : "Software Developer" ,
        accountBalance : 7265,
        hobbies : ["reading", "coding", "traveling"],
        isMarried : false,
    },
    {
        name  : "Alice Wonder",
        age : 28,
        occupation : "Software Developer" ,
        accountBalance : 53095,
        hobbies : ["reading", "coding", "traveling"],
        isMarried : false,
    },
    {
        name  : "Alice Wonder",
        age : 28,
        occupation : "Software Developer" ,
        accountBalance : 82320,
        hobbies : ["reading", "coding", "traveling"],
        isMarried : false,
    },
]

const totalAccountBalance = obj.reduce((a, b) => {
    return a + b.accountBalance;
}, 0)

console.log(totalAccountBalance);



// map

const arr = ["Sanni", "Grace", "nelson", "kelvin", ];
const newArr = arr.map((item) => {
    return item + " is a developer";
})

// const filterContent = arr.filter((item, b) => {
//   return b
// })

// console.log(filterContent)

console.log(newArr);


forEach 

const performForEach = arr.forEach((e) => {
  console.log(e .toUpperCase())
})


// filter 

const getGrace = obj.filter((i) => {
    return i.name === "Grace"
})

console.log(getGrace)

const getIsMarried = obj.filter((e) => {
return e.isMarried === true
})

console.log(getIsMarried)


const getGreater = num.filter((e) => {
    return e > 2;
})

console.log(getGreater)