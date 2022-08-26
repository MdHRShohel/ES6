const numbers = [12, 43, 34, 32, 44];
const half = numbers.map(n => n/2);
const third = numbers.map(x => x/3);

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady' ,'Tom Sulaiman'];
const firstLetters = friends.map(friend => friend[0]);
// console.log(firstLetters);
const nameLengths = friends.map(friend => friend.length);
console.log(nameLengths);


const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 2, name: 'mobile', price: 55000},
    {id: 3, name: 'tablet', price: 34500},
    ];

//const items = products.map(product => console.log(product));
const items = products.map(product => product.name);
const prices = products.map(product => product.price);

console.log(prices);
