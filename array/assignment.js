//1 For Loop & Reduce (Combination)

// forLoop
const score = [80, 95, 78, 88, 92, 67, 75, 89, 100, 55];

let studentHighestScore = score[0];

for (let index = 1; index < score.length; index++) {
  if (score[index] > studentHighestScore) {
    studentHighestScore = score[index];
  }
}

console.log(studentHighestScore);

// reduce
let totalSum = score.reduce((initialValue, totalArray) => {
  return initialValue + totalArray;
}, 0);
console.log(totalSum);

const averageScore = totalSum / score.length;
console.log(averageScore);


//2 Reduce & Map (Advanced Transformation)
// reduce 
const products = [
  { name: "Laptop", price: 1500 },
  { name: "Phone", price: 700 },
  { name: "Tablet", price: 300 },
  { name: "Monitor", price: 400 },
];

let generalCost = products.reduce((a, b) => {
  return a + b.price;
}, 0);
console.log(generalCost);

// map 
let discount = products.map((product) => {
  return product.price * 0.5;
});

console.log(discount);



// 3 ForEach & Map (String Manipulation)

// map 
const names = ["john doe", "jane smith", "alice wonderland", "bob builder"];
let capitalized = names.map((a) => {
  return a
    .split(" ")
    .map((b) => b.charAt(0).toUpperCase() + b.slice(1))
    .join(" ");
});

console.log(capitalized);


// forEach 
names.forEach((a) => {
  const initials = a
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
  console.log(initials);
});



//4 Filter & Sort (Complex Filtering & Sorting)


// filter
const employees = [
  { name: "Michael", age: 45, salary: 5000 },
  { name: "Sarah", age: 30, salary: 7000 },
  { name: "David", age: 25, salary: 4500 },
  { name: "Emily", age: 28, salary: 5500 },
  { name: "John", age: 35, salary: 6000 },
];

const earners = employees.filter((e) => e.salary > 5000);
console.log(earners);

let youngEmployee = employees.filter((e) => e.age < 30);
console.log(youngEmployee);

//5 Combination Challenge (Real-Life Example)

const transactions = [
  { type: "deposit", amount: 1000 },
  { type: "withdrawal", amount: 500 },
  { type: "deposit", amount: 1200 },
  { type: "withdrawal", amount: 300 },
  { type: "deposit", amount: 400 },
  { type: "withdrawal", amount: 700 },
]; 

let totalBalance = transactions.reduce((value, acc) => {
    return value + acc.amount;
}, 0)
console.log(totalBalance)

let depositTrans = transactions.filter((d) => d.type === "deposit")
console.log(depositTrans)

